import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/expo_grand_logo.png";
import "./Navbar.css";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#amenities", label: "Amenities" },
  { href: "#floor-plans", label: "Floor Plans" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar--solid" : ""}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__brand">
          <img src={logo} alt="Expo Property Developers" />
          <span>
            Expo <strong>Grand</strong>
          </span>
        </a>

        <nav className="navbar__links navbar__links--desktop">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn-gold navbar__cta">
          Book a Visit
        </a>

        <button
          className={`navbar__toggle ${open ? "is-open" : ""}`}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="navbar__mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={handleLinkClick}>
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn btn-gold" onClick={handleLinkClick}>
              Book a Visit
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
