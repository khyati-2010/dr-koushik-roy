import { faculty } from "../data/facultyData"
function Research() {
    return (
        <section className="research section" id="research">
            <div className="container">
                <h2>Research & Students Supervised</h2>
                <div className="research-tags">
                    {faculty.researchAreas.map((area, index) => (
                        <span key={index} className="research-tag">
                            {area}
                        </span>
                    )    
                    )}
                </div>
                <div className="students-block">
                    <h3>Current Students</h3>
                    {faculty.students.currentStud.length > 0 ? (
                        <div className="student-list">
                            {faculty.students.currentStud.map((student, index) => {
                                return (<div className="student-card" key={index}>
                                    <h4>{student.name}</h4>
                                    <p>{student.course}</p>
                                    <p>{student.resArea}</p>
                                </div>);
                            })}
                        </div>
                    ):(
                        <p>Data will be updated from /data/facultyData.js</p>
                    )}
                </div>
                <div className="students-block">
                    <h3>Alumni</h3>
                    {faculty.students.alumni.length > 0 ? (
                        <div className="student-list">
                            {faculty.students.alumni.map((student, index) => {
                                return (<div className="student-card" key={index}>
                                    <h4>{student.name}</h4>
                                    <p>{student.course}</p>
                                    <p>{student.resArea}</p>
                                </div>);
                            })}
                        </div>
                    ):(
                        <p>Data will be updated from /data/facultyData.js</p>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Research;