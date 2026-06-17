import { faculty } from "../data/facultyData";

function About() {
    return (
        <section id="about" className="about">
            <div className="about-container">
                {/* Biography */}
                <div className="about-bio">
                    <h2>About</h2>
                    <p>
                        {faculty.bio || "Details will be updated from data/faculty.js"}
                    </p>
                </div>

                {/* Education */}
                <div className="about-edu">
                    <h2>Education</h2>
                    {faculty.education.length > 0 ? (
                        <div>
                            {faculty.education.map((edu, index)=>(
                                <div className="timeline-item" key={index}>
                                    <div className="timeline-dot"></div>
                                    <h4>{edu.year}</h4>
                                    <div className="timeline-content">
                                        <h4>{edu.degree}</h4>
                                        <p>{edu.institute}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>Details will be updated from data/facultyData.js</p>
                    )}
                </div>

                {/* Experience */}
                <div className="about-experience">
                    <h2>Experiences</h2>
                    <h3>Administrative Experiences</h3>
                    <div className="admExp-container">
                        <div className="deptexp">
                            <h4>Departmental Level</h4>
                            {faculty.administrativeExperience.departmentLevel.length <= 0 ? (
                                <p>Details will be updated from data/facultyData.js</p>
                            ) : (
                                faculty.administrativeExperience.departmentLevel.map((item, index) => {
                                    return (
                                        <div className="timeline-item" key={index}>
                                            <div className="timeline-dot"></div>
                                            <div className="timeline-content">
                                                {item}
                                            </div>
                                        </div>
                                    )
                                }
                                )
                            )}
                        </div>
                        <div className="instExp">
                            <h4>Institute Level</h4>
                            {faculty.administrativeExperience.instituteLevel.length <= 0 ? (
                                <p>Details will be updated from data/facultyData.js</p>
                            ) : (
                                faculty.administrativeExperience.instituteLevel.map((item, index) => {
                                    return (
                                        <div className="timeline-item" key={index}>
                                            <div className="timeline-dot"></div>
                                            <div className="timeline-content">
                                                {item}
                                            </div>
                                        </div>
                                    )
                                }
                                )
                            )}
                        </div>
                    </div>
                    <h3>Professional Experiences</h3>
                    {faculty.professionalExperience === 0 ? (
                        <p>Details will be updated from data/facultyData.js</p>
                    ) : (
                        faculty.professionalExperience.map((item, index) => (
                            <div className="timeline-item" key={index}>
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    {item}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    )
}

export default About;