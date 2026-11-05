import React from "react";
import { GraduationCap, MapPin, BriefcaseBusiness } from "lucide-react";

export default function About() {
  return (
    <section className="section-wrap content-section" id="about">
      <div className="section-heading"><p className="eyebrow">A LITTLE INTRODUCTION</p><h2>About <span>Me</span></h2></div>
      <div className="about-grid">
        <div className="about-copy">
          <p className="lead">I'm Mohd Shabaz, a passionate Full Stack Developer who enjoys creating useful and engaging web applications.</p>
          <p>I have knowledge of Java, React.js, JavaScript and MySQL. I like solving problems, learning new technologies and improving my development skills through practical projects.</p>
          <p>I completed my Bachelor of Computer Application (BCA) from Integral University, Lucknow. I am looking forward to opportunities where I can contribute, learn and grow as a developer.</p>
        </div>
        <div className="about-facts">
          <div className="fact-card"><span className="fact-icon"><BriefcaseBusiness /></span><div><small>ROLE</small><strong>Full Stack Developer</strong></div></div>
          <div className="fact-card"><span className="fact-icon"><GraduationCap /></span><div><small>EDUCATION</small><strong>Bachelor of Computer Application</strong></div></div>
          <div className="fact-card"><span className="fact-icon"><MapPin /></span><div><small>LOCATION</small><strong>India</strong></div></div>
        </div>
      </div>
    </section>
  );
}