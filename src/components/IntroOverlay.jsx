import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedWords from "./AnimatedWords";
import { content } from "../data/content";

export default function IntroOverlay({ onDone }) {
  const [step, setStep] = useState(1);

  const line1 = useMemo(() => `Hi It's me ${content.fullName}`, []);
  const line2 = useMemo(() => `Hi Everyone Call Me ${content.nickName}`, []);
  const line3 = useMemo(() => `Hi It's me Swanyi 😄✨`, []);

  useEffect(() => {
    if (step === 1) {
      const words = line1.split(" ").length;
      const total = words * 1000 + 900; // 1 sec per word + buffer
      const t = setTimeout(() => setStep(2), total);
      return () => clearTimeout(t);
    }
    if (step === 2) {
      const t = setTimeout(() => setStep(3), 2400);
      return () => clearTimeout(t);
    }
    if (step === 3) {
      const t = setTimeout(() => onDone?.(), 2400);
      return () => clearTimeout(t);
    }
  }, [step, line1, onDone]);

  return (
    <motion.div
      className="overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background decoration inside overlay */}
      <div className="overlayBlob a" aria-hidden="true" />
      <div className="overlayBlob b" aria-hidden="true" />

      <div className="overlayCenter">
        <div className="overlayCard">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="s1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
              >
                <AnimatedWords
                  text={line1}
                  wordDelay={1}
                  className="overlayText"
                />
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="s2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
              >
                <AnimatedWords
                  text={line2}
                  wordDelay={0.18}
                  className="overlayText"
                />
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="s3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
              >
                <AnimatedWords
                  text={line3}
                  wordDelay={0.14}
                  className="overlayText"
                />
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            className="overlayBar"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.0, ease: "easeInOut" }}
          />

          <p className="overlayHint">Loading your portfolio…</p>
        </div>
      </div>
    </motion.div>
  );
}
