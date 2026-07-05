import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "../../Animations/Animations";

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
    <section className="py-16 md:py-24 bg-[#1c4a37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer(0.1, 0.1)}
        >
          <motion.span
            variants={fadeUp}
            className="inline-block text-sm font-medium tracking-wider uppercase text-[#d4af6a] mb-3"
          >
            Stay in the Loop
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4"
          >
            Join Our Community
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-white/70 text-lg mb-8"
          >
            Subscribe to receive exclusive offers, design inspiration, and early
            access to new collections.
          </motion.p>

          {subscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/10 rounded-full py-4 px-8 inline-block"
            >
              <p className="text-white font-medium">
                ✨ Thank you for subscribing!
              </p>
            </motion.div>
          ) : (
            <motion.form
              variants={fadeUp}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#d4af6a] transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-[#d4af6a] text-[#1a1a1a] px-6 py-3.5 rounded-full font-medium hover:bg-[#e6c27a] transition-colors"
              >
                Subscribe
              </button>
            </motion.form>
          )}

          <motion.p
            variants={fadeUp}
            className="text-white/40 text-sm mt-6"
          >
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;