import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "../../Animations/Animations";

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Artisan Craftsmanship",
    description:
      "Each piece is meticulously crafted by skilled artisans using traditional techniques passed down through generations.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    title: "Sustainable Materials",
    description:
      "We source only the finest responsibly harvested hardwoods and eco-friendly materials for lasting quality.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "White Glove Delivery",
    description:
      "Complimentary delivery and in-home setup by our professional team. We treat your furniture as if it were our own.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Lifetime Warranty",
    description:
      "Every piece comes with our lifetime warranty. We stand behind our furniture for generations to come.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-[#f5f2eb]">
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
            Why Amara & Oak
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1a1a1a] mb-4"
          >
            Built to Last a Lifetime
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-[#666] text-lg max-w-2xl mx-auto"
          >
            We believe furniture should be more than functional — it should be
            a centerpiece of your home for generations.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer(0.1, 0.1)}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              className="text-center p-6 md:p-8"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#123326] text-white mb-5">
                {feature.icon}
              </div>
              <h3 className="text-[#1a1a1a] font-serif text-xl mb-3">
                {feature.title}
              </h3>
              <p className="text-[#666] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;