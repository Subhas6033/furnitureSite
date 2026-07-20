import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeUp, staggerContainer } from "../../Animations/Animations";

const whatsappUrl = import.meta.env.VITE_WHATSAPP_URL || "";
const instagramUrl = import.meta.env.VITE_INSTAGRAM_URL || "";

// Social media data
const socialLinks = [
  {
    name: "WhatsApp",
    description: "Chat with us for quick responses",
    href: whatsappUrl,
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.297-.15.743-.372 1.048-.56.305-.189.521-.307.714-.52.193-.198.257-.372.353-.572.097-.198.049-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    color: "bg-green-500",
    hoverColor: "hover:bg-green-600",
  },
  {
    name: "Facebook",
    description: "Follow us for latest updates",
    href: "https://facebook.com/entityfurnitures",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    color: "bg-blue-600",
    hoverColor: "hover:bg-blue-700",
  },
  {
    name: "Instagram",
    description: "See our daily posts and stories",
    href: instagramUrl,
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    color: "bg-linear-to-br from-yellow-400 via-pink-500 to-purple-600",
    hoverColor: "hover:opacity-90",
  },
];

// Contact info data
const contactInfo = [
  {
    title: "Visit Our Showroom",
    description:
      "Ground Floor & Unit: 101 & 102, 18, Ashutosh Mukherjee Rd, Jadubabur Bazar, Bhowanipore, Kolkata, West Bengal 700020",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "Call Us",
    description: "+91 9182820499",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    title: "Email Us",
    description: "entityfurniture2006@gmail.com",
    icon: (
      <svg
        className="w-6 h-6"
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
    ),
  },
];

const Contact = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main ref={containerRef} className="bg-stone-50">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000&auto=format&fit=crop"
              alt="Modern furniture showroom"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-r from-slate-900/85 via-slate-900/65 to-slate-900/45" />
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 right-1/4 w-64 h-64 bg-brand-accent/20 rounded-full blur-[100px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-brand-primary/20 rounded-full blur-[80px]"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <motion.div
          className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.1, 0.15)}
        >
          <motion.span
            variants={fadeUp}
            className="inline-block text-sm font-semibold tracking-[0.25em] uppercase text-brand-accent mb-6"
          >
            Get In Touch
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl font-serif mb-6 leading-tight"
          >
            We'd Love to
            <br />
            <span className="text-brand-accent">Hear From You</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Have questions about our furniture? Want to discuss a custom piece?
            Reach out to us through any of our social channels.
          </motion.p>
        </motion.div>
      </section>

      {/* Social Links Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Connect With Us
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl lg:text-5xl font-serif text-slate-900 mb-5"
            >
              Follow & Message
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-slate-600 text-lg max-w-2xl mx-auto"
            >
              Choose your preferred platform to get in touch. We're always happy
              to help!
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={fadeUp}
                custom={index}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center"
              >
                {/* Icon Circle */}
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 ${social.color} text-white rounded-full mb-6 transition-transform duration-300 group-hover:scale-110`}
                >
                  {social.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-serif text-slate-900 mb-2 group-hover:text-brand-primary transition-colors duration-300">
                  {social.name}
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  {social.description}
                </p>

                {/* Arrow */}
                <div className="flex items-center justify-center gap-1 text-brand-accent font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <span>Visit</span>
                  <svg
                    className="w-4 h-4"
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
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-brand-accent/30 transition-colors duration-300" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 md:py-28 bg-linear-to-br from-stone-50 via-slate-50 to-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-3 gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer(0.1, 0.1)}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                variants={fadeUp}
                custom={index}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-serif text-slate-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-slate-600">{info.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0 bg-slate-100">
        <div className="w-full h-112.5 md:h-125">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.146509310262!2d88.34352947517337!3d22.5361838795176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02773f02dba4c1%3A0x1aaf990d5c689c57!2sEntity%20Furniture!5e0!3m2!1sen!2sin!4v1783532619330!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Entity Furniture Location"
            className="w-full h-full"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-linear-to-br from-brand-primary via-brand-primary-hover to-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-accent/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer(0.1, 0.1)}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6"
            >
              Ready to Transform Your Space?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-white/70 text-lg mb-10 max-w-xl mx-auto"
            >
              Browse our collection or visit our showroom to experience the
              quality firsthand.
            </motion.p>
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href="/products"
                className="bg-brand-accent hover:bg-brand-accent-hover text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-brand-accent/30 hover:-translate-y-1"
              >
                Browse Collection
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
