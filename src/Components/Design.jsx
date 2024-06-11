function Design(){

    const imgUrl = [
        "https://mostaql.hsoubcdn.com/uploads/portfolios/1800004/637cb179e0498/4.jpg",
        "https://mostaql.hsoubcdn.com/uploads/portfolios/1800004/637cb178a414b/2.png",
        "https://mostaql.hsoubcdn.com/uploads/portfolios/1800004/637cb1793518c/1.png",
        "https://mostaql.hsoubcdn.com/uploads/portfolios/1800004/65021e38efd7d/poster-2.png",
        "https://picsum.photos/140/140",
        "https://picsum.photos/140/140",
        "https://picsum.photos/140/140",
        "https://picsum.photos/140/140",
        "https://picsum.photos/140/140",]


    return(
        <section className="poster--container" data-aos = "fade-up">
        <h2>Social Media Poster Design</h2>
        <div className="posters--list">
            
        {imgUrl.map(imgurl => <div className="grid--img" data-aos = "fade-up"><img src={imgurl}/></div>)}
        
        </div>
        <button className="btn--green" data-aos = "fade-up">See More</button>
        </section>
    );
}

export default Design