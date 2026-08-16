import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { submitReview } from "../../API/reviewSlice";

const INITIAL_FORM = {
    userName: "",
    email: "",
    review: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ReviewModal = ({
    isOpen,
    onClose,
    onSuccess,
}) => {
    const dispatch = useDispatch();

    const { loading } = useSelector(
        (state) => state.review
    );

    const [formData, setFormData] =
        useState(INITIAL_FORM);

    const [validationError, setValidationError] =
        useState("");

    const firstInputRef = useRef(null);

    /*
     * Reset state whenever modal opens.
     */
    useEffect(() => {
        if (!isOpen) return;

        setValidationError("");

        // Focus first input after modal opens
        const timer = setTimeout(() => {
            firstInputRef.current?.focus();
        }, 100);

        return () => clearTimeout(timer);
    }, [isOpen]);

    /*
     * Close modal with Escape.
     */
    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (event) => {
            if (event.key === "Escape" && !loading) {
                onClose();
            }
        };

        document.addEventListener(
            "keydown",
            handleEscape
        );

        return () => {
            document.removeEventListener(
                "keydown",
                handleEscape
            );
        };
    }, [isOpen, loading, onClose]);

    /*
     * Handle input changes.
     */
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (validationError) {
            setValidationError("");
        }
    };

    /*
     * Validate form before sending request.
     */
    const validateForm = () => {
        const userName = formData.userName.trim();
        const email = formData.email.trim();
        const review = formData.review.trim();

        if (!userName || !email || !review) {
            return "Please fill in all fields.";
        }

        if (userName.length < 2) {
            return "Name must be at least 2 characters.";
        }

        if (userName.length > 50) {
            return "Name must not exceed 50 characters.";
        }

        if (!EMAIL_REGEX.test(email)) {
            return "Please enter a valid email address.";
        }

        if (review.length < 10) {
            return "Review must be at least 10 characters.";
        }

        if (review.length > 1000) {
            return "Review must not exceed 1000 characters.";
        }

        return null;
    };

    /*
     * Submit review.
     */
    const handleSubmit = async (event) => {
        event.preventDefault();

        // Prevent duplicate requests
        if (loading) return;

        const error = validateForm();

        if (error) {
            setValidationError(error);
            return;
        }

        const payload = {
            userName: formData.userName.trim(),
            email: formData.email.trim().toLowerCase(),
            review: formData.review.trim(),
        };

        try {
            const result = await dispatch(
                submitReview(payload)
            ).unwrap();

            // Reset form
            setFormData(INITIAL_FORM);
            setValidationError("");

            // Close modal
            onClose();

            // Tell parent to display toast
            onSuccess?.(
                result?.message ||
                    "Your review has been submitted successfully."
            );
        } catch (error) {
            /*
             * Don't expose raw backend errors.
             * Show a user-friendly message instead.
             */
            const message =
                typeof error === "string"
                    ? error
                    : error?.message;

            setValidationError(
                message ||
                    "We couldn't submit your review. Please try again."
            );
        }
    };

    /*
     * Don't allow backdrop close while submitting.
     */
    const handleBackdropClick = () => {
        if (!loading) {
            onClose();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="
                        fixed
                        inset-0
                        z-[100]
                        flex
                        items-center
                        justify-center
                        p-4
                        bg-black/70
                        backdrop-blur-sm
                    "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onMouseDown={handleBackdropClick}
                    role="presentation"
                >
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 16,
                            scale: 0.98,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            y: 10,
                            scale: 0.98,
                        }}
                        transition={{
                            duration: 0.2,
                            ease: "easeOut",
                        }}
                        onMouseDown={(event) =>
                            event.stopPropagation()
                        }
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="review-modal-title"
                        aria-describedby="review-modal-description"
                        className="
                            w-full
                            max-w-lg
                            max-h-[90vh]
                            overflow-y-auto
                            bg-slate-900
                            border
                            border-white/10
                            rounded-2xl
                            shadow-2xl
                            p-6
                            md:p-8
                        "
                    >
                        {/* Header */}
                        <div className="flex items-start justify-between gap-4 mb-6">
                            <div>
                                <h2
                                    id="review-modal-title"
                                    className="
                                        text-2xl
                                        font-serif
                                        text-white
                                    "
                                >
                                    Share Your Experience
                                </h2>

                                <p
                                    id="review-modal-description"
                                    className="
                                        text-sm
                                        text-slate-400
                                        mt-1
                                    "
                                >
                                    Tell us about your experience
                                    with Entity Furnitures.
                                </p>
                            </div>

                            <button
                                type="button"
                                onClick={onClose}
                                disabled={loading}
                                aria-label="Close review form"
                                className="
                                    shrink-0
                                    w-9
                                    h-9
                                    rounded-full
                                    flex
                                    items-center
                                    justify-center
                                    text-slate-400
                                    hover:text-white
                                    hover:bg-white/10
                                    disabled:opacity-40
                                    disabled:cursor-not-allowed
                                    transition
                                "
                            >
                                <svg
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M6 6L18 18M18 6L6 18"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Validation Error */}
                        <AnimatePresence>
                            {validationError && (
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        height: 0,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        height: "auto",
                                    }}
                                    exit={{
                                        opacity: 0,
                                        height: 0,
                                    }}
                                    className="
                                        mb-5
                                        rounded-lg
                                        border
                                        border-red-500/20
                                        bg-red-500/10
                                        px-4
                                        py-3
                                        text-sm
                                        text-red-400
                                    "
                                    role="alert"
                                >
                                    {validationError}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <form
                            onSubmit={handleSubmit}
                            noValidate
                            className="space-y-5"
                        >
                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="review-userName"
                                    className="
                                        block
                                        text-sm
                                        font-medium
                                        text-slate-300
                                        mb-2
                                    "
                                >
                                    Your Name
                                </label>

                                <input
                                    ref={firstInputRef}
                                    id="review-userName"
                                    name="userName"
                                    type="text"
                                    value={formData.userName}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    autoComplete="name"
                                    minLength={2}
                                    maxLength={50}
                                    disabled={loading}
                                    className="
                                        w-full
                                        px-4
                                        py-3
                                        rounded-xl
                                        bg-white/5
                                        border
                                        border-white/10
                                        text-white
                                        placeholder:text-slate-500
                                        outline-none
                                        focus:border-brand-accent
                                        focus:ring-1
                                        focus:ring-brand-accent
                                        disabled:opacity-50
                                        transition
                                    "
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="review-email"
                                    className="
                                        block
                                        text-sm
                                        font-medium
                                        text-slate-300
                                        mb-2
                                    "
                                >
                                    Email Address
                                </label>

                                <input
                                    id="review-email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    autoComplete="email"
                                    maxLength={254}
                                    disabled={loading}
                                    className="
                                        w-full
                                        px-4
                                        py-3
                                        rounded-xl
                                        bg-white/5
                                        border
                                        border-white/10
                                        text-white
                                        placeholder:text-slate-500
                                        outline-none
                                        focus:border-brand-accent
                                        focus:ring-1
                                        focus:ring-brand-accent
                                        disabled:opacity-50
                                        transition
                                    "
                                />
                            </div>

                            {/* Review */}
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <label
                                        htmlFor="review-message"
                                        className="
                                            text-sm
                                            font-medium
                                            text-slate-300
                                        "
                                    >
                                        Your Review
                                    </label>

                                    <span className="text-xs text-slate-500">
                                        {formData.review.length}/1000
                                    </span>
                                </div>

                                <textarea
                                    id="review-message"
                                    name="review"
                                    value={formData.review}
                                    onChange={handleChange}
                                    placeholder="Tell us about your experience..."
                                    minLength={10}
                                    maxLength={1000}
                                    rows={5}
                                    disabled={loading}
                                    className="
                                        w-full
                                        px-4
                                        py-3
                                        rounded-xl
                                        bg-white/5
                                        border
                                        border-white/10
                                        text-white
                                        placeholder:text-slate-500
                                        outline-none
                                        focus:border-brand-accent
                                        focus:ring-1
                                        focus:ring-brand-accent
                                        disabled:opacity-50
                                        resize-none
                                        transition
                                    "
                                />
                            </div>

                            {/* Actions */}
                            <div className="flex gap-3 pt-1">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    disabled={loading}
                                    className="
                                        flex-1
                                        px-5
                                        py-3
                                        rounded-xl
                                        border
                                        border-white/10
                                        text-slate-300
                                        hover:bg-white/5
                                        disabled:opacity-40
                                        disabled:cursor-not-allowed
                                        transition
                                    "
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="
                                        flex-1
                                        flex
                                        items-center
                                        justify-center
                                        gap-2
                                        px-5
                                        py-3
                                        rounded-xl
                                        bg-brand-accent
                                        text-slate-900
                                        font-semibold
                                        hover:opacity-90
                                        disabled:opacity-50
                                        disabled:cursor-not-allowed
                                        transition
                                    "
                                >
                                    {loading && (
                                        <span
                                            className="
                                                w-4
                                                h-4
                                                rounded-full
                                                border-2
                                                border-slate-900/30
                                                border-t-slate-900
                                                animate-spin
                                            "
                                            aria-hidden="true"
                                        />
                                    )}

                                    {loading
                                        ? "Submitting..."
                                        : "Submit Review"}
                                </button>
                            </div>

                            <p className="
                                text-xs
                                text-center
                                text-slate-500
                                leading-relaxed
                            ">
                                Reviews are reviewed before
                                being published.
                            </p>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ReviewModal;