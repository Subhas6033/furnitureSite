import { motion } from "framer-motion";

const ReviewCard = ({ testimonial }) => {
    return (
        <motion.div
            className="
                w-full
                md:w-1/3
                flex-shrink-0
                px-3
            "
        >
            <div
                className="
                    bg-white/5
                    backdrop-blur-sm
                    rounded-2xl
                    p-6
                    md:p-8
                    border
                    border-white/10
                    hover:border-brand-accent/30
                    transition-all
                    duration-300
                    h-full
                "
            >
                {/* Quote */}
                <svg
                    className="w-10 h-10 text-brand-accent/30 mb-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <svg
                            key={i}
                            className="w-5 h-5 text-brand-accent"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                </div>
                {/* Review */}
                <blockquote
                    className="
                        text-slate-300
                        text-lg
                        leading-relaxed
                        mb-6
                    "
                >
                    "{testimonial.review}"
                </blockquote>
                {/* User */}
                <div className="flex items-center gap-4">

                    <div
                        className="
                            w-12
                            h-12
                            rounded-full
                            bg-brand-accent/10
                            ring-2
                            ring-brand-accent/30
                            flex
                            items-center
                            justify-center
                            text-brand-accent
                            font-semibold
                            text-lg
                        "
                    >
                        {testimonial.userName
                            ?.charAt(0)
                            ?.toUpperCase()}
                    </div>
                    <div>
                        <p className="text-white font-medium">
                            {testimonial.userName}
                        </p>

                        <p className="text-slate-500 text-sm">
                            Verified Customer
                        </p>
                    </div>

                </div>
            </div>
        </motion.div>
    );
};

export default ReviewCard;