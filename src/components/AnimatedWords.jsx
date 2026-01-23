import { motion } from "framer-motion";

export default function AnimatedWords({
  text,
  wordDelay = 0.06,
  className = "",
}) {
  const words = String(text).trim().split(/\s+/);

  return (
    <motion.p
      className={className}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: wordDelay } },
      }}
    >
      {words.map((w, i) => (
        <span key={`${w}-${i}`}>
          <motion.span
            className="word"
            variants={{
              hidden: { opacity: 0, y: 10, filter: "blur(6px)" },
              show: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            {w}
          </motion.span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </motion.p>
  );
}
