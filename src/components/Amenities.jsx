import { motion } from "framer-motion";
import {
  GiSwimfins,
  GiWeightLiftingUp,
  GiFamilyHouse,
  GiTreeBranch,
  GiCarKey,
  GiKidSlide,
  GiPowerGenerator,
  GiCctvCamera,
} from "react-icons/gi";
import "./Amenities.css";

const AMENITIES = [
  { icon: <GiSwimfins />, title: "Infinity Pool", desc: "A resort-style deck for morning laps and evening unwinding." },
  { icon: <GiWeightLiftingUp />, title: "Fitness Studio", desc: "Fully equipped gym with dedicated yoga & wellness zone." },
  { icon: <GiFamilyHouse />, title: "Grand Clubhouse", desc: "Lounge, banquet hall and co-working spaces under one roof." },
  { icon: <GiTreeBranch />, title: "Landscaped Gardens", desc: "6.5 acres of curated greens, walking trails and courtyards." },
  { icon: <GiCarKey />, title: "Covered Parking", desc: "Ample secure parking with EV charging points." },
  { icon: <GiKidSlide />, title: "Kids' Play Area", desc: "Safe, shaded play zones designed for younger residents." },
  { icon: <GiPowerGenerator />, title: "100% Power Backup", desc: "Uninterrupted backup across residences and common areas." },
  { icon: <GiCctvCamera />, title: "24/7 Security", desc: "Multi-tier security with CCTV surveillance and smart access." },
];

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Amenities() {
  return (
    <section id="amenities" className="section amenities">
      <div className="container">
        <div className="section-header center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            Signature Amenities
          </p>
          <h2 className="section-title">Everything grand living calls for</h2>
          <p className="section-sub">
            Eighteen curated amenities designed around comfort, wellness and
            community — all within the gates of Expo Grand.
          </p>
        </div>

        <motion.div
          className="amenities__grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {AMENITIES.map((item) => (
            <motion.div className="amenity-card" key={item.title} variants={cardVariants}>
              <span className="amenity-card__icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
