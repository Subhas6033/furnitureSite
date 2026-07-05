import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { staggerContainer, fadeUp } from "../../Animations/Animations";

const categories = [
  {
    name: "Sofas & Couches",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
    count: 42,
    slug: "sofas",
  },
  {
    name: "Dining Tables",
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800&auto=format&fit=crop",
    count: 28,
    slug: "dining",
  },
  {
    name: "Chairs & Seating",
    image:
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=800&auto=format&fit=crop",
    count: 56,
    slug: "chairs",
  },
  {
    name: "Bedroom Sets",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop",
    count: 34,
    slug: "bedroom",
  },
  {
    name: "Storage & Shelving",
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800&auto=format&fit=crop",
    count: 48,
    slug: "storage",
  },
  {
    name: "Lighting",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop",
    count: 63,
    slug: "lighting",
  },
];

const Categories = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-14 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer(0.1, 0.1)}
        >
          <motion.span
            variants={fadeUp}
            className="inline-block text-sm font-semibold tracking-[0.25em] uppercase text-brand-accent mb-4"
          >
            Our Collection
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-slate-900 mb-5"
          >
            Browse by Category
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-slate-600 text-lg max-w-2xl mx-auto"
          >
            Explore our carefully curated collections of Entity Furnitures
            pieces designed to transform your space into something
            extraordinary.
          </motion.p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer(0.08, 0.08)}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              variants={fadeUp}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              onClick={() => navigate(`/products?category=${category.slug}`)}
            >
              {/* Image Container */}
              <div
                className={`relative ${index === 0 ? "aspect-4/3 md:aspect-auto md:h-125" : "aspect-square"}`}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/70 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
                <h3 className="text-white text-lg md:text-xl font-serif mb-1 group-hover:text-brand-accent transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="text-white/70 text-sm">
                  {category.count} Products
                </p>
              </div>

              {/* Hover CTA */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="bg-white text-slate-900 px-6 py-3 rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Explore
                </span>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-0 h-0 border-t-40 border-t-transparent border-r-40 border-r-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => navigate("/products")}
            className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:text-brand-accent transition-colors duration-300"
          >
            <span>View All Categories</span>
            <svg
              className="w-5 h-5"
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
      </div>
    </section>
  );
};

export default Categories;
