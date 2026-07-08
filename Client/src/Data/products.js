/**
 * Product Data
 *
 * This file contains all product data for the furniture store.
 * Each product includes multiple images for different view angles,
 * 3D model configuration, specifications, and other details.
 */

// Product images - unique images for each product with different view angles
const productImages = {
  lShapedSofa: [
    "https://res.cloudinary.com/developersubhas/image/upload/v1783424336/lshapeOne_odlk6k.png",
    "https://res.cloudinary.com/developersubhas/image/upload/v1783424335/lshapeTwo_koievf.png",
    "https://res.cloudinary.com/developersubhas/image/upload/v1783424341/lshapeThree_i91jcb.png",
    "https://res.cloudinary.com/developersubhas/image/upload/v1783424345/lshapeFive_nccjcx.png",
    "https://res.cloudinary.com/developersubhas/image/upload/v1783424340/lshapeFour_ix6jwl.png",
  ],
  threeSeater: [
    "https://res.cloudinary.com/developersubhas/image/upload/v1783424540/threeTwo_aqabvr.png",
    "https://res.cloudinary.com/developersubhas/image/upload/v1783424734/threeGray_x17lub.png",
    "https://res.cloudinary.com/developersubhas/image/upload/v1783424549/threethree_o1vqzr.png",
    "https://res.cloudinary.com/developersubhas/image/upload/v1783424547/threeOne_kkxlnj.png",
    "https://res.cloudinary.com/developersubhas/image/upload/v1783424544/threeFive_ifr2l9.png",
    "https://res.cloudinary.com/developersubhas/image/upload/v1783424555/threeFour_ypqeg0.png",
    "https://res.cloudinary.com/developersubhas/image/upload/v1783424552/threeSix_yqifk7.png",
  ],
  twoSeater: [
    "https://images.unsplash.com/photo-1767584394169-cb62eccfe930?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1770610272268-526d7db17fc?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550226891-ef816aed4a98?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800&auto=format&fit=crop",
  ],
  sofaSet: [
    "https://images.unsplash.com/photo-1565182999561-18d7dc61c393?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551215717-8bc8cfe833ee?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
  ],
  centreTable: [
    "https://res.cloudinary.com/developersubhas/image/upload/v1783418532/centerTableDetails_gdijci.png",
    "https://res.cloudinary.com/developersubhas/image/upload/v1783418797/centerTableFront_g2ma2y.png",
  ],
  woodenTable: [
    "https://res.cloudinary.com/developersubhas/image/upload/v1783419368/woodenTableDetails_gfbvy8.png",
    "https://res.cloudinary.com/developersubhas/image/upload/v1783419422/woodenTableFront_ch688w.png",
    "https://res.cloudinary.com/developersubhas/image/upload/v1783423828/top_jrf8uj.png",
    "https://res.cloudinary.com/developersubhas/image/upload/v1783423735/woodenTop_bplaep.png",
  ],
  marbleTable: [
    "https://images.unsplash.com/photo-1649011327045-624a1bd2c3e7?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1758448500596-ce0e0239f1be?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1759264244719-94b45845fb92?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1758448755981-954afbf60ff7?q=80&w=800&auto=format&fit=crop",
  ],
  chesterfieldTable: [
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1499933374294-4584856e5c6b?q=80&w=800&auto=format&fit=crop",
  ],
  curtains: [
    "https://res.cloudinary.com/developersubhas/image/upload/v1783416968/curtainsDetail_jaqeuz.png",
    "https://res.cloudinary.com/developersubhas/image/upload/v1783535031/file_000000008bf471fab248a57df9213db5_isfuq2.png",
    "https://res.cloudinary.com/developersubhas/image/upload/v1783417038/curtainsSide_alq7nr.jpg",
    "https://res.cloudinary.com/developersubhas/image/upload/v1783417219/curtainsDetail_tt9boa.jpg",
    "https://res.cloudinary.com/developersubhas/image/upload/v1783424029/curtaneThree_glnwbi.jpg",
  ],
  blinds: [
    "https://res.cloudinary.com/developersubhas/image/upload/v1783417279/blindsDetails_qm3znn.png",
    "https://res.cloudinary.com/developersubhas/image/upload/v1783534355/blinds_qj0gjr.png",
    "https://res.cloudinary.com/developersubhas/image/upload/v1783534466/blindsD_uaetvp.png",
    "https://res.cloudinary.com/developersubhas/image/upload/v1783534509/file_00000000d8d071fa8bd9efae08a522eb_ufdfnt.png",
    "https://res.cloudinary.com/developersubhas/image/upload/v1783534557/f_grei3u.png",
    "https://res.cloudinary.com/developersubhas/image/upload/v1783534623/d_yagttf.png",
    "https://res.cloudinary.com/developersubhas/image/upload/v1783424029/curtainOne_ejqss1.jpg",
    "https://res.cloudinary.com/developersubhas/image/upload/v1783424028/curtaneTwo_snwhml.jpg",
    "https://res.cloudinary.com/developersubhas/image/upload/v1783424029/curtaneFour_l42kwn.jpg",
  ],
  poufs: [
    "https://res.cloudinary.com/developersubhas/image/upload/v1783535389/file_00000000b1587207b6d594f740b09af8_uubekr.png",
    "https://res.cloudinary.com/developersubhas/image/upload/v1783535387/file_00000000fcb871faabb70ae5df573911_gnuln0.png",
    "https://res.cloudinary.com/developersubhas/image/upload/v1783535382/file_00000000ed3c7208aa2b962a678fa02d_zlufrk.png",
    "https://res.cloudinary.com/developersubhas/image/upload/v1783535384/file_0000000005fc7207916b24e2a3718115_okut8n.png",
    "https://res.cloudinary.com/developersubhas/image/upload/v1783535374/file_00000000537071fa9c612e715e71107e_suen45.png",
    "https://res.cloudinary.com/developersubhas/image/upload/v1783535381/file_000000008a7c71f88f61c2577a861cf7_zbj42t.png",
    "https://res.cloudinary.com/developersubhas/image/upload/v1783535386/file_00000000c78471fd8473a9bc571c7692_jnfqzf.png",
    "https://res.cloudinary.com/developersubhas/image/upload/v1783535383/file_0000000008a472309e7656c451ccb24c_vsmr5m.png",
    "https://res.cloudinary.com/developersubhas/image/upload/v1783535369/file_00000000630471fd9c84a02eb35e3ce1_rodxml.png",
  ],
  ottomans: [
    "https://res.cloudinary.com/developersubhas/image/upload/v1783416508/ottomansFront_ekeyqx.png",
    "https://res.cloudinary.com/developersubhas/image/upload/v1783535676/file_00000000c35c71fa8d33b3be639a5f4d_nbalr4.png",
    "https://res.cloudinary.com/developersubhas/image/upload/v1783416607/ottomansSide_b8e17p.png",
    "https://res.cloudinary.com/developersubhas/image/upload/v1783424182/otto_gxlkoq.png",
  ],
  chairs: [
    "https://res.cloudinary.com/developersubhas/image/upload/v1783531290/chairs_ptwlmq.png",
  ],
};

/**
 * View angle labels for product images
 */
export const viewAngles = [
  { id: "detail", label: "Detail" },
  { id: "front", label: "Front View" },
  { id: "side", label: "Side View" },
  { id: "back", label: "Back View" },
  { id: "3d", label: "3D View" },
];

/**
 * All products data
 */
export const products = [
  {
    id: "l-shaped-sofa",
    name: "L-Shaped / Corner Sofa",
    category: "Sofas",
    price: 2499,
    originalPrice: 3299,
    images: productImages.lShapedSofa,
    description:
      "Perfect for modern living spaces, our L-shaped sofas maximize seating while adding a stylish focal point to your home. Available in various layouts, fabrics, colours, and sizes, each sofa is custom-built to fit your requirements.",
    specifications: {
      "Available Sizes": "Customizable",
      Material: "Premium Fabric/Leather",
      "Frame Type": "Kiln-dried Hardwood",
      Cushioning: "High-density Foam",
      "Weight Capacity": "350 kg",
      "Delivery Time": "4-6 Weeks",
      Warranty: "10 Years",
    },
    colors: [
      { name: "Charcoal Grey", hex: "#36454F" },
      { name: "Navy Blue", hex: "#000080" },
      { name: "Beige", hex: "#F5F5DC" },
      { name: "Emerald Green", hex: "#50C878" },
      { name: "Burgundy", hex: "#800020" },
    ],
    rating: 4.8,
    reviews: 245,
    inStock: true,
    tag: "Best Seller",
    model3d: "sofa",
    featured: true,
  },
  {
    id: "3-seater-sofa",
    name: "3-Seater Sofa",
    category: "Sofas",
    price: 1899,
    originalPrice: 2499,
    images: productImages.threeSeater,
    description:
      "A perfect blend of comfort and elegance, our 3-seater sofas are ideal for everyday living. Customize the fabric, colour, dimensions, and cushioning to create a sofa that matches your home's style.",
    specifications: {
      "Available Sizes": "Customizable",
      Material: "Premium Fabric/Leather",
      "Frame Type": "Kiln-dried Hardwood",
      Cushioning: "High-density Foam",
      "Weight Capacity": "300 kg",
      "Delivery Time": "4-6 Weeks",
      Warranty: "10 Years",
    },
    colors: [
      { name: "Light Grey", hex: "#D3D3D3" },
      { name: "Navy Blue", hex: "#000080" },
      { name: "Cream", hex: "#FFFDD0" },
      { name: "Teal", hex: "#008080" },
    ],
    rating: 4.7,
    reviews: 189,
    inStock: true,
    tag: "Popular",
    model3d: "sofa",
    featured: true,
  },
  {
    id: "2-seater-sofa",
    name: "2-Seater Sofa",
    category: "Sofas",
    price: 1299,
    originalPrice: 1799,
    images: productImages.twoSeater,
    description:
      "Designed for compact spaces without compromising on comfort, our 2-seater sofas offer a stylish seating solution. Available in a wide range of colours, fabrics, and custom sizes.",
    specifications: {
      "Available Sizes": "Customizable",
      Material: "Premium Fabric/Leather",
      "Frame Type": "Kiln-dried Hardwood",
      Cushioning: "High-density Foam",
      "Weight Capacity": "200 kg",
      "Delivery Time": "3-5 Weeks",
      Warranty: "10 Years",
    },
    colors: [
      { name: "Mustard Yellow", hex: "#FFDB58" },
      { name: "Dusty Rose", hex: "#D4A5A5" },
      { name: "Olive Green", hex: "#808000" },
      { name: "Slate Blue", hex: "#6A5ACD" },
    ],
    rating: 4.9,
    reviews: 312,
    inStock: true,
    tag: null,
    model3d: "sofa",
  },
  {
    id: "3-1-1-sofa-set",
    name: "3+1+1 Sofa Set",
    category: "Sofas",
    price: 3499,
    originalPrice: 4599,
    images: productImages.sofaSet,
    description:
      "Create a complete living room with our customizable 3+1+1 sofa sets. Designed for both comfort and sophistication, every set can be personalized with your preferred fabric, colour, size, and finishing.",
    specifications: {
      "Set Includes": "1 Three-seater, 1 Single-seater, 1 Chair",
      Material: "Premium Fabric/Leather",
      "Frame Type": "Kiln-dried Hardwood",
      Cushioning: "High-density Foam",
      "Weight Capacity": "500 kg",
      "Delivery Time": "5-7 Weeks",
      Warranty: "10 Years",
    },
    colors: [
      { name: "Coffee Brown", hex: "#6F4E37" },
      { name: "Charcoal Grey", hex: "#36454F" },
      { name: "Ivory", hex: "#FFFFF0" },
      { name: "Forest Green", hex: "#228B22" },
    ],
    rating: 4.6,
    reviews: 156,
    inStock: true,
    tag: "Complete Set",
    model3d: "sofa",
  },
  {
    id: "centre-table",
    name: "Centre Table",
    category: "Tables",
    price: 799,
    originalPrice: 1099,
    images: productImages.centreTable,
    description:
      "Enhance your living room with beautifully crafted centre tables that combine style and functionality. Choose from wooden tops, marble tops, and elegant Chesterfield-inspired designs, available in various finishes to complement your décor.",
    specifications: {
      "Available Sizes": "Customizable",
      "Top Material": "Wood/Marble/Glass",
      "Base Type": "Metal/Wood",
      Height: "45-50 cm",
      "Delivery Time": "3-5 Weeks",
      Warranty: "5 Years",
    },
    colors: [
      { name: "Natural Wood", hex: "#DEB887" },
      { name: "White Marble", hex: "#F0F0F0" },
      { name: "Black Glass", hex: "#1C1C1C" },
      { name: "Walnut", hex: "#5C4033" },
    ],
    rating: 4.5,
    reviews: 98,
    inStock: true,
    tag: null,
    model3d: "table",
    featured: true,
  },
  {
    id: "wooden-top-centre-table",
    name: "Wooden Top Centre Table",
    category: "Tables",
    price: 899,
    originalPrice: 1199,
    images: productImages.woodenTable,
    description:
      "Bring warmth and natural charm to your home with our wooden top centre tables. Built with quality craftsmanship, they offer durability, timeless appeal, and a premium finish.",
    specifications: {
      "Available Sizes": "Customizable",
      "Top Material": "Solid Wood",
      "Wood Type": "Sheesham/Teak/Oak",
      "Base Type": "Metal/Wood",
      Height: "45-50 cm",
      "Delivery Time": "3-5 Weeks",
      Warranty: "7 Years",
    },
    colors: [
      { name: "Honey Oak", hex: "#EB9605" },
      { name: "Walnut", hex: "#5C4033" },
      { name: "Natural Sheesham", hex: "#C19A6B" },
      { name: "Matte Black", hex: "#28282B" },
    ],
    rating: 4.7,
    reviews: 124,
    inStock: true,
    tag: "Natural",
    model3d: "table",
  },
  {
    id: "marble-top-centre-table",
    name: "Marble Top Centre Table",
    category: "Tables",
    price: 1499,
    originalPrice: 1999,
    images: productImages.marbleTable,
    description:
      "Add a touch of luxury with our marble top centre tables. Their elegant design and premium finish make them the perfect centrepiece for modern and classic interiors alike.",
    specifications: {
      "Available Sizes": "Customizable",
      "Top Material": "Natural Marble",
      "Marble Types": "White/Grey/Green/Black",
      "Base Type": "Metal/Wood",
      Height: "45-50 cm",
      "Delivery Time": "4-6 Weeks",
      Warranty: "10 Years",
    },
    colors: [
      { name: "White Marble", hex: "#F5F5F5" },
      { name: "Grey Marble", hex: "#808080" },
      { name: "Green Marble", hex: "#50C878" },
      { name: "Black Marble", hex: "#1C1C1C" },
    ],
    rating: 4.8,
    reviews: 87,
    inStock: true,
    tag: "Luxury",
    model3d: "table",
  },
  {
    id: "chesterfield-centre-table",
    name: "Chesterfield Centre Table",
    category: "Tables",
    price: 1199,
    originalPrice: 1599,
    images: productImages.chesterfieldTable,
    description:
      "Inspired by classic craftsmanship, our Chesterfield-style centre tables feature sophisticated detailing that elevates any living space with timeless elegance.",
    specifications: {
      "Available Sizes": "Customizable",
      "Top Material": "Leather/Wood",
      Style: "Classic Chesterfield",
      "Base Type": "Wooden Frame",
      Height: "45-50 cm",
      "Delivery Time": "4-6 Weeks",
      Warranty: "7 Years",
    },
    colors: [
      { name: "Cognac Brown", hex: "#8B4513" },
      { name: "Deep Burgundy", hex: "#800020" },
      { name: "Navy Blue", hex: "#000080" },
      { name: "Forest Green", hex: "#228B22" },
    ],
    rating: 4.9,
    reviews: 64,
    inStock: true,
    tag: "Classic",
    model3d: "table",
  },
  {
    id: "curtains",
    name: "Curtains",
    category: "Curtains",
    price: 399,
    originalPrice: 599,
    images: productImages.curtains,
    description:
      "Complete your interiors with our premium collection of custom-made curtains. From blackout and sheer curtains to printed and solid designs, we offer a wide variety of styles, fabrics, colours, and sizes. We also provide curtain tracks and channels for a complete installation solution.",
    specifications: {
      "Available Types": "Plain/Eyelet/Printed/Solid/Blackout/Sheer",
      "Fabric Options": "Cotton/Silk/Polyester/Linen",
      Size: "Custom Made",
      Mounting: "Rod/Pole/Track",
      "Delivery Time": "2-3 Weeks",
      Warranty: "2 Years",
    },
    colors: [
      { name: "Pure White", hex: "#FFFFFF" },
      { name: "Ivory", hex: "#FFFFF0" },
      { name: "Charcoal", hex: "#36454F" },
      { name: "Navy", hex: "#000080" },
      { name: "Sage Green", hex: "#9DC183" },
      { name: "Blush Pink", hex: "#DE5D83" },
    ],
    rating: 4.6,
    reviews: 234,
    inStock: true,
    tag: "Complete Range",
    model3d: "curtain",
    featured: true,
  },
  {
    id: "blinds",
    name: "Blinds",
    category: "Blinds",
    price: 499,
    originalPrice: 699,
    images: productImages.blinds,
    description:
      "Our custom-made blinds combine functionality with contemporary style. Available in Zebra, Wooden, Roman, and Roller designs, every blind is made to your exact size with a wide selection of colours and finishes.",
    specifications: {
      "Available Types": "Zebra/Wooden/Roman/Roller",
      Material: "Fabric/Wood/Aluminum",
      Size: "Custom Made",
      Operation: "Manual/Motorized",
      "Delivery Time": "2-3 Weeks",
      Warranty: "3 Years",
    },
    colors: [
      { name: "Pure White", hex: "#FFFFFF" },
      { name: "Natural Wood", hex: "#DEB887" },
      { name: "Charcoal", hex: "#36454F" },
      { name: "Cream", hex: "#FFFDD0" },
      { name: "Slate Grey", hex: "#708090" },
    ],
    rating: 4.7,
    reviews: 187,
    inStock: true,
    tag: "Trending",
    model3d: "blinds",
    featured: true,
  },
  {
    id: "poufs",
    name: "Poufs",
    category: "Accessories",
    price: 299,
    originalPrice: 449,
    images: productImages.poufs,
    description:
      "Our handcrafted poufs provide comfortable extra seating while adding texture and style to your space. Available in multiple fabrics, colours, and customizable designs.",
    specifications: {
      "Available Sizes": "Customizable",
      Material: "Fabric/Leather",
      "Fill Type": "High-density Foam",
      Shape: "Round/Square/Oval",
      "Delivery Time": "2-3 Weeks",
      Warranty: "3 Years",
    },
    colors: [
      { name: "Terracotta", hex: "#E2725B" },
      { name: "Mustard", hex: "#FFDB58" },
      { name: "Teal", hex: "#008080" },
      { name: "Grey", hex: "#808080" },
      { name: "Burgundy", hex: "#800020" },
    ],
    rating: 4.8,
    reviews: 145,
    inStock: true,
    tag: "Handcrafted",
    model3d: "pouf",
  },
  {
    id: "ottomans",
    name: "Ottomans",
    category: "Accessories",
    price: 449,
    originalPrice: 599,
    images: productImages.ottomans,
    description:
      "Stylish and versatile, our ottomans can be used as seating, footrests, or accent furniture. Choose from a wide range of fabrics, colours, and sizes to perfectly match your interiors.",
    specifications: {
      "Available Sizes": "Customizable",
      Material: "Fabric/Leather",
      "Fill Type": "High-density Foam",
      Storage: "With/Without Storage",
      "Delivery Time": "2-4 Weeks",
      Warranty: "5 Years",
    },
    colors: [
      { name: "Navy Blue", hex: "#000080" },
      { name: "Emerald", hex: "#50C878" },
      { name: "Camel", hex: "#C19A6B" },
      { name: "Charcoal", hex: "#36454F" },
      { name: "Ivory", hex: "#FFFFF0" },
    ],
    rating: 4.7,
    reviews: 98,
    inStock: true,
    tag: "Versatile",
    model3d: "ottoman",
    featured: true,
  },
  {
    id: "premium-chairs",
    name: "Chairs",
    category: "Chairs",
    price: 449,
    originalPrice: 599,
    images: productImages.chairs,
    description:
      "Stylish and versatile, our ottomans can be used as seating, footrests, or accent furniture. Choose from a wide range of fabrics, colours, and sizes to perfectly match your interiors.",
    specifications: {
      "Available Sizes": "Customizable",
      Material: "Fabric/Leather",
      "Fill Type": "High-density Foam",
      Storage: "With/Without Storage",
      "Delivery Time": "2-4 Weeks",
      Warranty: "5 Years",
    },
    colors: [
      { name: "Navy Blue", hex: "#000080" },
      { name: "Emerald", hex: "#50C878" },
      { name: "Camel", hex: "#C19A6B" },
      { name: "Charcoal", hex: "#36454F" },
      { name: "Ivory", hex: "#FFFFF0" },
    ],
    rating: 4.7,
    reviews: 98,
    inStock: true,
    tag: "Versatile",
    model3d: "ottoman",
    featured: true,
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

/**
 * Get featured products
 * @returns {array} Array of featured products
 */
export const getFeaturedProducts = () => {
  return products.filter((product) => product.featured === true);
};
