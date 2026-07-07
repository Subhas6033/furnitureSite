import { useState, useEffect, Suspense } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  PresentationControls,
} from "@react-three/drei";
import { getProductById, viewAngles } from "../../Data/products";
import { staggerContainer, fadeUp } from "../../Animations/Animations";
import Product3DModel from "./Product3DModel";

// 3D Model loading placeholder
const Loading3D = () => (
  <mesh>
    <boxGeometry args={[1, 1, 1]} />
    <meshStandardMaterial color="#a97c2f" wireframe />
  </mesh>
);

// Color filter overlay component
const ColorOverlay = ({ color, isActive }) => {
  if (!isActive || !color) return null;

  return (
    <div
      className="absolute inset-0 pointer-events-none transition-opacity duration-300"
      style={{
        backgroundColor: color,
        opacity: 0.15,
        mixBlendMode: "multiply",
      }}
    />
  );
};

/**
 * ProductDetails Component
 *
 * Displays comprehensive product information with multiple viewing options:
 * - Image gallery with different view angles (Front, Side, Back, Detail)
 * - Interactive 3D model view
 * - Product specifications
 * - Color selection with visual preview
 *
 * Production-ready with proper accessibility, responsive design, and error handling.
 */
const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = getProductById(productId);

  // State for managing view mode and selections
  const [activeView, setActiveView] = useState("detail");
  const [selectedColor, setSelectedColor] = useState(null);

  // Initialize selected color when product loads
  useEffect(() => {
    if (product?.colors?.length > 0) {
      setSelectedColor(product.colors[0]);
    }
  }, [product]);

  // Redirect to home if product not found
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center px-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Product Not Found
          </h2>
          <button
            onClick={() => navigate("/")}
            className="bg-[#123326] text-white px-6 py-3 rounded-full hover:bg-[#0f2920] transition-colors"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  // Initialize selected color with first available color
  const currentColor = selectedColor || product.colors?.[0] || null;

  // Map view IDs to their array index positions
  // viewAngles array: [detail, front, side, back, 3d]
  const viewToImageIndex = {
    detail: 0,
    front: 1,
    side: 2,
    back: 3,
  };

  // Get product images array - ensure it's an array
  const productImagesArray = Array.isArray(product.images) ? product.images : [];

  // Get current image based on active view
  const currentImage = activeView === "3d"
    ? null
    : (productImagesArray[viewToImageIndex[activeView]] || productImagesArray[0]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white pt-20 md:pt-24"
    >
      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Left Column - Product Images & 3D View */}
          <div className="space-y-3 sm:space-y-4">
            {/* Main Image Display Area */}
            <motion.div
              key={`${activeView}-${currentColor?.name}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative bg-[#f5f5f5] rounded-lg overflow-hidden aspect-square"
            >
              <AnimatePresence mode="wait">
                {activeView === "3d" ? (
                  <motion.div
                    key="3d-view"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="w-full h-full"
                  >
                    <Canvas
                      camera={{ position: [0, 0, 5], fov: 50 }}
                      gl={{ antialias: true, alpha: true }}
                    >
                      <Suspense fallback={<Loading3D />}>
                        <ambientLight intensity={0.5} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                        <pointLight position={[-10, -10, -10]} />
                        <PresentationControls
                          global
                          config={{ mass: 2, tension: 500 }}
                          snap={{ mass: 4, tension: 1500 }}
                          rotation={[0, 0, 0]}
                          polar={[-Math.PI / 3, Math.PI / 3]}
                          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
                        >
                          <Product3DModel type={product.model3d} />
                        </PresentationControls>
                        <OrbitControls
                          enableZoom={true}
                          enablePan={false}
                          minDistance={3}
                          maxDistance={10}
                          autoRotate
                          autoRotateSpeed={2}
                        />
                        <Environment preset="apartment" />
                      </Suspense>
                    </Canvas>
                    {/* 3D View Instructions */}
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-black/50 text-white px-3 py-1.5 sm:py-2 rounded text-xs sm:text-sm">
                      Drag to rotate • Scroll to zoom
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key={`img-${activeView}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative w-full h-full"
                  >
                    <img
                      src={currentImage}
                      alt={`${product.name} - ${viewAngles.find((v) => v.id === activeView)?.label}`}
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                    {/* Color overlay for visual preview */}
                    <ColorOverlay color={currentColor?.hex} isActive={activeView !== "3d" && !!currentColor} />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Everything is Customizable Badge */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-[#123326] text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-medium">
                Everything is Customizable
              </div>
            </motion.div>

            {/* View Angle Thumbnails - Text only, no icons */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
              {viewAngles.map((angle) => {
                // Check if this view has an image (skip for 3D)
                const imageIndex = viewToImageIndex[angle.id];
                const hasImage = angle.id === "3d" || (productImagesArray[imageIndex] && productImagesArray[imageIndex].trim() !== "");

                // Don't render if no image and not 3D
                if (!hasImage && angle.id !== "3d") return null;

                return (
                  <button
                    key={angle.id}
                    onClick={() => setActiveView(angle.id)}
                    className={`shrink-0 px-3 sm:px-4 py-2 rounded-lg transition-all text-sm font-medium ${
                      activeView === angle.id
                        ? "bg-[#123326] text-white"
                        : "bg-[#f5f5f5] text-gray-600 hover:bg-[#e8e8e8]"
                    }`}
                    aria-pressed={activeView === angle.id}
                  >
                    {angle.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column - Product Information */}
          <div className="space-y-5 sm:space-y-6">
            {/* Product Title & Brand */}
            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={fadeUp}>
                <p className="text-sm text-[#2874f0] font-medium mb-1">
                  {product.category} &gt; {product.name}
                </p>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#1a1a1a] mb-2">
                  {product.name}
                </h1>
              </motion.div>

              {/* Rating & Reviews */}
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4"
              >
                <div className="flex items-center gap-1 bg-[#fff7e6] px-2 py-1 rounded">
                  <span className="text-[#ff9f00] font-bold">{product.rating}</span>
                  <span className="text-[#ff9f00]" aria-hidden="true">★</span>
                </div>
                <span className="text-gray-600 text-sm">{product.reviews} Reviews</span>
                <span className="text-gray-300 hidden sm:inline" aria-hidden="true">|</span>
                <span className="text-green-600 font-medium text-sm">
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </motion.div>

              {/* Color Selection - Fixed color changing feature */}
              {product.colors && product.colors.length > 0 && (
                <motion.div variants={fadeUp} className="mb-5 sm:mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">
                    Select Color:
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color)}
                        className={`group flex items-center gap-2 px-3 py-2 rounded-lg border-2 transition-all ${
                          currentColor?.name === color.name
                            ? "border-[#2874f0] bg-blue-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        aria-label={`Select ${color.name} color`}
                        aria-pressed={currentColor?.name === color.name}
                      >
                        <span
                          className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border border-gray-300 shadow-sm"
                          style={{ backgroundColor: color.hex }}
                        />
                        <span className="text-sm text-gray-700 hidden sm:inline">
                          {color.name}
                        </span>
                      </button>
                    ))}
                  </div>
                  {/* Selected color indicator */}
                  {currentColor && (
                    <p className="mt-3 text-sm text-gray-600">
                      Selected: <span className="font-medium">{currentColor.name}</span>
                    </p>
                  )}
                </motion.div>
              )}

              {/* Everything is Customizable */}
              <motion.div variants={fadeUp} className="mb-5 sm:mb-6">
                <span className="inline-block bg-[#123326] text-white text-sm font-medium px-4 py-2 rounded-full">
                  Everything is Customizable
                </span>
              </motion.div>

              {/* Product Description */}
              <motion.div variants={fadeUp} className="mb-5 sm:mb-6">
                <h3 className="text-base sm:text-lg font-semibold text-[#1a1a1a] mb-3">
                  Product Description
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {product.description}
                </p>
              </motion.div>

              {/* Specifications */}
              <motion.div
                variants={fadeUp}
                className="border-t border-gray-200 pt-5 sm:pt-6"
              >
                <h3 className="text-base sm:text-lg font-semibold text-[#1a1a1a] mb-4">
                  Specifications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {Object.entries(product.specifications).map(
                    ([key, value]) => (
                      <div key={key} className="bg-[#f5f5f5] p-3 rounded-lg">
                        <p className="text-xs text-gray-500 mb-0.5">{key}</p>
                        <p className="text-sm font-medium text-[#1a1a1a]">
                          {value}
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetails;