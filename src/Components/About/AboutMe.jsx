import profile from "../../assets/Profile.jpg";
function AboutMe() {
  return (
    <div data-aos="fade-down" data-aos-duration="1000">
      <div className="about--me">
        <img src={profile} style={{ width: "12rem" }} />
        <div>
          <h2>About Me</h2>
          <p>
            Software Development student with alifelong passion for graphic
            design. Self-taught and highly adaptable, I bring a unique mix of
            technical skills and creative flair. Committed to innovation and
            ready to contribute to the interdiv of designand technology.
          </p>
          <button className="btn--green">Show CV</button>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
