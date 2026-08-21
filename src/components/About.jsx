import { motion } from "framer-motion";
import { GiTreeBranch } from "react-icons/gi";
import PlaceholderImage from "./PlaceholderImage";
import "./About.css";

const STATS = [
  { value: "240+", label: "Grand Residences" },
  { value: "6.5", label: "Landscaped Acres" },
  { value: "18", label: "Signature Amenities" },
  { value: "2026", label: "Possession Year" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <motion.div
          className="about__media"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="about__media-main">
            <PlaceholderImage icon={<GiTreeBranch />} label="Expo Grand Exteriors" tone="charcoal" />
          </div>
          <div className="about__media-accent">
            <PlaceholderImage label="Landscaped Courtyard" tone="green" />
          </div>
          <div className="about__ring" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.p className="eyebrow" variants={fadeUp}>
            About the Residence
          </motion.p>
          <motion.h2 className="section-title" variants={fadeUp}>
            Where thoughtful design meets grand living
          </motion.h2>
          <motion.p className="section-sub" variants={fadeUp} style={{ marginBottom: 22 }}>
            Expo Grand Apartment is the flagship residential development by{" "}
            <strong>Expo Property Developers</strong> — conceived for those who
            expect more from home. Every residence is planned around light,
            air and space, wrapped in landscaped grounds and finished with an
            uncompromising eye for detail.
          </motion.p>
          <motion.p className="section-sub" variants={fadeUp} style={{ marginBottom: 36 }}>
            From the sculpted entrance courtyard to the rooftop deck, the
            development is built as a continuous experience — one that
            unfolds gracefully as you move through it, day and night.
          </motion.p>

          <motion.div className="about__stats" variants={fadeUp}>
            {STATS.map((stat) => (
              <div className="about__stat" key={stat.label}>
                <span className="about__stat-value">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
