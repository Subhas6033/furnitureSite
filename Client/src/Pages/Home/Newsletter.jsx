import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "../../Animations/Animations";

// Social media icons as components

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const socialIcons = {
  instagram: InstagramIcon,
};

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <section className="py-20 md:py-28 bg-linear-to-br from-brand-primary via-brand-primary-hover to-brand-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-accent/20 rounded-full blur-3xl" />
        {/* Diagonal lines pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="diagonal"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(45)"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="10"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonal)" />
          </svg>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer(0.1, 0.1)}
        >
          {/* Icon */}
          <motion.div variants={fadeUp} className="mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
          </motion.div>

          {/* Header */}
          <motion.span
            variants={fadeUp}
            className="inline-block text-sm font-semibold tracking-[0.25em] uppercase text-brand-accent mb-4"
          >
            Stay in the Loop
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-5"
          >
            Join Our Community
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-white/70 text-lg mb-10 max-w-xl mx-auto"
          >
            Subscribe to receive exclusive offers, design inspiration, and early
            access to new collections.
          </motion.p>

          {/* Form or Success Message */}
          {subscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl py-6 px-8 inline-flex items-center gap-3"
            >
              <svg
                className="w-6 h-6 text-brand-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <p className="text-white font-medium text-lg">
                Thank you for subscribing!
              </p>
            </motion.div>
          ) : (
            <motion.form
              variants={fadeUp}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            >
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 rounded-full bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all"
                  required
                />
              </div>
              <button
                type="submit"
                className="group bg-brand-accent hover:bg-brand-accent-hover text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-brand-accent/30 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                <span>Subscribe</span>
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
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </motion.form>
          )}

          {/* Privacy Note */}
          <motion.p variants={fadeUp} className="text-white/40 text-sm mt-6">
            By subscribing, you agree to our Privacy Policy. Unsubscribe
            anytime.
          </motion.p>

          {/* Social Links */}
          <motion.div
            variants={fadeUp}
            className="flex justify-center gap-4 mt-10"
          >
            {Object.entries(socialIcons).map(([name, Icon]) => (
              <a
                key={name}
                href="#"
                aria-label={name}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Icon />
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
