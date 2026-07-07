import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { staggerContainer, fadeUp } from "../../Animations/Animations";
import { categories } from "../../Data/categories";

const FALLBACK_PALETTE = [
  ["#8B6B4A", "#5C4433"],
  ["#7C8B6F", "#4A5A3E"],
  ["#A88B6B", "#6B4E33"],
  ["#6F7C8B", "#3E4A5A"],
  ["#8B6F7C", "#5A3E4A"],
];

const CategoryRow = ({ category, index, onSelect }) => {
  const [imgFailed, setImgFailed] = useState(false);
  const reversed = index % 2 === 1;
  const [from, to] = FALLBACK_PALETTE[index % FALLBACK_PALETTE.length];
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      variants={fadeUp}
      role="button"
      tabIndex={0}
      aria-label={`Browse ${category.name}, ${category.count} ${category.count === 1 ? "product" : "products"}`}
      onClick={onSelect}
      onKeyDown={(e) =>
        (e.key === "Enter" || e.key === " ") && (e.preventDefault(), onSelect())
      }
      className="group grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-14 items-center py-10 md:py-14 border-b border-slate-200 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded-lg"
    >
      {/* Image */}
      <div
        className={`relative aspect-4/3 rounded-2xl overflow-hidden ${reversed ? "md:order-2" : "md:order-1"}`}
      >
        {!imgFailed ? (
          <img
            src={category.image}
            alt={category.name}
            loading={index < 2 ? "eager" : "lazy"}
            onError={() => setImgFailed(true)}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: `linear-gradient(145deg, ${from}, ${to})` }}
          >
            <span className="text-white/25 font-serif text-7xl select-none">
              {category.name.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Text */}
      <div className={`${reversed ? "md:order-1" : "md:order-2"} px-1`}>
        <span className="text-xs tracking-[0.3em] uppercase text-slate-400 font-semibold">
          No. {num}
        </span>
        <h3 className="text-3xl md:text-5xl font-serif text-slate-900 mt-3 mb-4 group-hover:text-brand-accent transition-colors duration-300">
          {category.name}
        </h3>
        <p className="text-slate-500 mb-6">
          {category.count} {category.count === 1 ? "piece" : "pieces"} in the
          collection
        </p>
        <span className="inline-flex items-center gap-2 text-brand-primary font-semibold">
          Shop the collection
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </span>
      </div>
    </motion.div>
  );
};

const Categories = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14 md:mb-16"
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

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer(0.1, 0.1)}
        >
          {categories.map((category, index) => (
            <CategoryRow
              key={category.name}
              category={category}
              index={index}
              onSelect={() => navigate(`/products?category=${category.slug}`)}
            />
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => navigate("/products")}
            className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:text-brand-accent transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded"
          >
            <span>View All Categories</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;
