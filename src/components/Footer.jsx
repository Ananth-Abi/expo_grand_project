import logo from "../assets/expo_grand_logo.png";
import "./Footer.css";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#amenities", label: "Amenities" },
  { href: "#floor-plans", label: "Floor Plans" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src={logo} alt="Expo Property Developers" />
          <div>
            <p>
              Expo <strong>Grand</strong> Apartment
            </p>
            <span>by Expo Property Developers</span>
          </div>
        </div>

        <nav className="footer__links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <p className="footer__copy">
          © {new Date().getFullYear()} Expo Property Developers. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
