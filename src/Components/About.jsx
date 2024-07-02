import { useState } from "react";
import AboutMe from "./About/AboutMe";
import Certification from "./About/Certification";
import Education from "./About/Education";
import "../media-queries.css";

function About() {
  const [tab, setTab] = useState([<AboutMe />, 1]);

  return (
    <section className="cv">
      <div className="tabs--buttons">
        <button
          onClick={() => setTab([<AboutMe />, 1])}
          className="btn--tab"
          style={{ borderBottom: tab[1] === 1 ? "white solid 1px" : "none" }}
        >
          About Me
        </button>
        <button
          onClick={() => setTab([<Education />, 2])}
          className="btn--tab"
          style={{ borderBottom: tab[1] === 2 ? "white solid 1px" : "none" }}
        >
          Education
        </button>
        <button
          onClick={() => setTab([<Certification />, 3])}
          className="btn--tab"
          style={{ borderBottom: tab[1] === 3 ? "white solid 1px" : "none" }}
        >
          Certification
        </button>
      </div>
      <div className="current--tab">{tab[0]}</div>
    </section>
  );
}

export default About;
