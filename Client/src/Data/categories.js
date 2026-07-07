/**
 * Category Data
 *
 * This file contains all category data for the furniture store.
 * Categories are extracted from products and include images and counts.
 */

import { products } from "./products";

/**
 * Category images - using product images for each category
 */
const categoryImages = {
  Sofas:
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
  Tables:
    "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800&auto=format&fit=crop",
  Curtains:
    "https://res.cloudinary.com/developersubhas/image/upload/v1783416968/curtainsDetail_jaqeuz.png",
  Blinds:
    "https://res.cloudinary.com/developersubhas/image/upload/v1783417279/blindsDetails_qm3znn.png",
  Accessories:
    "https://images.unsplash.com/photo-1550226891-ef816aed4a98?q=80&w=800&auto=format&fit=crop",
};

/**
 * Get all categories with product counts
 * @returns {array} Array of category objects
 */
export const getCategories = () => {
  const categoryCounts = products.reduce((acc, product) => {
    acc[product.category] = (acc[product.category] || 0) + 1;
    return acc;
  }, {});

  return Object.entries(categoryCounts).map(([name, count]) => ({
    name,
    slug: name.toLowerCase().replace(/\s+/g, "-"),
    count,
    image: categoryImages[name] || categoryImages.Accessories,
  }));
};

/**
 * Get category by slug
 * @param {string} slug - Category slug
 * @returns {object|undefined} Category object
 */
export const getCategoryBySlug = (slug) => {
  const categories = getCategories();
  return categories.find((cat) => cat.slug === slug);
};

/**
 * Get category by name
 * @param {string} name - Category name
 * @returns {object|undefined} Category object
 */
export const getCategoryByName = (name) => {
  const categories = getCategories();
  return categories.find((cat) => cat.name === name);
};

// Default categories export for direct usage
export const categories = getCategories();
