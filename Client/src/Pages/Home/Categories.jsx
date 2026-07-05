import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "../../Animations/Animations";

const categories = [
  {
    name: "Sofas & Couches",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
    count: 42,
  },
  {
    name: "Dining Tables",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800&auto=format&fit=crop",
    count: 28,
  },
  {
    name: "Chairs & Seating",
    image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=800&auto=format&fit=crop",
    count: 56,
  },
  {
    name: "Bedroom Sets",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop",
    count: 34,
  },
  {
    name: "Storage & Shelving",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800&auto=format&fit=crop",
    count: 48,
  },
  {
    name: "Lighting",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop",
    count: 63,
  },
];

const Categories = () => {
  return (
    <section className="py-16 md:py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer(0.1, 0.1)}
        >
          <motion.span
            variants={fadeUp}
            className="inline-block text-sm font-medium tracking-wider uppercase text-[#a97c2f] mb-3"
          >
            Our Collection
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1a1a1a] mb-4"
          >
            Browse by Category
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-[#666] text-lg max-w-2xl mx-auto"
          >
            Explore our carefully curated collections of premium furniture pieces
            designed to transform your space.
          </motion.p>
        </motion.div>

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
              className={`group relative overflow-hidden rounded-lg ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className="aspect-[4/3] md:aspect-auto">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="text-white text-lg md:text-xl font-serif mb-1">
                  {category.name}
                </h3>
                <p className="text-white/70 text-sm">
                  {category.count} Products
                </p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-white/90 text-[#1a1a1a] px-5 py-2.5 rounded-full text-sm font-medium">
                  Shop Now
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;