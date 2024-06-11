function TechSkills(){

    const arr = ["Adobe Photoshop", "Blender", "CSS", "HTML", "JavaScript", "React.js",]
    return(
        <section>
            <div className="tech--container" data-aos = "fade-up">
            <h2>Technical Skills</h2>
            <div className="tech--skills">
                {arr.map(skill => <div className="skill" >{skill}</div>)}
                
            </div>
            </div>
        </section>
    );
}

export default TechSkills