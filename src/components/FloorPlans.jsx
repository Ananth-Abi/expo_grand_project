import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GiHouse } from "react-icons/gi";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import PlaceholderImage from "./PlaceholderImage";
import "./FloorPlans.css";

const PLANS = [
  { id: "1bhk", tab: "1 BHK", name: "The Aster", size: "680 – 720", beds: 1, baths: 1, price: "Price on Request" },
  { id: "2bhk", tab: "2 BHK", name: "The Magnolia", size: "1,080 – 1,180", beds: 2, baths: 2, price: "Price on Request" },
  { id: "3bhk", tab: "3 BHK", name: "The Sequoia", size: "1,540 – 1,680", beds: 3, baths: 3, price: "Price on Request" },
  { id: "penthouse", tab: "Penthouse", name: "The Grand Crown", size: "2,600 – 3,100", beds: 4, baths: 5, price: "Price on Request" },
];

export default function FloorPlans() {
  const [active, setActive] = useState(PLANS[1].id);
  const plan = PLANS.find((p) => p.id === active);

  return (
    <section id="floor-plans" className="section floor-plans">
      <div className="container">
        <div className="section-header center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>
            Floor Plans
          </p>
          <h2 className="section-title">Residences to fit every life stage</h2>
          <p className="section-sub">
            From efficient one-bedrooms to sky-top penthouses, each layout is
            planned for natural light, cross ventilation and generous decks.
          </p>
        </div>

        <div className="floor-plans__tabs">
          {PLANS.map((p) => (
            <button
              key={p.id}
              className={`floor-plans__tab ${active === p.id ? "is-active" : ""}`}
              onClick={() => setActive(p.id)}
            >
              {p.tab}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={plan.id}
            className="floor-plans__card"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <div className="floor-plans__media">
              <PlaceholderImage icon={<GiHouse />} label={`${plan.tab} Layout`} tone="cream" />
            </div>
            <div className="floor-plans__info">
              <h3>{plan.name}</h3>
              <p className="floor-plans__type">{plan.tab} Residence</p>

              <div className="floor-plans__specs">
                <div>
                  <FaRulerCombined />
                  <span>{plan.size} sq.ft</span>
                </div>
                <div>
                  <FaBed />
                  <span>{plan.beds} Bed{plan.beds > 1 ? "s" : ""}</span>
                </div>
                <div>
                  <FaBath />
                  <span>{plan.baths} Bath{plan.baths > 1 ? "s" : ""}</span>
                </div>
              </div>

              <p className="floor-plans__price">{plan.price}</p>

              <a href="#contact" className="btn btn-gold">
                Enquire Now
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
