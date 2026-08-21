import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend wired up yet — replace with your API / form service.
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact__grid">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="eyebrow">Get In Touch</p>
          <h2 className="section-title">Book a private site visit</h2>
          <p className="section-sub" style={{ marginBottom: 36 }}>
            Speak with our sales team to schedule a walkthrough, request the
            full brochure, or ask about current availability.
          </p>

          <div className="contact__info">
            <div>
              <span className="contact__info-icon"><FaPhoneAlt /></span>
              <div>
                <strong>Call Us</strong>
                <p>+1 (000) 000-0000</p>
              </div>
            </div>
            <div>
              <span className="contact__info-icon"><FaEnvelope /></span>
              <div>
                <strong>Email Us</strong>
                <p>sales@expograndapartment.com</p>
              </div>
            </div>
            <div>
              <span className="contact__info-icon"><FaMapMarkerAlt /></span>
              <div>
                <strong>Visit the Site Office</strong>
                <p>123 Grand Avenue, Expo District, your city</p>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </motion.div>

        <motion.form
          className="contact__form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="contact__form-row">
            <label>
              Full Name
              <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="Jane Doe" />
            </label>
            <label>
              Phone
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+1 000 000 0000" />
            </label>
          </div>
          <label>
            Email
            <input type="email" name="email" required value={form.email} onChange={handleChange} placeholder="jane@email.com" />
          </label>
          <label>
            Message
            <textarea name="message" rows="4" value={form.message} onChange={handleChange} placeholder="I'd like to schedule a visit for..." />
          </label>

          <button type="submit" className="btn btn-gold">
            Send Enquiry
          </button>

          {submitted && (
            <motion.p
              className="contact__success"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Thank you — our team will be in touch shortly.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
