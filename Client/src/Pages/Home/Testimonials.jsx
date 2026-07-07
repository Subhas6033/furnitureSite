import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { staggerContainer, fadeUp } from "../../Animations/Animations";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Interior Designer",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&w=150&h=150&fit=crop",
    quote:
      "The quality of Entity Furnitures furniture is unmatched. My clients absolutely love the pieces I've sourced from them. Truly exceptional craftsmanship.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "Homeowner",
    image:
      "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&w=150&h=150&fit=crop",
    quote:
      "We furnished our entire living room from Entity Furnitures. The delivery was seamless and the pieces look even better in person than on the website.",
    rating: 5,
  },
  {
    name: "Ananya Patel",
    role: "Architecture Professional",
    image:
      "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&w=150&h=150&fit=crop",
    quote:
      "As an architect, I'm very particular about the furniture I specify. Entity Furnitures consistently delivers pieces that exceed my expectations.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Business Owner",
    image:
      "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&w=150&h=150&fit=crop",
    quote:
      "The custom furniture for my office space has transformed the entire ambience. Your team truly understands design excellence.",
    rating: 5,
  },
  {
    name: "Meera Krishnan",
    role: "Homeowner",
    image:
      "https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&w=150&h=150&fit=crop",
    quote:
      "Amazing experience from start to finish. The furniture quality is outstanding and the customization options are endless.",
    rating: 5,
  },
  {
    name: "Arjun Nair",
    role: "Interior Designer",
    image:
      "https://images.pexels.com/photos/1933556/pexels-photo-1933556.jpeg?auto=compress&w=150&h=150&fit=crop",
    quote:
      "I've recommended Entity Furnitures to all my clients. The attention to detail and build quality is simply phenomenal.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  // Auto-scroll functionality
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
  };

  return (
    <section className="py-20 md:py-28 bg-slate-900 relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="grid"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute top-20 -left-20 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            Client Love
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-5"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Don't just take our word for it — hear from the homeowners and
            designers who trust us with their spaces.
          </motion.p>
        </motion.div>

        {/* Auto-scrolling Testimonials Carousel */}
        <div className="relative overflow-hidden">
          {/* Testimonial Cards */}
          <motion.div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / 3)}%)`,
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${index}`}
                className="w-full md:w-1/3 flex-shrink-0 px-3"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 hover:border-brand-accent/30 transition-all duration-300 h-full">
                  {/* Quote Icon */}
                  <svg
                    className="w-10 h-10 text-brand-accent/30 mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>

                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-brand-accent"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-slate-300 text-lg leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-brand-accent/30"
                    />
                    <div>
                      <p className="text-white font-medium">{testimonial.name}</p>
                      <p className="text-slate-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Dots */}
        <motion.div
          className="flex justify-center gap-2 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === currentIndex ? "w-8 bg-brand-accent" : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;