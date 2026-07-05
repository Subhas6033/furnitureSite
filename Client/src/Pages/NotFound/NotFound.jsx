import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-100 via-amber-50 to-stone-200 relative overflow-hidden">
      {/* Floating Furniture Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Sofa */}
        <div className="absolute bottom-20 left-10 opacity-20 animate-float-slow">
          <svg className="w-32 h-20 text-brand-primary" viewBox="0 0 120 60" fill="currentColor">
            <rect x="5" y="20" width="110" height="35" rx="8" />
            <rect x="0" y="15" width="20" height="40" rx="5" />
            <rect x="100" y="15" width="20" height="40" rx="5" />
          </svg>
        </div>

        {/* Lamp */}
        <div className="absolute top-20 right-20 opacity-15 animate-float">
          <svg className="w-16 h-24 text-brand-accent" viewBox="0 0 40 80">
            <polygon points="20,0 35,25 5,25" />
            <rect x="18" y="25" width="4" height="40" />
            <ellipse cx="20" cy="68" rx="12" ry="4" />
          </svg>
        </div>

        {/* Chair */}
        <div className="absolute top-32 left-1/4 opacity-15 animate-float-reverse">
          <svg className="w-20 h-24 text-brand-primary" viewBox="0 0 60 70">
            <rect x="10" y="30" width="40" height="35" rx="4" />
            <rect x="12" y="5" width="36" height="30" rx="4" />
            <rect x="8" y="60" width="6" height="10" />
            <rect x="46" y="60" width="6" height="10" />
          </svg>
        </div>

        {/* Table */}
        <div className="absolute bottom-32 right-1/4 opacity-15 animate-float-slow">
          <svg className="w-28 h-16 text-brand-accent" viewBox="0 0 80 40">
            <rect x="5" y="5" width="70" height="8" rx="2" />
            <rect x="10" y="13" width="6" height="25" />
            <rect x="64" y="13" width="6" height="25" />
          </svg>
        </div>

        {/* Small decorative dots */}
        <div className="absolute top-1/4 right-1/3 w-3 h-3 rounded-full bg-brand-accent/20 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-brand-primary/20 animate-pulse delay-700"></div>
        <div className="absolute top-1/2 right-1/4 w-4 h-4 rounded-full bg-brand-accent/10 animate-pulse delay-500"></div>
      </div>

      <div className="text-center z-10 px-6 max-w-2xl">
        {/* Animated 404 with furniture style */}
        <div className="relative mb-8">
          <h1 className="text-[12rem] leading-none font-bold text-transparent bg-clip-text bg-gradient-to-br from-brand-primary via-brand-primary-hover to-brand-primary-light animate-fade-in drop-shadow-xl">
            404
          </h1>
          {/* Decorative underline */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-40 h-2 bg-gradient-to-r from-transparent via-brand-accent to-transparent rounded-full animate-expand"></div>
        </div>

        {/* Main message */}
        <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-4xl font-semibold text-brand-primary mb-4 tracking-tight">
            Oops! This Page Got Lost
          </h2>
          <p className="text-lg text-stone-600 mb-10 leading-relaxed max-w-lg mx-auto">
            Looks like this furniture wandered off the show floor.
            Let's get you back to browsing our collection!
          </p>
        </div>

        {/* CTA Button */}
        <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <Link
            to="/"
            className="inline-flex items-center gap-3 px-10 py-4 bg-brand-accent hover:bg-brand-accent-hover text-white text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-brand-accent/30 hover:-translate-y-1 group"
          >
            <svg
              className="w-5 h-5 transition-transform group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
            </svg>
            <span>Back to Home</span>
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12 flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <Link
            to="/products"
            className="px-6 py-2 border-2 border-brand-primary text-brand-primary rounded-full hover:bg-brand-primary hover:text-white transition-all duration-300 text-sm font-medium"
          >
            Shop All Products
          </Link>
          <Link
            to="/about-us"
            className="px-6 py-2 border-2 border-brand-primary text-brand-primary rounded-full hover:bg-brand-primary hover:text-white transition-all duration-300 text-sm font-medium"
          >
            About Us
          </Link>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes expand {
          from { width: 0; opacity: 0; }
          to { width: 10rem; opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(15px); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-expand {
          animation: expand 0.8s ease-out forwards;
          animation-delay: 0.5s;
          opacity: 0;
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 5s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 4.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default NotFound;