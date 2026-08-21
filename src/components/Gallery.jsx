import { motion } from "framer-motion";
import PlaceholderImage from "./PlaceholderImage";
import "./Gallery.css";

const IMAGES = [
  { label: "Grand Entrance Lobby", tone: "charcoal", span: "wide" },
  { label: "Infinity Pool Deck", tone: "gold" },
  { label: "Landscaped Courtyard", tone: "green" },
  { label: "Signature Living Room", tone: "cream" },
  { label: "Rooftop Lounge", tone: "gold", span: "wide" },
  { label: "Fitness Studio", tone: "charcoal" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <div className="section-header center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            Gallery
          </p>
          <h2 className="section-title">A glimpse inside Expo Grand</h2>
          <p className="section-sub">
            Spaces designed to feel considered from every angle — a preview
            of the finishes and moments that await residents.
          </p>
        </div>

        <div className="gallery__grid">
          {IMAGES.map((img, i) => (
            <motion.div
              key={img.label}
              className={`gallery__item ${img.span === "wide" ? "gallery__item--wide" : ""}`}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: "easeOut" }}
            >
              <PlaceholderImage label={img.label} tone={img.tone} />
              <div className="gallery__overlay">
                <span>{img.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
