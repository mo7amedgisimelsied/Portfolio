function Contacts() {
  return (
    <section>
      <div className="contact-container">
        <div className="contact-form" data-aos="fade-right">
          <form>
            <p>Contact Me</p>
            <h2>Get In Touch</h2>
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Your Name..." id="name" />

            <label>Email</label>
            <input type="email" placeholder="example@yourmail.com" />

            <label>Subject</label>
            <input type="text" placeholder="Title.." />

            <label>Message</label>
            <textarea placeholder="Type Here..."></textarea>
            <button onClick={(e) => e.preventDefault()}>Send Now</button>
          </form>
        </div>

        <div className="contact--links" data-aos="fade-up">
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            corrupti ratione fuga voluptatem optio nihil illum sunt, maiores at
            neque!
          </p>

          <div className="row">
            <div className="phone">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="512"
                height="512"
              >
                <path d="M13,1a1,1,0,0,1,1-1A10.011,10.011,0,0,1,24,10a1,1,0,0,1-2,0,8.009,8.009,0,0,0-8-8A1,1,0,0,1,13,1Zm1,5a4,4,0,0,1,4,4,1,1,0,0,0,2,0,6.006,6.006,0,0,0-6-6,1,1,0,0,0,0,2Zm9.093,10.739a3.1,3.1,0,0,1,0,4.378l-.91,1.049c-8.19,7.841-28.12-12.084-20.4-20.3l1.15-1A3.081,3.081,0,0,1,7.26.906c.031.031,1.884,2.438,1.884,2.438a3.1,3.1,0,0,1-.007,4.282L7.979,9.082a12.781,12.781,0,0,0,6.931,6.945l1.465-1.165a3.1,3.1,0,0,1,4.281-.006S23.062,16.708,23.093,16.739Zm-1.376,1.454s-2.393-1.841-2.424-1.872a1.1,1.1,0,0,0-1.549,0c-.027.028-2.044,1.635-2.044,1.635a1,1,0,0,1-.979.152A15.009,15.009,0,0,1,5.9,9.3a1,1,0,0,1,.145-1S7.652,6.282,7.679,6.256a1.1,1.1,0,0,0,0-1.549c-.031-.03-1.872-2.425-1.872-2.425a1.1,1.1,0,0,0-1.51.039l-1.15,1C-2.495,10.105,14.776,26.418,20.721,20.8l.911-1.05A1.121,1.121,0,0,0,21.717,18.193Z" />
              </svg>
              <div className="text-2">
                <h3>Phone Number</h3>
                <p>+971 562 932 271</p>
              </div>
            </div>

            <div className="email">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="Outline"
                viewBox="0 0 24 24"
                width="512"
                height="512"
              >
                <path d="M19,1H5A5.006,5.006,0,0,0,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6A5.006,5.006,0,0,0,19,1ZM5,3H19a3,3,0,0,1,2.78,1.887l-7.658,7.659a3.007,3.007,0,0,1-4.244,0L2.22,4.887A3,3,0,0,1,5,3ZM19,21H5a3,3,0,0,1-3-3V7.5L8.464,13.96a5.007,5.007,0,0,0,7.072,0L22,7.5V18A3,3,0,0,1,19,21Z" />
              </svg>
              <div className="text-2">
                <h3>Email Address</h3>
                <p
                  style={{
                    fontSize: "0.8rem",
                    overflowWrap: "break-word",
                    wordWrap: "break-word",
                  }}
                >
                  mohamedgisimelsied@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;
