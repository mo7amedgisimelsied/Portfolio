import banner from "../assets/Group 50.png";
import quizzati from "../assets/Quizzati.png";
import mashaheer from "../assets/mashaheer.png";
function Frontend() {
  return (
    <section style={{ marginTop: "5rem" }}>
      <div className="banner" data-aos="fade-up">
        <h2>Front-End Development</h2>
        <p>
          Crafting intuitive user experiences through innovative front-end
          design and development, showcasing a blend of creativity and technical
          expertise.
        </p>

        <div className="img--container">
          <img src={banner} />
        </div>
      </div>

      <div className="projects--container">
        <div className="project">
          <img src={quizzati} data-aos="fade-right" />
          <div className="project--info" data-aos="fade-left">
            <h3>Quizzati</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button className="btn--green">Show Project</button>
          </div>
        </div>

        <div className="project" data-aos="fade-right">
          <div className="project--info">
            <h3>Mashaheer</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button className="btn--green">Show Project</button>
          </div>
          <img src={mashaheer} data-aos="fade-left" />
        </div>

        <div className="project">
          <img src="https://picsum.photos/256/144" data-aos="fade-right" />
          <div className="project--info" data-aos="fade-left">
            <h3>Los Pollos Hermanos Website</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button className="btn--green">Show Project</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Frontend;
