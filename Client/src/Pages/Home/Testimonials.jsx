import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "../../Animations/Animations";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Interior Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    quote:
      "The quality of Amara & Oak furniture is unmatched. My clients absolutely love the pieces I've sourced from them. Truly exceptional craftsmanship.",
    rating: 5,
  },
  {
    name: "James Richardson",
    role: "Homeowner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    quote:
      "We furnished our entire living room from Amara & Oak. The delivery was seamless and the pieces look even better in person than on the website.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Architecture Professional",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop",
    quote:
      "As an architect, I'm very particular about the furniture I specify. Amara & Oak consistently delivers pieces that exceed my expectations in both design and quality.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-[#123326]">
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
            className="inline-block text-sm font-medium tracking-wider uppercase text-[#d4af6a] mb-3"
          >
            Client Love
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            Don't just take our word for it — hear from the homeowners and
            designers who trust us with their spaces.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer(0.1, 0.1)}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={fadeUp}
              className="bg-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-sm"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-[#d4af6a]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-white/80 text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-white font-medium">{testimonial.name}</p>
                  <p className="text-white/50 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;