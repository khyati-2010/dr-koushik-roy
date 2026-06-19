import { faculty } from "../data/facultyData";

function Teaching() {
    return (
        <section className="teaching" id="teaching">
            <h2>Teaching</h2>
            <div className="teaching-grid">
                <div className="undergrad">
                    <h4>Undergraduate Courses</h4>
                    {faculty.courses.undergraduate.map((course, index) => (
                        <div className="course-content" key={index}>
                            <p>{course}</p>
                        </div>
                    ))}
                </div>
                <div className="postgrad">
                    <h4>Postgraduate Courses</h4>
                    {faculty.courses.postgraduate.map((course, index) => (
                        <div className="course-content" key={index}>
                            <p>{course}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Teaching;