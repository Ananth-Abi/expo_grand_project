import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaChevronDown,
  FaCouch,
  FaBed,
  FaUtensils,
  FaCloudSun,
  FaChair,
  FaLaptop,
  FaBath,
  FaTshirt,
} from "react-icons/fa";
import logo from "../assets/expo_grand_logo.png";
import PlaceholderImage from "./PlaceholderImage";
import "./Hero.css";

// Two columns of interior placeholder shots — swap for real photography
// whenever it's available. Each list is duplicated when rendered so the
// vertical marquee loops seamlessly.
const GALLERY_UP = [
  { icon: <FaCouch />, label: "Living Room", tone: "charcoal" },
  { icon: <FaBed />, label: "Master Bedroom", tone: "gold" },
  { icon: <FaUtensils />, label: "Modular Kitchen", tone: "green" },
  { icon: <FaCloudSun />, label: "Balcony View", tone: "cream" },
];

const GALLERY_DOWN = [
  { icon: <FaChair />, label: "Dining Area", tone: "gold" },
  { icon: <FaLaptop />, label: "Home Office", tone: "charcoal" },
  { icon: <FaBath />, label: "Bathroom Suite", tone: "cream" },
  { icon: <FaTshirt />, label: "Walk-in Wardrobe", tone: "green" },
];

function GalleryColumn({ items, direction }) {
  // Render the set twice back-to-back; the track animates exactly -50%
  // of its own height, so the loop point is invisible.
  const doubled = [...items, ...items];

  return (
    <div className="hero__gallery-col">
      <div className={`hero__gallery-track hero__gallery-track--${direction}`}>
        {doubled.map((item, i) => (
          <div className="hero__gallery-tile" key={`${item.label}-${i}`}>
            <div className="hero__gallery-tile-inner">
              <PlaceholderImage icon={item.icon} label={item.label} tone={item.tone} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="top" className="hero" ref={ref}>
      <motion.div className="hero__bg" style={{ y: bgY }}>
        <div className="hero__glow hero__glow--gold" />
        <div className="hero__glow hero__glow--green" />
        <div className="hero__rings">
          <span />
          <span />
          <span />
        </div>
      </motion.div>

      <div className="hero__inner container">
        <motion.div
          className="hero__content"
          style={{ y: contentY, opacity: contentOpacity }}
        >
          <motion.img
            src={logo}
            alt="Expo Property Developers"
            className="hero__logo"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          />

          <motion.p
            className="hero__eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Expo Property Developers Presents
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            Expo Grand Apartment
          </motion.h1>

          <motion.p
            className="hero__tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            A grand address where refined architecture, lush landscapes and
            effortless living converge.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75 }}
          >
            <a href="#floor-plans" className="btn btn-gold">
              Explore Residences
            </a>
            <a href="#contact" className="btn btn-outline-light">
              Book a Visit
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__gallery"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
        >
          <GalleryColumn items={GALLERY_UP} direction="up" />
          <GalleryColumn items={GALLERY_DOWN} direction="down" />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="hero__scroll-cue"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        aria-label="Scroll to explore"
      >
        <span>Scroll to explore</span>
        <motion.span
          className="hero__scroll-icon"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <FaChevronDown />
        </motion.span>
      </motion.a>
    </section>
  );
}
