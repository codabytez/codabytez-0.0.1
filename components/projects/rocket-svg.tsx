import { motion } from "framer-motion";

// Animated SVG components
export const RocketSvg: React.FC<{ animationDelay: number }> = ({
  animationDelay,
}) => (
  <motion.svg
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: animationDelay }}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-16 h-16 text-accent-100"
  >
    <path
      d="M11.9999 1.39063C11.8421 1.38903 11.6919 1.44737 11.5767 1.55613L5.88373 6.51413C5.58167 6.77851 5.52382 7.22892 5.76382 7.55613L9.67773 12.3061C9.82379 12.5012 10.0394 12.6328 10.2787 12.6704L15.5977 13.5704C16.1908 13.6567 16.7562 13.314 16.9512 12.7209L18.8212 5.72092C18.9691 5.15949 18.6336 4.5514 18.0712 4.40392L11.9999 1.39063Z"
      fill="currentColor"
    />
    <path
      d="M15.5981 17.8203C15.8855 18.0577 16.2791 18.1192 16.6332 17.9824L21.3882 15.9824C21.9506 15.8349 22.2861 15.2268 22.1382 14.6654L21.1012 10.3294C21.0279 10.059 20.8477 9.82672 20.6026 9.68072L10.2746 1.71872C9.80756 1.31928 9.10594 1.39622 8.70649 1.86322C8.30705 2.33022 8.383 3.04185 8.85 3.44128L18.5039 10.8833L15.5981 17.8203Z"
      fill="currentColor"
    />
  </motion.svg>
);
