import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import "./Testimonials.css";

const TESTIMONIALS = [
  {
    quote:
      "Moving into Expo Grand felt like an upgrade in every sense — the finishes, the grounds, the quiet. It's the calmest address I've lived at.",
    name: "A. Sharma",
    role: "Resident, The Magnolia — 2 BHK",
  },
  {
    quote:
      "The amenities alone would justify the move, but it's the little details — the lighting, the landscaping — that make it feel genuinely premium.",
    name: "R. Fernandes",
    role: "Resident, The Sequoia — 3 BHK",
  },
  {
    quote:
      "From site visit to handover, Expo Property Developers were transparent at every step. The apartment matched the promise exactly.",
    name: "K. Iyer",
    role: "Resident, The Grand Crown — Penthouse",
  },
];

const initials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("");

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <div className="section-header center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            Testimonials
          </p>
          <h2 className="section-title">What our residents say</h2>
          <p className="section-sub">
            Real words from the people who call Expo Grand home.
          </p>
        </div>

        <div className="testimonials__grid">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
            >
              <FaQuoteLeft className="testimonial-card__quote-icon" />
              <div className="testimonial-card__stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <FaStar key={s} />
                ))}
              </div>
              <p className="testimonial-card__text">{t.quote}</p>
              <div className="testimonial-card__author">
                <span className="testimonial-card__avatar">{initials(t.name)}</span>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
