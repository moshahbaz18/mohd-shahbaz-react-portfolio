import React from "react";

const skills = [
  {
    title: "Frontend Developer",
    items: ["HTML5", "CSS3", "JavaScript"]
  },
  {
    title: "Frameworks",
    items: ["React.js", "Bootstrap", "Next.js", "Angular"]
  },
  {
    title: "Backend",
    items: ["Java", "Node.js", "Express.js", "Spring Boot", "JSON"]
  },
  {
    title: "Database",
    items: ["MySQL", "SQL Basics", "MongoDB"]
  },
  {
    title: "Tools",
    items: ["VS Code", "Git", "GitHub", "IDLE", "NetBeans"]
  },
  {
    title: "Other Skills",
    items: [
      "Canva",
      "PowerPoint",
      "Microsoft Office",
      "Testing Skills"
    ]
  }
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <p className="section-subtitle">
        MY TECHNICAL ABILITIES
      </p>

      <h2>
        My <span>Skills & Tools</span>
      </h2>

      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.title}>
            <h3>{skill.title}</h3>

            <div className="skill-list">
              {skill.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;