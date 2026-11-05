
import React, {
  Suspense,
  lazy,
  useEffect,
  useRef,
  useState
} from "react";

import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  Sparkles
} from "lucide-react";

const About = lazy(() => import("./sections/About.jsx"));
const Skills = lazy(() => import("./sections/Skills.jsx"));
const Projects = lazy(() => import("./sections/Projects.jsx"));
const Resume = lazy(() => import("./sections/Resume.jsx"));
const Contact = lazy(() => import("./sections/Contact.jsx"));

const links = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Resume", "resume"],
  ["Contact", "contact"]
];

function SectionLoader() {
  return (
    <div className="section-loader" aria-label="Loading section">
      <span />
    </div>
  );
}

function DeferredSection({ component: Component }) {
  const host = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (!host.current || shouldLoad) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "180px" }
    );

    observer.observe(host.current);

    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div ref={host}>
      {shouldLoad ? (
        <Suspense fallback={<SectionLoader />}>
          <Component />
        </Suspense>
      ) : (
        <SectionLoader />
      )}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* HEADER */}
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu}>
          MS<span>.</span>
        </a>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav
          className={menuOpen ? "nav nav-open" : "nav"}
          aria-label="Main navigation"
        >
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>
              {label}
            </a>
          ))}

          <a
            className="nav-cta"
            href="#contact"
            onClick={closeMenu}
          >
            Let's talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        {/* HOME / HERO SECTION */}
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              AVAILABLE FOR OPPORTUNITIES
            </div>

            <p className="hero-kicker">HELLO, I'M</p>

            <h1>
              Mohd <span>Shabaz.</span>
            </h1>

            <h2>Full Stack Developer</h2>

            <p className="hero-description">
              I build clean, responsive and user-friendly web
              experiences with React, JavaScript and Java.
              I enjoy turning ideas into practical digital products.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowUpRight size={17} />
              </a>

              <a className="button button-quiet" href="#contact">
                Get in touch <Mail size={16} />
              </a>
            </div>

            {/* SOCIAL LINKS */}
            <div className="social-row">
              <a
                href="https://github.com/moshahbaz18"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github size={19} />
              </a>

              <a
                href="https://linkedin.com/in/mohd-shabaz-879a482b1"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={19} />
              </a>

              <a
                href="mailto:mshahabaz376@gmail.com"
                aria-label="Email"
              >
                <Mail size={19} />
              </a>
            </div>
          </div>

          {/* CIRCULAR PROFILE PHOTO */}
          <div className="hero-visual">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="hero-glow" />

            <div className="profile-frame">
              <img
                src="/profile.jpeg"
                alt="Mohd Shabaz - Full Stack Developer"
                className="profile-photo"
                loading="eager"
              />
            </div>

            {/* FLOATING TECHNOLOGY TAGS */}
            <div className="floating-tag tag-react">
              ⚛ React.js
            </div>

            <div className="floating-tag tag-java">
              ☕ Java
            </div>

            {/* HERO STAMP */}
            <div className="hero-stamp">
              <Sparkles size={15} />
              BUILD • LEARN • CREATE
            </div>
          </div>

          <a className="scroll-cue" href="#about">
            <ArrowDown size={15} />
            SCROLL TO EXPLORE
          </a>
        </section>

        {/* OTHER PORTFOLIO SECTIONS */}
        <DeferredSection component={About} />
        <DeferredSection component={Skills} />
        <DeferredSection component={Projects} />
        <DeferredSection component={Resume} />
        <DeferredSection component={Contact} />
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a className="brand" href="#home">
          MS<span>.</span>
        </a>

        <p>
          Designed & built by <strong>Mohd Shabaz</strong>
        </p>

        <p>
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </footer>
    </>
  );
}