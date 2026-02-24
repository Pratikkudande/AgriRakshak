import { motion } from "framer-motion";

function PageTransition({ children }) {
  return (
    <motion.main
      className="flex-1"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.main>
  );
}

export default PageTransition;
