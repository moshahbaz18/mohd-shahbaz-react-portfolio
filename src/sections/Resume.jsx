
import React from "react";
import {
  Download,
  ExternalLink,
  Award,
  GraduationCap
} from "lucide-react";

const certifications = [
  [
    "Masters in Full Stack Developer with Java",
    "Vedant Education Pvt. Ltd.",
    "January 2026"
  ],
  [
    "IBM Java for Data Science",
    "IBM Developer Skills Network",
    "February 2026"
  ],
  [
    "IBM Machine Learning with Java",
    "IBM Developer Skills Network",
    "December 2025"
  ]
];

export default function Resume() {
  return (
    <section
      className="section-wrap content-section section-alt"
      id="resume"
    >
      <div className="section-heading">
        <p className="eyebrow">MY BACKGROUND</p>
        <h2>
          Resume & <span>Education</span>
        </h2>
      </div>

      <div className="resume-grid">

        {/* EDUCATION */}
        <div className="resume-panel">
          <span className="large-icon">
            <GraduationCap size={27} />
          </span>

          <p className="eyebrow">EDUCATION</p>

          <h3>Bachelor of Computer Application</h3>
          <p>Integral University, Lucknow</p>

          <span className="resume-meta">
            2022 – 2025 · CGPA: 6.10
          </span>

          <div className="education-list">
            <div>
              <strong>Higher Secondary Certificate (12th)</strong>
              <span>
                S.N.I.C. Indaipur, Ambedkar Nagar ·
                2019–2020 · 67.6%
              </span>
            </div>

            <div>
              <strong>Secondary School Certificate (10th)</strong>
              <span>
                S.N.I.C. Indaipur, Ambedkar Nagar ·
                2017–2018 · 56.6%
              </span>
            </div>
          </div>
        </div>

        {/* CERTIFICATIONS */}
        <div className="resume-panel">
          <span className="large-icon">
            <Award size={27} />
          </span>

          <p className="eyebrow">CERTIFICATIONS</p>

          <div className="cert-list">
            {certifications.map(([name, org, date]) => (
              <div className="cert-item" key={name}>
                <strong>{name}</strong>
                <span>{org}</span>
                <small>{date}</small>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* RESUME DOWNLOAD */}
      <div className="resume-download">
        <div>
          <p className="eyebrow">WANT THE DETAILS?</p>
          <h3>My Professional Resume</h3>
          <p>
            Explore my qualifications, technical skills,
            projects and professional background.
          </p>
        </div>

        <div className="resume-actions">
          <a
            className="button button-primary"
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <ExternalLink size={16} />
            View Resume
          </a>

          <a
            className="button button-quiet"
            href="/resume.pdf"
            download="Mohd-Shahbaz-Resume.pdf"
          >
            <Download size={16} />
            Download PDF
          </a>
        </div>
      </div>

    </section>
  );
}
