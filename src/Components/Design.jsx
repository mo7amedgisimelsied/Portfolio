import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.jpg";
import four from "../assets/4.png";
import five from "../assets/5.png";
import six from "../assets/6.png";
import seven from "../assets/7.png";
import eight from "../assets/8.png";
import nine from "../assets/9.png";
function Design() {
  const imgUrl = [one, two, three, four, five, six, seven, eight, nine];

  return (
    <section className="poster--container">
      <h2>Social Media Poster Design</h2>
      <div className="posters--list">
        {imgUrl.map((imgurl) => (
          <div className="grid--img" data-aos="fade-up">
            <img src={imgurl} />
          </div>
        ))}
      </div>
      <button className="btn--green" data-aos="fade-up">
        See More
      </button>
    </section>
  );
}

export default Design;
