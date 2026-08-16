import { AnimatePresence, motion } from "framer-motion";

const ReviewToast = ({
  show,
  type = "success",
  message,
  onClose,
}) => {
  const isSuccess = type === "success";

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="
            fixed
            top-4
            right-4
            z-[200]
            w-[calc(100%-2rem)]
            max-w-[380px]
          "
          role="alert"
          aria-live="polite"
        >
          <div
            className={`
              flex
              items-start
              gap-3
              rounded-lg
              border
              bg-slate-900
              px-4
              py-3.5
              shadow-lg
              ${
                isSuccess
                  ? "border-emerald-500/20"
                  : "border-red-500/20"
              }
            `}
          >
            {/* Status icon */}
            <div
              className={`
                mt-0.5
                flex
                h-7
                w-7
                shrink-0
                items-center
                justify-center
                rounded-full
                ${
                  isSuccess
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "bg-red-500/10 text-red-400"
                }
              `}
            >
              {isSuccess ? (
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    d="M5 10.5 8.2 13.5 15 6.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    d="M10 5.5V10.5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="10"
                    cy="13.5"
                    r="0.8"
                    fill="currentColor"
                  />
                </svg>
              )}
            </div>

            {/* Content */}
            <div className="min-w-0 flex-1">
              <p
                className={`
                  text-sm
                  font-medium
                  ${
                    isSuccess
                      ? "text-emerald-400"
                      : "text-red-400"
                  }
                `}
              >
                {isSuccess
                  ? "Review submitted"
                  : "Unable to submit review"}
              </p>

              <p className="mt-0.5 text-sm leading-5 text-slate-400">
                {message}
              </p>
            </div>

            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close notification"
              className="
                shrink-0
                rounded-md
                p-1
                text-slate-500
                transition-colors
                hover:bg-white/5
                hover:text-slate-300
                focus:outline-none
                focus:ring-2
                focus:ring-brand-accent/40
              "
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  d="M5 5L15 15M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ReviewToast;