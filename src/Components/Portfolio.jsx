import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
function Portfolilo(){

    useEffect(() => {
        AOS.init({duration: 1000})
    }, []);

    return(
        <section>
            <div className="portfolio">
            <h2 data-aos='fade-up' data-aos-duration="0">What I Do</h2>
            <div className="cards--container">
            {/* 3 Cards goes here */}
            <div className="card card--purple" data-aos='fade-up' data-aos-duration="500">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 26 26">
<path d="M 0.8125 0 C 0.371094 0 0 0.363281 0 0.8125 L 0 20.1875 C 0 20.636719 0.371094 21 0.8125 21 L 10 21 L 10 22 L 4.1875 22 L 1 26 L 25 26 L 21.8125 22 L 16 22 L 16 21 L 25.1875 21 C 25.628906 21 26 20.636719 26 20.1875 L 26 0.8125 C 26 0.363281 25.628906 0 25.1875 0 Z M 2.84375 2 L 23.15625 2 C 23.628906 2 24 2.351563 24 2.78125 L 24 18.21875 C 24 18.648438 23.628906 19 23.15625 19 L 2.84375 19 C 2.371094 19 2 18.648438 2 18.21875 L 2 2.78125 C 2 2.351563 2.371094 2 2.84375 2 Z M 9.375 5.125 L 4 10.5 L 9.375 15.875 L 10.8125 14.4375 L 6.875 10.5 L 10.8125 6.5625 Z M 16.625 5.125 L 15.1875 6.5625 L 19.125 10.5 L 15.1875 14.4375 L 16.625 15.875 L 22 10.5 Z"></path>
</svg>
            <h3>Front-End<br/>Development</h3>
            <p>I create beautiful and responsive websites using HTML, CSS, and JavaScript. I have experience with various frameworks and libraries, such as React, Bootstrap, and jQuery. I enjoy making the web more accessible and user-friendly.</p>
            <button className="btn--white">See Portfolio</button>
            </div>
            
            <div className="card card--blue" data-aos='fade-up' data-aos-duration="1000">
<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
  <path d="m21,9.24l3-3v12.76h-10.5v2h4v3H6.5v-3h4v-2H0V5.5c0-1.93,1.57-3.5,3.5-3.5h12.539l-2.684,3H3.5c-.276,0-.5.225-.5.5v10.5h18v-6.76Zm-12.5,4.76h5c1.657,0,3-1.343,3-3s-1.343-3-3-3c-4,0-5,6-5,6Zm9.666-4.754l5.126-5.126c.943-.942.945-2.47.003-3.413-.941-.942-2.467-.943-3.409-.002-.032.032-4.953,5.53-4.953,5.53,1.491.45,2.686,1.564,3.232,3.011Z"/>
</svg>

            <h3>Social Media Post<br/>Designing</h3>
            <p>I design eye-catching and engaging posters for social media platforms, such as Instagram, Facebook, and Twitter. I use tools like Photoshop, Illustrator, and Canva to create stunning graphics that convey your message and brand identity.</p>
            <button className="btn--white">See Portfolio</button>
            </div>

            <div className="card card--green" data-aos='fade-up' data-aos-duration="1500">

<svg xmlns="http://www.w3.org/2000/svg" id="slidesgo" viewBox="0 0 24 24"><g id="Group"><path id="Path" d="M22.53,2.5L7.84,.08h-.16c-.48,0-.87,.36-.87,.87v1.15l13.38,2.19c.95,.16,1.67,.99,1.67,1.99v11.49l1.11,.2h.16c.48,0,.87-.36,.87-.87V4.21c-.04-.87-.64-1.59-1.47-1.71Z"/><path id="Path-2" data-name="Path" d="M19.18,5.53L4.45,3.1h-.16c-.48,0-.87,.36-.87,.87v1.19l13.26,2.19c.95,.16,1.67,.99,1.67,1.99v11.52l1.11,.2h.16c.48,0,.87-.36,.87-.87V7.08c0-.76-.56-1.43-1.31-1.55Z"/><path id="Shape" d="M15.72,8.43L1.03,6h-.16c-.48,0-.87,.36-.87,.87v13.35c0,.6,.44,1.11,1.03,1.19l15.05,2.5h.16c.48,0,.87-.36,.87-.87V10.06c-.04-.8-.6-1.47-1.39-1.63ZM6.64,17.61c0,.28-.36,.4-.56,.2l-3.59-3.3c-.2-.16-.2-.48,0-.56l3.59-2.07c.24-.12,.56,.08,.56,.4v5.33Zm7.52-1.19l-3.58,2.15c-.24,.16-.56-.08-.56-.4v-5.37c0-.28,.32-.4,.56-.2l3.59,3.22c.19,.2,.19,.48,0,.6Z"/></g></svg>

            <h3>Video editing and motion graphics</h3>
            <p>I edit and produce high-quality videos and animations for various purposes, such as YouTube, TikTok, and online courses. I use tools like Premiere Pro, After Effects, and Blender to create captivating and dynamic visuals that tell your story.</p>
            <button className="btn--white">See Portfolio</button>
            </div>


            </div>
            </div>
        
        </section>
    );
}

export default Portfolilo