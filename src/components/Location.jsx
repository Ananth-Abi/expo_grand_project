import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPlane, FaSubway, FaShoppingBag, FaHospital, FaSchool } from "react-icons/fa";
import "./Location.css";

const LANDMARKS = [
  { icon: <FaSubway />, label: "Metro Station", distance: "1.2 km" },
  { icon: <FaShoppingBag />, label: "City Mall", distance: "2.5 km" },
  { icon: <FaHospital />, label: "Multi-speciality Hospital", distance: "3 km" },
  { icon: <FaSchool />, label: "International School", distance: "1.8 km" },
  { icon: <FaPlane />, label: "International Airport", distance: "22 km" },
];

export default function Location() {
  return (
    <section id="location" className="section location">
      <div className="container location__grid">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="eyebrow">Location</p>
          <h2 className="section-title">Connected to everything that matters</h2>
          <p className="section-sub" style={{ marginBottom: 34 }}>
            Set within an emerging growth corridor, Expo Grand keeps
            transit, retail, healthcare and schooling within easy reach —
            without giving up the calm of a landscaped, low-density address.
          </p>

          <div className="location__address">
            <FaMapMarkerAlt />
            <span>123 Grand Avenue, Expo District — your city, 000 000</span>
          </div>

          <ul className="location__list">
            {LANDMARKS.map((item) => (
              <li key={item.label}>
                <span className="location__list-icon">{item.icon}</span>
                <span className="location__list-label">{item.label}</span>
                <span className="location__list-distance">{item.distance}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          className="location__map"
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="location__map-rings">
            <span />
            <span />
            <span />
            <div className="location__pin">
              <FaMapMarkerAlt />
            </div>
          </div>
          <p>Interactive map available on request — replace with a live embed anytime.</p>
        </motion.div>
      </div>
    </section>
  );
}
