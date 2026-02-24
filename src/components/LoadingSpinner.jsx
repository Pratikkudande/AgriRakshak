import { motion } from "framer-motion";

function LoadingSpinner({ label = "Processing..." }) {
  return (
    <div className="flex items-center gap-3 text-leaf-700">
      <motion.span
        className="h-5 w-5 rounded-full border-2 border-leaf-200 border-t-leaf-600"
        animate={{ rotate: 360 }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
      />
      <span className="font-semibold">{label}</span>
    </div>
  );
}

export default LoadingSpinner;
