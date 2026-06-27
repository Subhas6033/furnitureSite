import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../Animations/Animations";

const Hero = () => (
  <section
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
    style={{ backgroundColor: "var(--color-brand-primary)" }}
  >
    {/* Full-bleed background photo */}
    <img
      src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=2000&auto=format&fit=crop"
      alt="Cream sofa styled with cushions, a rattan coffee table, and plants against a teal wall"
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Teal wash so the photo reads as one continuous surface with the nav
        above it, and so white text stays legible at every breakpoint */}
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(180deg, rgba(30,90,105,0.78) 0%, rgba(30,90,105,0.55) 35%, rgba(30,90,105,0.7) 100%)",
      }}
    />

    <motion.div
      className="relative z-10 text-center text-white px-6 pt-24"
      initial="hidden"
      animate="visible"
      variants={staggerContainer(0.12, 0.15)}
    >
      <h1 className="font-serif text-5xl md:text-7xl font-medium mb-6 leading-[1.08]">
        <motion.span variants={fadeUp} className="block">
          Comfort Starts with the
        </motion.span>
        <motion.span variants={fadeUp} className="block">
          Right Furniture
        </motion.span>
      </h1>

      <motion.p
        variants={fadeUp}
        className="text-white/70 text-lg max-w-md mx-auto"
      >
        Thoughtfully crafted pieces for every room in your home.
      </motion.p>
    </motion.div>
  </section>
);

export default Hero;
