import ReactPlayer from 'react-player'

function Motion(){


    return(
        <section className="motion">
        <h2>Video Editing And Motion Graphic</h2>
        <div className='video'>
        <ReactPlayer url='https://youtu.be/MNHgu_vgXm0?si=FNUhLhb_Xl0ZXxmm' className= 'vid'/>
        </div>
        </section>
    );
}

export default Motion