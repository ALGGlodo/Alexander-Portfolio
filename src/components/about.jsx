import "./about.css";
import { Medal } from "lucide-react";


function About() {
    return(
        <section className="about">
            <div className="about-info">
                <h2 className="about-me-title">Get to know me.</h2>
                <p className="narrative">
                    Alex here! I like building things that actually work, not just things that look good in a screenshot. I think that instinct comes from QA as much as it does from writing code. I enjoy the moment something breaks, and figuring out why. I'm still early in this. Still learning, still shipping small things, still figuring out exactly what kind of developer I want to become. But every project teaches me something I didn't already know, and that's the part that keeps me building.
                </p>
                <div className="glassy-box">
                    <div className="box">
                        <p className="project">Project</p>
                        <span>6</span>
                    </div>
                    <div className="box">
                        <p className="project">School</p>
                        <span>Centro Escolar University</span>
                    </div>
                    <div className="box">
                        <p className="project">Degree</p>
                        <span>BS Information Technology</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About