function TechSkills() {
  const arr = [
    "CSS",
    "HTML5",
    "JavaScript",
    "React.js",
    "VS Code",
    "IntelliJ IDE",
    "Bootstrap",
    "Spring Boot",
    "Agile",
    "MYSQL",
    "Figma",
    "Microsoft Office Suite",
    "NPM",
    "GitHub",
    "Adobe Photoshop",
    "Blender",
  ];
  return (
    <section>
      <div className="tech--container" data-aos="fade-up">
        <h2>Technical Skills</h2>
        <div className="tech--skills">
          {arr.map((skill) => (
            <div className="skill">{skill}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechSkills;
