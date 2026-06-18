import { faculty } from "../data/facultyData";

function Recognitions() {
    return (
        <section className="recog" id="recognitions">
            <h2>Recognitions</h2>
            <div className="recog-grid">
                <div className="recog-card">
                    <h3>Awards and Honours</h3>

                    {faculty.recognitions.awardsAndHonors.map((award, index) => (
                    <div className="recog-content" key={index}>
                        <h5>{award.title}</h5>
                        <p>{award.citation}</p>
                    </div>
                    ))}

                </div>
                <div className="recog-card">
                    <h3>Memberships</h3>
                    {faculty.recognitions.memberships.map((member, index) => (
                    <div className="recog-content" key={index}>
                        <h5>{member.title}</h5>
                        <p>{member.citation}</p>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Recognitions;