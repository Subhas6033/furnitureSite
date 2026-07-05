/**
 * Product Data
 *
 * This file contains all product data for the e-commerce platform.
 * Each product includes multiple images for different view angles,
 * 3D model configuration, specifications, and other details.
 *
 * Why: Centralized product data allows easy management and sharing
 * between Homepage and Product Details page.
 */

// Product images organized by view angle (like Flipkart)
const productImages = {
  milano: [
    "https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=800&auto=format&fit=crop", // Front view
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop", // Side view
    "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800&auto=format&fit=crop", // Back view
    "https://images.unsplash.com/photo-1550226891-ef816aed4a98?q=80&w=800&auto=format&fit=crop", // Detail view
  ],
  oslo: [
    "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800&auto=format&fit=crop", // Front view
    "https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=800&auto=format&fit=crop", // Side view
    "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800&auto=format&fit=crop", // Top view
    "https://images.unsplash.com/photo-1615066390971-03e4e1c36d28?q=80&w=800&auto=format&fit=crop", // Detail view
  ],
  copenhagen: [
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop", // Front view
    "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=800&auto=format&fit=crop", // Side view
    "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=800&auto=format&fit=crop", // Back view
    "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=800&auto=format&fit=crop", // Detail view
  ],
  stockholm: [
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop", // Front view
    "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=800&auto=format&fit=crop", // Side view
    "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?q=80&w=800&auto=format&fit=crop", // Back view
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop", // Detail view
  ],
};

/**
 * View angle labels for product images
 * Similar to how Flipkart shows different angles
 */
export const viewAngles = [
  { id: "front", label: "Front View", icon: "👁️" },
  { id: "side", label: "Side View", icon: "↗️" },
  { id: "back", label: "Back View", icon: "🔄" },
  { id: "detail", label: "Detail", icon: "🔍" },
  { id: "3d", label: "3D View", icon: "🎲" },
];

/**
 * All products data
 * Each product has:
 * - id: unique identifier
 * - name: product name
 * - category: product category
 * - price: product price
 * - originalPrice: price before discount (for showing deals)
 * - images: array of images for different view angles
 * - description: product description
 * - specifications: detailed specifications
 * - features: product features
 * - colors: available color options
 * - rating: product rating
 * - reviews: number of reviews
 * - inStock: stock status
 * - tag: promotional tag
 * - model3d: 3D model configuration (type of primitive to render)
 */
export const products = [
  {
    id: "milano-leather-sofa",
    name: "Milano Leather Sofa",
    category: "Sofas",
    price: 2499,
    originalPrice: 3299,
    images: productImages.milano,
    description: "Experience the pinnacle of Italian craftsmanship with our Milano Leather Sofa. Made from premium full-grain leather, this sofa combines timeless elegance with exceptional comfort. The deep cushioning and sturdy wooden frame ensure lasting durability, while the sleek modern design adds sophistication to any living space.",
    specifications: {
      "Dimensions": "220cm x 90cm x 85cm",
      "Material": "Premium Full-Grain Leather",
      "Frame": "Kiln-dried Hardwood",
      "Cushion": "High-density Foam",
      "Weight Capacity": "350 kg",
      "Color": "Cognac Brown",
      "Warranty": "10 Years",
    },
    features: [
      "Premium Italian full-grain leather",
      "Stain-resistant and easy to clean",
      "Removable cushion covers",
      "Solid hardwood frame with reinforcement",
      "High-density foam for optimal comfort",
    ],
    colors: [
      { name: "Cognac Brown", hex: "#8B4513" },
      { name: "Charcoal Black", hex: "#36454F" },
      { name: "Cream White", hex: "#FFFDD0" },
      { name: "Navy Blue", hex: "#000080" },
    ],
    rating: 4.8,
    reviews: 245,
    inStock: true,
    tag: "Best Seller",
    model3d: "sofa",
  },
  {
    id: "oslo-extendable-table",
    name: "Oslo Extendable Table",
    category: "Dining",
    price: 1299,
    originalPrice: 1599,
    images: productImages.oslo,
    description: "The Oslo Extendable Dining Table is a masterpiece of Scandinavian design. Crafted from solid oak wood with a natural finish, it brings warmth and elegance to your dining area. The clever extension mechanism allows you to accommodate extra guests effortlessly.",
    specifications: {
      "Dimensions": "160-240cm x 90cm x 75cm",
      "Material": "Solid Oak Wood",
      "Finish": "Natural Matte",
      "Extension": "80cm (adds 4 seats)",
      "Seating Capacity": "6-10 persons",
      "Weight Capacity": "100 kg",
      "Warranty": "5 Years",
    },
    features: [
      "Solid oak wood construction",
      "Smooth glide extension mechanism",
      "Self-storing leaves included",
      "Scratch-resistant finish",
      "Eco-friendly materials",
    ],
    colors: [
      { name: "Natural Oak", hex: "#D4A574" },
      { name: "Walnut Stain", hex: "#5C4033" },
      { name: "White Wash", hex: "#F5F5F5" },
    ],
    rating: 4.6,
    reviews: 189,
    inStock: true,
    tag: "New",
    model3d: "table",
  },
  {
    id: "copenhagen-armchair",
    name: "Copenhagen Armchair",
    category: "Seating",
    price: 899,
    originalPrice: 1199,
    images: productImages.copenhagen,
    description: "Sink into comfort with the Copenhagen Armchair. This mid-century modern masterpiece features ergonomic design with proper lumbar support, upholstered in premium velvet fabric. The solid walnut legs add a touch of sophistication to this already stunning piece.",
    specifications: {
      "Dimensions": "78cm x 82cm x 95cm",
      "Material": "Premium Velvet Fabric",
      "Frame": "Solid Walnut Wood",
      "Cushion": "Memory Foam",
      "Weight Capacity": "150 kg",
      "Color": "Forest Green",
      "Warranty": "7 Years",
    },
    features: [
      "Ergonomic design with lumbar support",
      "Premium velvet upholstery",
      "Stain-resistant coating",
      "Solid walnut wood legs",
      "360-degree swivel option",
    ],
    colors: [
      { name: "Forest Green", hex: "#228B22" },
      { name: "Dusty Rose", hex: "#D4A5A5" },
      { name: "Midnight Blue", hex: "#191970" },
      { name: "Mustard Yellow", hex: "#FFDB58" },
    ],
    rating: 4.9,
    reviews: 312,
    inStock: true,
    tag: null,
    model3d: "chair",
  },
  {
    id: "stockholm-bed-frame",
    name: "Stockholm Bed Frame",
    category: "Bedroom",
    price: 1899,
    originalPrice: 2499,
    images: productImages.stockholm,
    description: "The Stockholm Bed Frame is the centerpiece of any modern bedroom. Crafted from solid pine wood with a sleek platform design, it provides both style and functionality. The hidden storage compartments are perfect for storing extra bedding and linens.",
    specifications: {
      "Dimensions": "210cm x 190cm x 120cm",
      "Material": "Solid Pine Wood",
      "Finish": "Matte Black",
      "Mattress Size": "King (180cm x 200cm)",
      "Storage": "Under-bed drawers",
      "Weight Capacity": "300 kg",
      "Warranty": "10 Years",
    },
    features: [
      "Solid pine wood construction",
      "Built-in storage drawers",
      "No box spring required",
      "Easy assembly",
      "Adjustable headboard height",
    ],
    colors: [
      { name: "Matte Black", hex: "#28282B" },
      { name: "White Oak", hex: "#E8DCC4" },
      { name: "Walnut", hex: "#5C4033" },
    ],
    rating: 4.7,
    reviews: 156,
    inStock: true,
    tag: "Featured",
    model3d: "bed",
  },
];

/**
 * Get product by ID
 * @param {string} id - Product ID
 * @returns {object|undefined} Product object
 */
export const getProductById = (id) => {
  return products.find((product) => product.id === id);
};

/**
 * Get products by category
 * @param {string} category - Category name
 * @returns {array} Array of products in that category
 */
export const getProductsByCategory = (category) => {
  return products.filter((product) => product.category === category);
};

/**
 * Get all categories
 * @returns {array} Array of unique category names
 */
export const getAllCategories = () => {
  return [...new Set(products.map((product) => product.category))];
};