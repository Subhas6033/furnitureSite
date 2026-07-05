import { motion, useScroll, useTransform } from "framer-motion";
import { fadeUp, staggerContainer } from "../../Animations/Animations";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const Hero = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background with Parallax Effect */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        {/* Main Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
            alt="Modern living room with elegant furniture"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-linear-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/50 via-transparent to-transparent" />

        {/* Animated Grain Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div
            className="absolute inset-0 animate-pulse"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Right Glow */}
        <motion.div
          className="absolute top-0 right-0 w-125 h-125 bg-brand-accent/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Bottom Left Glow */}
        <motion.div
          className="absolute bottom-0 left-0 w-100 h-100 bg-brand-primary/20 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Furniture Silhouettes */}
        <motion.div
          className="absolute bottom-20 right-10 opacity-10"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            className="w-48 h-48 text-white"
            viewBox="0 0 100 100"
            fill="currentColor"
          >
            <rect x="10" y="40" width="80" height="30" rx="4" />
            <rect x="5" y="35" width="15" height="35" rx="2" />
            <rect x="80" y="35" width="15" height="35" rx="2" />
          </svg>
        </motion.div>

        {/* Geometric Lines */}
        <svg
          className="absolute top-1/4 left-10 w-32 h-32 text-white/5"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
          <circle
            cx="50"
            cy="50"
            r="15"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-left text-white px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto w-full py-20"
        initial="hidden"
        animate="visible"
        variants={staggerContainer(0.1, 0.12)}
      >
        <div className="max-w-3xl">
          {/* Main Heading */}
          <motion.h1
            variants={fadeUp}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mb-8 leading-[1.05]"
          >
            <span className="block">Transform Your Space</span>
            <span className="block text-brand-accent">
              With Timeless Elegance
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="text-white/70 text-lg sm:text-xl max-w-xl mb-10 leading-relaxed"
          >
            Discover meticulously crafted furniture pieces that blend
            contemporary design with traditional artisanship. Built for
            generations, designed for you.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <button
              onClick={() => navigate("/products")}
              className="group relative bg-brand-accent hover:bg-brand-accent-hover text-white px-10 py-4.5 rounded-full font-semibold transition-all duration-300 hover:shadow-[0_20px_40px_rgba(232,115,74,0.3)] hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Shop Collection
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
              </span>
            </button>
            <button
              onClick={() => navigate("/about-us")}
              className="group bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-10 py-4.5 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 flex items-center gap-3"
            >
              <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              Our Story
            </button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-8 mt-14 pt-8 border-t border-white/10"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-brand-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold">Lifetime Warranty</p>
                <p className="text-white/50 text-sm">On all furniture</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-brand-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold">Free Shipping</p>
                <p className="text-white/50 text-sm">On orders over $500</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-brand-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold">30-Day Returns</p>
                <p className="text-white/50 text-sm">Hassle-free</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-white/50 cursor-pointer"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight * 0.9,
              behavior: "smooth",
            });
          }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
