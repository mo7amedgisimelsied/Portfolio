import ReactPlayer from "react-player";

function Motion() {
  return (
    <section className="motion">
      <h2>Video Editing And Motion Graphic</h2>
      <div className="video">
        <ReactPlayer
          url="https://youtube.com/shorts/T2l2xUrRlr0?feature=share"
          className="vid"
        />
      </div>
    </section>
  );
}

export default Motion;
