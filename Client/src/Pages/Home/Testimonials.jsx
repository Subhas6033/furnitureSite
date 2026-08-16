import { motion } from "framer-motion";
import {
    useState,
    useEffect,
    useRef,
} from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    getReviews,
} from "../../API/reviewSlice";

import {
    staggerContainer,
    fadeUp,
} from "../../Animations/Animations";

import ReviewCard from "../../Components/others/ReviewCard";
import ReviewModal from "../../Components/others/ReviewModal";
import ReviewToast from "../../Components/others/ReviewToast";

const Testimonials = () => {

    const dispatch = useDispatch();

    const {
        reviews,
        fetchingReviews,
    } = useSelector(
        (state) => state.review
    );

    const [currentIndex, setCurrentIndex] =
        useState(0);

    const intervalRef = useRef(null);

    const [isModalOpen, setIsModalOpen] =
        useState(false);

    const [toast, setToast] = useState({
        show: false,
        type: "success",
        message: "",
    });
    // Get reviews
    useEffect(() => {
        dispatch(getReviews());
    }, [dispatch]);
// Handle toas
    useEffect(() => {

        if (!toast.show) {
            return;
        }

        const timer = setTimeout(() => {
            setToast((prev) => ({
                ...prev,
                show: false,
            }));
        }, 4000);

        return () => clearTimeout(timer);

    }, [toast.show]);
// Auto Slider
    useEffect(() => {

        if (!reviews || reviews.length <= 3) {
            return;
        }

        intervalRef.current = setInterval(() => {

            setCurrentIndex((prev) => {

                const maxIndex =
                    reviews.length - 3;

                return prev >= maxIndex
                    ? 0
                    : prev + 1;
            });

        }, 3000);

        return () => {

            if (intervalRef.current) {
                clearInterval(
                    intervalRef.current
                );
            }

        };

    }, [reviews]);
// Review Succes
    const handleReviewSuccess = (message) => {

        setToast({
            show: true,
            type: "success",
            message,
        });

        // Fetch reviews again
        dispatch(getReviews());
    };
// Dot Click
    const handleDotClick = (index) => {

        setCurrentIndex(index);

        if (intervalRef.current) {
            clearInterval(
                intervalRef.current
            );
        }

        intervalRef.current = setInterval(() => {

            setCurrentIndex((prev) => {

                const maxIndex =
                    reviews.length - 3;

                return prev >= maxIndex
                    ? 0
                    : prev + 1;
            });

        }, 3000);
    };

    const maxIndex =
        reviews?.length > 3
            ? reviews.length - 3
            : 0;

    return (
        <section
            className="
                py-20
                md:py-28
                bg-slate-900
                relative
                overflow-hidden
            "
        >

            {/* Background */}

            <div
                className="
                    absolute
                    inset-0
                    overflow-hidden
                    pointer-events-none
                "
            >

                <div
                    className="
                        absolute
                        top-0
                        left-0
                        w-full
                        h-full
                        opacity-5
                    "
                >

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

                        <rect
                            width="100%"
                            height="100%"
                            fill="url(#grid)"
                        />

                    </svg>

                </div>

                <div
                    className="
                        absolute
                        top-20
                        -left-20
                        w-80
                        h-80
                        bg-brand-accent/10
                        rounded-full
                        blur-3xl
                    "
                />

                <div
                    className="
                        absolute
                        bottom-20
                        -right-20
                        w-96
                        h-96
                        bg-brand-primary/10
                        rounded-full
                        blur-3xl
                    "
                />

            </div>

            <div
                className="
                    max-w-7xl
                    mx-auto
                    px-4
                    sm:px-6
                    lg:px-8
                    relative
                    z-10
                "
            >

                {/* HEADER */}

                <motion.div
                    className="text-center mb-14 md:mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        margin: "-100px",
                    }}
                    variants={staggerContainer(
                        0.1,
                        0.1
                    )}
                >

                    <motion.span
                        variants={fadeUp}
                        className="
                            inline-block
                            text-sm
                            font-semibold
                            tracking-[0.25em]
                            uppercase
                            text-brand-accent
                            mb-4
                        "
                    >
                        Client Love
                    </motion.span>

                    <motion.h2
                        variants={fadeUp}
                        className="
                            text-3xl
                            md:text-4xl
                            lg:text-5xl
                            font-serif
                            text-white
                            mb-5
                        "
                    >
                        What Our Clients Say
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        className="
                            text-slate-400
                            text-lg
                            max-w-2xl
                            mx-auto
                            mb-8
                        "
                    >
                        Hear from the homeowners and
                        designers who trust Entity
                        Furnitures with their spaces.
                    </motion.p>

                    {/* SUBMIT BUTTON */}

                    <motion.button
                        variants={fadeUp}
                        onClick={() =>
                            setIsModalOpen(true)
                        }
                        className="
                            inline-flex
                            px-6
                            py-3
                            rounded-full
                            bg-brand-accent
                            text-slate-900
                            font-semibold
                            hover:opacity-90
                            transition
                        "
                    >
                        Share Your Experience
                    </motion.button>

                </motion.div>

                {/* LOADING */}

                {fetchingReviews && (
                    <div className="flex justify-center py-20">

                        <div
                            className="
                                w-8
                                h-8
                                border-2
                                border-brand-accent
                                border-t-transparent
                                rounded-full
                                animate-spin
                            "
                        />

                    </div>
                )}

                {/* NO REVIEWS */}

                {!fetchingReviews &&
                    reviews?.length === 0 && (

                        <div className="text-center py-16">

                            <p className="text-slate-400">
                                No reviews yet.
                            </p>

                            <p className="text-slate-500 text-sm mt-2">
                                Be the first to share
                                your experience.
                            </p>

                        </div>
                    )}

                {/* REVIEWS */}

                {!fetchingReviews &&
                    reviews?.length > 0 && (

                        <>

                            <div
                                className="
                                    relative
                                    overflow-hidden
                                "
                            >

                                <motion.div
                                    className="
                                        flex
                                        transition-transform
                                        duration-500
                                        ease-in-out
                                    "
                                    style={{
                                        transform:
                                            `translateX(-${currentIndex * (100 / 3)}%)`,
                                    }}
                                >

                                    {reviews.map(
                                        (testimonial) => (

                                            <ReviewCard
                                                key={
                                                    testimonial._id
                                                }
                                                testimonial={
                                                    testimonial
                                                }
                                            />

                                        )
                                    )}

                                </motion.div>

                            </div>

                            {/* DOTS */}

                            {reviews.length > 3 && (

                                <div
                                    className="
                                        flex
                                        justify-center
                                        gap-2
                                        mt-12
                                    "
                                >

                                    {Array.from(
                                        {
                                            length:
                                                maxIndex + 1,
                                        },
                                        (_, i) => i
                                    ).map(
                                        (index) => (

                                            <button
                                                key={
                                                    index
                                                }
                                                onClick={() =>
                                                    handleDotClick(
                                                        index
                                                    )
                                                }
                                                className={`
                                                    h-2
                                                    rounded-full
                                                    transition-all
                                                    ${
                                                        index ===
                                                        currentIndex
                                                            ? "w-8 bg-brand-accent"
                                                            : "w-2 bg-white/30"
                                                    }
                                                `}
                                            />

                                        )
                                    )}

                                </div>
                            )}

                        </>
                    )}

            </div>

            {/* MODAL */}

            <ReviewModal
                isOpen={isModalOpen}
                onClose={() =>
                    setIsModalOpen(false)
                }
                onSuccess={
                    handleReviewSuccess
                }
            />

            {/* TOAST */}

            <ReviewToast
                show={toast.show}
                type={toast.type}
                message={toast.message}
                onClose={() =>
                    setToast((prev) => ({
                        ...prev,
                        show: false,
                    }))
                }
            />

        </section>
    );
};

export default Testimonials;