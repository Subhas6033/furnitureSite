import { motion, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { staggerContainer, fadeUp } from "../../Animations/Animations";
import { products } from "../../Data/products";

const FeaturedProducts = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const calculateDiscount = (originalPrice, currentPrice) => {
    return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
  };

  // Star rating component
  const StarRating = ({ rating }) => (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < Math.floor(rating) ? "text-amber-400" : "text-slate-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          viewport={{ once: true }}
          variants={staggerContainer(0.1, 0.1)}
        >
          <motion.div
            className="text-center md:text-left mb-6 md:mb-0"
            variants={fadeUp}
          >
            <span className="inline-block text-sm font-semibold tracking-[0.25em] uppercase text-brand-accent mb-4">
              Handpicked For You
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-slate-900 mb-4">
              Featured Pieces
            </h2>
            <p className="text-slate-600 text-lg max-w-xl">
              Our most loved pieces, chosen by our design team for their
              exceptional craftsmanship and timeless appeal.
            </p>
          </motion.div>
          <motion.div variants={fadeUp}>
            <button
              onClick={() => navigate("/products")}
              className="group bg-brand-primary hover:bg-brand-primary-hover text-white px-7 py-3.5 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/20 hover:-translate-y-1 flex items-center gap-2"
            >
              <span>View All Products</span>
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </motion.div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          viewport={{ once: true }}
          variants={staggerContainer(0.1, 0.1)}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={fadeUp}
              custom={index}
              className="group cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              {/* Product Card Image */}
              <div className="relative overflow-hidden rounded-2xl mb-4 bg-linear-to-br from-slate-100 to-slate-50 aspect-4/5">
                <motion.img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.originalPrice > product.price && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="bg-brand-accent text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
                    >
                      {calculateDiscount(product.originalPrice, product.price)}%
                      OFF
                    </motion.span>
                  )}
                  {product.tag && (
                    <span className="bg-brand-primary text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-lg">
                      {product.tag}
                    </span>
                  )}
                </div>

                {/* Wishlist Button */}
                <button className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 shadow-lg">
                  <svg
                    className="w-5 h-5 text-slate-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />

                {/* Quick View Button */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.button
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    className="bg-white text-slate-900 px-6 py-3 rounded-full text-sm font-semibold shadow-xl"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProductClick(product.id);
                    }}
                  >
                    Quick View
                  </motion.button>
                </motion.div>
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                {/* Category */}
                <p className="text-xs font-medium text-brand-accent uppercase tracking-wider">
                  {product.category}
                </p>

                {/* Product Name */}
                <h3 className="text-slate-900 font-medium text-lg group-hover:text-brand-primary transition-colors duration-300 line-clamp-1">
                  {product.name}
                </h3>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-slate-900 font-bold text-xl">
                    ${product.price.toLocaleString()}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-slate-400 line-through text-sm">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-3 pt-1">
                  <StarRating rating={product.rating} />
                  <span className="text-slate-400 text-sm">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
