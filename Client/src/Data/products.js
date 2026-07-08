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
  ],
  threeSeater: [
    "https://res.cloudinary.com/developersubhas/image/upload/v1783424540/threeTwo_aqabvr.png",
  ],
  twoSeater: [
    "https://res.cloudinary.com/developersubhas/image/upload/v1783539542/7EC8A5C6-4363-4386-8D8E-74CD3DB656EF_vqcude.png",
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
    "https://res.cloudinary.com/developersubhas/image/upload/v1783540680/file_000000002ba87207a195a181e7b58cc9_j7hrdv.png",
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
    "https://res.cloudinary.com/developersubhas/image/upload/v1783536203/file_00000000b96472098316b26b7f50c4eb_xiuzre.png",
  ],
  barrelChair: [
    "https://res.cloudinary.com/developersubhas/image/upload/v1783537329/file_000000003c087206a0b2bce80bc95962_fdqycm.png",
  ],
  boucleChair: [
    "https://res.cloudinary.com/developersubhas/image/upload/v1783537716/file_000000004f8c7206b1faa0f8c4667dd6_owthdv.png",
  ],
  woodenChair: [
    "https://res.cloudinary.com/developersubhas/image/upload/v1783538074/IMG_20260702_134017_mjbdcj.png",
  ],
};

/**
 * View angle labels for product images
 */
// export const viewAngles = [
//   { id: "detail", label: "Detail" },
//   { id: "front", label: "Front View" },
//   { id: "side", label: "Side View" },
//   { id: "back", label: "Back View" },
//   { id: "3d", label: "3D View" },
// ];

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
    colorImages: {
      Beige: [
        "https://res.cloudinary.com/developersubhas/image/upload/v1783538217/3769D71F-BFFB-4B37-9245-8A207957C00B_xwwn0d.png",
        "https://res.cloudinary.com/developersubhas/image/upload/v1783538344/B57D2E8C-FA02-45E7-A999-1414EAA8775F_wzhbia.png",
        "https://res.cloudinary.com/developersubhas/image/upload/v1783538358/file_000000000ba872098d09986e5bba65b2_jlxqzz.png",
        "https://res.cloudinary.com/developersubhas/image/upload/v1783538352/file_00000000c6a471fbba944ca88859d292_k0waaz.png",
        "https://res.cloudinary.com/developersubhas/image/upload/v1783538357/B776759D-02C7-4050-82FC-2BCC726639F5_dg7f5z.png",
        "https://res.cloudinary.com/developersubhas/image/upload/v1783538356/AA8D4D6A-53B1-4184-B1C5-D9B42F93DF9C_uwzoki.png",
        "https://res.cloudinary.com/developersubhas/image/upload/v1783538341/B922A851-EAE0-438C-8DFC-B09D37C9D839_ldjta7.png",
        "https://res.cloudinary.com/developersubhas/image/upload/v1783538571/file_0000000092f07206b60db1677ceb9d37_afmwgb.png",
        "https://res.cloudinary.com/developersubhas/image/upload/v1783538579/file_0000000020087206ae041faff957c633_tj6jea.png",
      ],
      "Dusty Rose": [
        "https://res.cloudinary.com/developersubhas/image/upload/v1783538740/file_00000000e5cc72078ac9cf9df5a708de_bdmcfm.png",
        "https://res.cloudinary.com/developersubhas/image/upload/v1783538798/file_00000000963c72079f2312c9ba5bedd5_nt17ft.png",
        "https://res.cloudinary.com/developersubhas/image/upload/v1783538815/IMG_20260630_222325_p7lr55.png",
        "https://res.cloudinary.com/developersubhas/image/upload/v1783538812/IMG_20260630_222244_p8farm.png",
      ],
      "Espresso Brown": [
        "https://res.cloudinary.com/developersubhas/image/upload/v1783538885/file_000000009c287206b95fb01d4d2f32d1_kpoa86.png",
        "https://res.cloudinary.com/developersubhas/image/upload/v1783538869/file_000000007c48720999057556c724df71_p3kvip.png",
        "https://res.cloudinary.com/developersubhas/image/upload/v1783538863/file_000000003c207209b65a02c30ee40bbe_sgbtk3.png",
      ],
    },
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
      { name: "Beige", hex: "#F5F5DC" },
      { name: "Dusty Rose", hex: "#C98A7E" },
      { name: "Espresso Brown", hex: "#4A2B21" },
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
    colorImages: {
      "Mustard Gold": [
        "https://res.cloudinary.com/developersubhas/image/upload/v1783424540/threeTwo_aqabvr.png",
        "https://res.cloudinary.com/developersubhas/image/upload/v1783424549/threethree_o1vqzr.png",
        "https://res.cloudinary.com/developersubhas/image/upload/v1783424547/threeOne_kkxlnj.png",
        "https://res.cloudinary.com/developersubhas/image/upload/v1783424544/threeFive_ifr2l9.png",
        "https://res.cloudinary.com/developersubhas/image/upload/v1783424555/threeFour_ypqeg0.png",
        "https://res.cloudinary.com/developersubhas/image/upload/v1783424552/threeSix_yqifk7.png",
      ],
      "Camel Tan": [
        "https://res.cloudinary.com/developersubhas/image/upload/v1783539265/file_00000000a2cc71fab2a4effde987e3db_eummzm.png",
        "https://res.cloudinary.com/developersubhas/image/upload/v1783539262/file_00000000af3071faa8d66358d38673f9_yqg7cy.png",
      ],
    },
    colors: [
      { name: "Camel Tan", hex: "#B78957" },
      { name: "Mustard Gold", hex: "#A8751E" },
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
    colorImages: {
      "Pearl White": [
        "https://res.cloudinary.com/developersubhas/image/upload/v1783539548/BB7F2167-D345-4449-A082-6AE0E3E48C41_hfnamn.png",
        "https://res.cloudinary.com/developersubhas/image/upload/v1783539447/1CE229FB-D6EA-45D2-BAB4-3527191BD773_aaosog.png",
        "https://res.cloudinary.com/developersubhas/image/upload/v1783539449/7DE4D0C9-2DE3-49C6-9AD8-82CEBC8466C9_fqyzdx.png",
      ],
      "Dove Gray": [
        "https://res.cloudinary.com/developersubhas/image/upload/v1783539542/7EC8A5C6-4363-4386-8D8E-74CD3DB656EF_vqcude.png",
        "https://res.cloudinary.com/developersubhas/image/upload/v1783539537/B9CB5986-D5A9-4E04-BC28-E15F5C16D653_bwhv7y.png",
      ],
      "Mustard Yellow": [
        "https://res.cloudinary.com/developersubhas/image/upload/v1783539546/F5F2870D-F6C5-42E2-9B58-508435591B54_y2l8ur.png",
        "https://res.cloudinary.com/developersubhas/image/upload/v1783539450/9CFC029A-1A17-472C-B4AF-E301AEF02AE3_eqkg1b.png",
        "https://res.cloudinary.com/developersubhas/image/upload/v1783539457/823DB4A5-9697-4754-914C-30B2A76C8072_d1hjeb.png",
      ],
    },
    colors: [
      { name: "Pearl White", hex: "#E9E2E2" },
      { name: "Dove Gray", hex: "#9A9A9F" },
      { name: "Mustard Yellow", hex: "#D99835" },
    ],
    rating: 4.9,
    reviews: 312,
    inStock: true,
    tag: null,
    model3d: "sofa",
  },
  // {
  //   id: "3-1-1-sofa-set",
  //   name: "3+1+1 Sofa Set",
  //   category: "Sofas",
  //   price: 3499,
  //   originalPrice: 4599,
  //   images: productImages.sofaSet,
  //   description:
  //     "Create a complete living room with our customizable 3+1+1 sofa sets. Designed for both comfort and sophistication, every set can be personalized with your preferred fabric, colour, size, and finishing.",
  //   specifications: {
  //     "Set Includes": "1 Three-seater, 1 Single-seater, 1 Chair",
  //     Material: "Premium Fabric/Leather",
  //     "Frame Type": "Kiln-dried Hardwood",
  //     Cushioning: "High-density Foam",
  //     "Weight Capacity": "500 kg",
  //     "Delivery Time": "5-7 Weeks",
  //     Warranty: "10 Years",
  //   },
  //   colors: [
  //     { name: "Coffee Brown", hex: "#6F4E37" },
  //     { name: "Charcoal Grey", hex: "#36454F" },
  //     { name: "Ivory", hex: "#FFFFF0" },
  //     { name: "Forest Green", hex: "#228B22" },
  //   ],
  //   rating: 4.6,
  //   reviews: 156,
  //   inStock: true,
  //   tag: "Complete Set",
  //   model3d: "sofa",
  // },
  // {
  //   id: "centre-table",
  //   name: "Centre Table",
  //   category: "Tables",
  //   price: 799,
  //   originalPrice: 1099,
  //   images: productImages.centreTable,
  //   description:
  //     "Enhance your living room with beautifully crafted centre tables that combine style and functionality. Choose from wooden tops, marble tops, and elegant Chesterfield-inspired designs, available in various finishes to complement your décor.",
  //   specifications: {
  //     "Available Sizes": "Customizable",
  //     "Top Material": "Wood/Marble/Glass",
  //     "Base Type": "Metal/Wood",
  //     Height: "45-50 cm",
  //     "Delivery Time": "3-5 Weeks",
  //     Warranty: "5 Years",
  //   },
  //   colors: [
  //     { name: "Natural Wood", hex: "#DEB887" },
  //     { name: "White Marble", hex: "#F0F0F0" },
  //     { name: "Black Glass", hex: "#1C1C1C" },
  //     { name: "Walnut", hex: "#5C4033" },
  //   ],
  //   rating: 4.5,
  //   reviews: 98,
  //   inStock: true,
  //   tag: null,
  //   model3d: "table",
  //   featured: true,
  // },
  // {
  //   id: "wooden-top-centre-table",
  //   name: "Wooden Top Centre Table",
  //   category: "Tables",
  //   price: 899,
  //   originalPrice: 1199,
  //   images: productImages.woodenTable,
  //   description:
  //     "Bring warmth and natural charm to your home with our wooden top centre tables. Built with quality craftsmanship, they offer durability, timeless appeal, and a premium finish.",
  //   specifications: {
  //     "Available Sizes": "Customizable",
  //     "Top Material": "Solid Wood",
  //     "Wood Type": "Sheesham/Teak/Oak",
  //     "Base Type": "Metal/Wood",
  //     Height: "45-50 cm",
  //     "Delivery Time": "3-5 Weeks",
  //     Warranty: "7 Years",
  //   },
  //   colors: [
  //     { name: "Honey Oak", hex: "#EB9605" },
  //     { name: "Walnut", hex: "#5C4033" },
  //     { name: "Natural Sheesham", hex: "#C19A6B" },
  //     { name: "Matte Black", hex: "#28282B" },
  //   ],
  //   rating: 4.7,
  //   reviews: 124,
  //   inStock: true,
  //   tag: "Natural",
  //   model3d: "table",
  // },
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
    colorImages: {
      "Marble Black": [
        "https://res.cloudinary.com/developersubhas/image/upload/v1783540680/file_000000002ba87207a195a181e7b58cc9_j7hrdv.png",
        "https://res.cloudinary.com/developersubhas/image/upload/v1783540677/file_0000000094487207a1d0648fd673d068_ktbnqs.png",
        // "https://res.cloudinary.com/developersubhas/image/upload/v1783540682/file_0000000011207209bfcc2cd35c639825_wcrahg.png",
        // "https://res.cloudinary.com/developersubhas/image/upload/v1783540668/IMG_20260630_223617_rwqbto.png",
        "https://res.cloudinary.com/developersubhas/image/upload/v1783540666/file_00000000dc5c71faa66a25e0ce68d085_yreyf3.png",
        "https://res.cloudinary.com/developersubhas/image/upload/v1783540673/file_00000000271071fb8ed5c8cb782723e5_i7fhsj.png",
      ],
    },
    colors: [{ name: "Marble Black", hex: "#1F1F22" }],
    rating: 4.8,
    reviews: 87,
    inStock: true,
    tag: "Luxury",
    model3d: "table",
  },
  // {
  //   id: "chesterfield-centre-table",
  //   name: "Chesterfield Centre Table",
  //   category: "Tables",
  //   price: 1199,
  //   originalPrice: 1599,
  //   images: productImages.chesterfieldTable,
  //   description:
  //     "Inspired by classic craftsmanship, our Chesterfield-style centre tables feature sophisticated detailing that elevates any living space with timeless elegance.",
  //   specifications: {
  //     "Available Sizes": "Customizable",
  //     "Top Material": "Leather/Wood",
  //     Style: "Classic Chesterfield",
  //     "Base Type": "Wooden Frame",
  //     Height: "45-50 cm",
  //     "Delivery Time": "4-6 Weeks",
  //     Warranty: "7 Years",
  //   },
  //   colors: [
  //     { name: "Cognac Brown", hex: "#8B4513" },
  //     { name: "Deep Burgundy", hex: "#800020" },
  //     { name: "Navy Blue", hex: "#000080" },
  //     { name: "Forest Green", hex: "#228B22" },
  //   ],
  //   rating: 4.9,
  //   reviews: 64,
  //   inStock: true,
  //   tag: "Classic",
  //   model3d: "table",
  // },
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
    // colors: [
    //   { name: "Pure White", hex: "#FFFFFF" },
    //   { name: "Ivory", hex: "#FFFFF0" },
    //   { name: "Charcoal", hex: "#36454F" },
    //   { name: "Navy", hex: "#000080" },
    //   { name: "Sage Green", hex: "#9DC183" },
    //   { name: "Blush Pink", hex: "#DE5D83" },
    // ],
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
    // colors: [
    //   { name: "Pure White", hex: "#FFFFFF" },
    //   { name: "Natural Wood", hex: "#DEB887" },
    //   { name: "Charcoal", hex: "#36454F" },
    //   { name: "Cream", hex: "#FFFDD0" },
    //   { name: "Slate Grey", hex: "#708090" },
    // ],
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
    // colors: [
    //   { name: "Terracotta", hex: "#E2725B" },
    //   { name: "Mustard", hex: "#FFDB58" },
    //   { name: "Teal", hex: "#008080" },
    //   { name: "Grey", hex: "#808080" },
    //   { name: "Burgundy", hex: "#800020" },
    // ],
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
    // colors: [
    //   { name: "Navy Blue", hex: "#000080" },
    //   { name: "Emerald", hex: "#50C878" },
    //   { name: "Camel", hex: "#C19A6B" },
    //   { name: "Charcoal", hex: "#36454F" },
    //   { name: "Ivory", hex: "#FFFFF0" },
    // ],
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
    colorImages: {
      Ivory: [
        "https://res.cloudinary.com/developersubhas/image/upload/v1783531290/chairs_ptwlmq.png",
        "https://res.cloudinary.com/developersubhas/image/upload/v1783536203/file_00000000b96472098316b26b7f50c4eb_xiuzre.png",
        "https://res.cloudinary.com/developersubhas/image/upload/v1783536636/file_00000000ab187206a54035b2c42d246b_a3bryk.png",
        "https://res.cloudinary.com/developersubhas/image/upload/v1783536800/file_0000000038ec72098d8050a1129ae9d6_yga6pc.png",
      ],
      "Navy Blue": [
        "https://res.cloudinary.com/developersubhas/image/upload/v1783536474/1A73AFC2-724B-4B68-9993-B21C092FCE5E_tvv0p5.png",
      ],
      "Burnt Orange": [
        "https://res.cloudinary.com/developersubhas/image/upload/v1783536517/80CAC218-9C42-49C9-90A9-AD6E43139551_hqcu86.png",
      ],
    },
    colors: [
      { name: "Ivory", hex: "#FFFFF0" },
      { name: "Navy Blue", hex: "#000080" },
      { name: "Burnt Orange", hex: "#DC472D" },
    ],
    rating: 4.7,
    reviews: 98,
    inStock: true,
    tag: "Versatile",
    model3d: "ottoman",
    featured: true,
  },
  {
    id: "barrel-lounge-chair",
    name: "Barrel Lounge Chair",
    category: "Chairs",
    price: 599,
    originalPrice: 749,
    images: productImages.barrelChair,
    description:
      "A modern barrel lounge chair featuring premium leatherette upholstery with a soft cushioned seat for luxurious comfort. Perfect for living rooms, lounges, cafés, and reception spaces.",

    specifications: {
      Material: "Premium Leatherette",
      Frame: "Solid Wood",
      Cushion: "High-density Foam",
      Finish: "Matte",
      "Delivery Time": "2-4 Weeks",
      Warranty: "5 Years",
    },

    colorImages: {
      "Espresso Brown": [
        "https://res.cloudinary.com/developersubhas/image/upload/v1783537329/file_000000003c087206a0b2bce80bc95962_fdqycm.png",
        "https://res.cloudinary.com/developersubhas/image/upload/v1783537337/file_0000000038ec71fbb16dffa8e865f43f_qd6qdp.png",
        "https://res.cloudinary.com/developersubhas/image/upload/v1783537356/IMG_20260704_130413_gfek2t.png",
        "https://res.cloudinary.com/developersubhas/image/upload/v1783537323/file_000000003b7472098f77972592c73c84_lpwn08.png",
      ],
    },

    colors: [{ name: "Espresso Brown", hex: "#3A251C" }],

    rating: 4.8,
    reviews: 126,
    inStock: true,
    tag: "Luxury",
    model3d: "barrel-chair",
    featured: true,
  },
  {
    id: "boucle-dining-chair",
    name: "Bouclé Dining Chair",
    category: "Chairs",
    price: 429,
    originalPrice: 549,
    images: productImages.boucleChair,
    description:
      "Elegant Scandinavian-inspired dining chair upholstered in soft bouclé fabric with a solid oak wood frame. Ideal for dining rooms, cafés, and modern interiors.",

    specifications: {
      Material: "Bouclé Fabric",
      Frame: "Solid Oak Wood",
      Cushion: "High-density Foam",
      Finish: "Natural Wood",
      "Delivery Time": "2-4 Weeks",
      Warranty: "5 Years",
    },

    colorImages: {
      Ivory: [
        "https://res.cloudinary.com/developersubhas/image/upload/v1783537716/file_000000004f8c7206b1faa0f8c4667dd6_owthdv.png",
        "https://res.cloudinary.com/developersubhas/image/upload/v1783537731/file_000000006270720688bbbf1345682276_qq22oh.png",
        "https://res.cloudinary.com/developersubhas/image/upload/v1783537705/file_000000003b547206b444ca305534d4be_kdxpwp.png",
      ],
    },

    colors: [{ name: "Ivory", hex: "#EEE3CC" }],

    rating: 4.9,
    reviews: 94,
    inStock: true,
    tag: "Modern",
    model3d: "boucle-chair",
    featured: true,
  },
  {
    id: "classic-wooden-dining-chair",
    name: "Classic Wooden Dining Chair",
    category: "Chairs",
    price: 349,
    originalPrice: 449,
    images: productImages.woodenChair,
    description:
      "A timeless wooden dining chair featuring a sleek matte black finish and a plush velvet seat, blending traditional craftsmanship with contemporary elegance.",

    specifications: {
      Material: "Solid Wood & Velvet",
      Frame: "Hardwood",
      Cushion: "Premium Velvet Foam Seat",
      Finish: "Matte Black",
      "Delivery Time": "2-4 Weeks",
      Warranty: "5 Years",
    },

    colorImages: {
      "Matte Black": [
        "https://res.cloudinary.com/developersubhas/image/upload/v1783538074/IMG_20260702_134017_mjbdcj.png",
        "https://res.cloudinary.com/developersubhas/image/upload/v1783538144/IMG_20260702_134118_iy9qnn.png",
        "https://res.cloudinary.com/developersubhas/image/upload/v1783537853/file_0000000001647208aeeae6331e95b57d_orkizh.png",
      ],
    },

    colors: [{ name: "Matte Black", hex: "#1B1716" }],

    rating: 4.7,
    reviews: 81,
    inStock: true,
    tag: "Classic",
    model3d: "wooden-chair",
    featured: false,
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
