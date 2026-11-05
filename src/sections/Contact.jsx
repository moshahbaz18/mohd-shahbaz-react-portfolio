
import React from "react";
import { Mail, Phone, Github, Linkedin, ArrowUpRight } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "mshahabaz376@gmail.com",
    href: "mailto:mshahabaz376@gmail.com"
  },
  {
    icon: Phone,
    label: "PHONE",
    value: "+91 7607140230",
    href: "tel:+917607140230"
  },
  {
    icon: Github,
    label: "GITHUB",
    value: "github.com/moshahbaz18",
    href: "https://github.com/moshahbaz18"
  },
  {
    icon: Linkedin,
    label: "LINKEDIN",
    value: "Open LinkedIn",
    href: "https://linkedin.com/in/mohd-shabaz-879a482b1"
  }
];

export default function Contact() {
  return (
    <section
      className="section-wrap content-section contact-section"
      id="contact"
    >
      <div className="section-heading">
        <p className="eyebrow">LET'S CONNECT</p>
        <h2>Get in <span>Touch</span></h2>
        <p className="section-intro">
          Have an opportunity or want to discuss a project?
          Feel free to reach out.
        </p>
      </div>

      <div className="contact-grid">
        {contactItems.map(({ icon: Icon, label, value, href }) => (
          <a
            className="contact-card"
            href={href}
            key={label}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
          >
            <span className="fact-icon">
              <Icon size={20} />
            </span>

            <span>
              <small>{label}</small>
              <strong>{value}</strong>
            </span>

            <ArrowUpRight className="contact-arrow" size={17} />
          </a>
        ))}
      </div>

      <div className="contact-note">
        <span className="status-dot" />
        Open to learning, collaboration and suitable opportunities.
      </div>
    </section>
  );
}
