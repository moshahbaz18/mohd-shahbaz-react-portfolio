import React from "react";
import { ArrowUpRight, Github, Gamepad2 } from "lucide-react";

export default function Projects() {
  return (
    <section className="section-wrap content-section" id="projects">
      <div className="section-heading"><p className="eyebrow">SELECTED WORK</p><h2>Featured <span>Project</span></h2><p className="section-intro">A look at one of the projects I've worked on.</p></div>
      <article className="project-card">
        <div className="project-art">
          <img className="project-preview" src="/memoryflip-preview.svg" loading="lazy" alt="Illustration of the MemoryFlip card matching game" />
          <span className="project-art-label"><Gamepad2 size={15} /> JAVA GAME</span>
        </div>
        <div className="project-info">
          <p className="project-number">01 / FEATURED PROJECT</p>
          <h3>MemoryFlip</h3>
          <p>A Java-based memory card matching game. Players flip cards, find matching pairs and improve their memory skills. Built with an object-oriented approach and Maven project structure.</p>
          <div className="skill-tags"><span>Java</span><span>Maven</span><span>OOP</span></div>
          <a className="text-link" href="https://github.com/moshahbaz18/MemoryFlip" target="_blank" rel="noreferrer">View on GitHub <ArrowUpRight size={16} /></a>
        </div>
      </article>
    </section>
  );
}