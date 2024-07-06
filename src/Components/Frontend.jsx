import banner from "../assets/Group 50.png";
import quizzati from "../assets/Quizzati.png";
import mashaheer from "../assets/mashaheer.png";
import pollos from "../assets/pollos.png";
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
              Quizzati is a React-based website designed to assist students of
              IU with practice questions derived from their coursebooks. The
              primary goal of this project is to help students prepare for their
              exams by providing much-needed resources, especially in areas
              where resources are limited.
            </p>
            <button className="btn--green">Show Project</button>
          </div>
        </div>

        <div className="project" data-aos="fade-right">
          <div className="project--info">
            <h3>Mashaheer</h3>
            <p>
              Mashaheer, a digital twist on the classic game "Guess Who?" with a
              celebrity spin. This project is a web-based game where players
              engage in a battle of wits against the computer, using a series of
              questions to deduce the identity of a hidden celebrity.
            </p>
            <button className="btn--green">Show Project</button>
          </div>
          <img src={mashaheer} data-aos="fade-left" />
        </div>

        <div className="project">
          <img src={pollos} data-aos="fade-right" />
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
