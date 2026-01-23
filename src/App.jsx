import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { content } from "./data/content";
import SocialRow from "./components/SocialRow";
import IntroOverlay from "./components/IntroOverlay";
import AnimatedWords from "./components/AnimatedWords";

const PAGES = {
  HOME: "HOME",
  ABOUT: "ABOUT",
  SKILLS: "SKILLS",
  PROJECTS: "PROJECTS",
  CONTACT: "CONTACT",
};

const pageVariants = {
  initial: { opacity: 0, y: 16, filter: "blur(7px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -10, filter: "blur(7px)" },
};

const listWrap = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const listItem = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function App() {
  const [page, setPage] = useState(PAGES.HOME);
  const [showIntro, setShowIntro] = useState(true);

  const go = (next) => setPage(next);

  return (
    <div className="wrap">
      {/* Background */}
      <div className="bgBlob one" aria-hidden="true" />
      <div className="bgBlob two" aria-hidden="true" />
      <div className="cornerSticker" aria-hidden="true" />

      {/* Intro overlay */}
      <AnimatePresence>
        {showIntro && <IntroOverlay onDone={() => setShowIntro(false)} />}
      </AnimatePresence>

      {/* Back button */}
      {!showIntro && page !== PAGES.HOME && (
        <motion.button
          className="backBtn"
          onClick={() => go(PAGES.HOME)}
          whileTap={{ scale: 0.96 }}
          whileHover={{ x: 2 }}
        >
          Back
        </motion.button>
      )}

      {/* Pages */}
      {!showIntro && (
        <AnimatePresence mode="wait">
          {/* HOME */}
          {page === PAGES.HOME && (
            <motion.div
              key="home"
              className="screen centerScreen"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <motion.h1
                className="heroTitle"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
              >
                Hi, I’m <span className="accent">{content.nickName}</span>
              </motion.h1>

              <div className="menu">
                {[
                  ["About", PAGES.ABOUT],
                  ["Skills", PAGES.SKILLS],
                  ["Experience", PAGES.PROJECTS],
                  ["Contact", PAGES.CONTACT],
                ].map(([label, target]) => (
                  <motion.button
                    key={label}
                    className="menuItem"
                    onClick={() => go(target)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* ABOUT (spaces fixed by AnimatedWords.jsx) */}
          {page === PAGES.ABOUT && (
            <motion.div
              key="about"
              className="screen"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <h2 className="sectionTitle">{content.aboutTitle}</h2>
              <AnimatedWords text={content.aboutText} wordDelay={0.03} className="text" />

              <h2 className="sectionTitle bigTop">{content.careerTitle}</h2>
              <AnimatedWords text={content.careerText} wordDelay={0.03} className="text" />
            </motion.div>
          )}

          {/* SKILLS */}
          {page === PAGES.SKILLS && (
            <motion.div
              key="skills"
              className="screen"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <h1 className="bigHero">{content.roleTitle}</h1>
              <AnimatedWords text={content.roleSubtitle} wordDelay={0.05} className="subText" />

              <div className="twoCol">
                <div className="panel">
                  <h3 className="colTitle">Frontend</h3>
                  <motion.ul
                    className="skillList"
                    variants={listWrap}
                    initial="hidden"
                    animate="show"
                  >
                    {content.skills.frontend.map((s) => (
                      <motion.li key={s} variants={listItem}>
                        {s}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>

                <div className="panel">
                  <h3 className="colTitle">Backend</h3>
                  <motion.ul
                    className="skillList"
                    variants={listWrap}
                    initial="hidden"
                    animate="show"
                  >
                    {content.skills.backend.map((s) => (
                      <motion.li key={s} variants={listItem}>
                        {s}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            </motion.div>
          )}

          {/* EXPERIENCE (FIXED: stable animation) */}
          {page === PAGES.PROJECTS && (
            <motion.div
              key="projects"
              className="screen"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <h2 className="sectionTitle">{content.projectsTitle}</h2>

              <motion.div
                className="cards"
                variants={listWrap}
                initial="hidden"
                animate="show"
              >
                {content.projects.map((p) => (
                  <motion.a
                    key={p.title}
                    className="card"
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    variants={listItem}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="cardHead">
                      <h3 className="cardTitle">{p.title}</h3>
                      <span className="more">more &gt;</span>
                    </div>

                    {/* plain text to avoid glitch */}
                    <p className="cardText">{p.description}</p>
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          )}

          {/* CONTACT */}
          {page === PAGES.CONTACT && (
            <motion.div
              key="contact"
              className="screen contactScreen"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <AnimatedWords text={content.contactText} wordDelay={0.08} className="contactText" />
              <SocialRow />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}
