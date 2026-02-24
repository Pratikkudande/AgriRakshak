import { motion } from "framer-motion";

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <motion.article whileHover={{ y: -6 }} transition={{ duration: 0.2 }} className="card-base">
      <div className="mb-4 inline-flex rounded-xl bg-leaf-100 p-3 text-leaf-700">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="font-display text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-soil-700">{description}</p>
    </motion.article>
  );
}

export default FeatureCard;
