import { faculty } from "../data/facultyData";

function Contact() {
    return (
        <section className="contact" id="contact">
            <h2>Contact</h2>
            <div className="contact-grid">
                <div className="contact-card">
                    <h3>Email</h3>
                    <a href={`mailto:${faculty.contact.email}`}>{faculty.contact.email}</a>
                </div>
                <div className="contact-card">
                    <h3>Office</h3>
                    {faculty.contact.office ? <p>{faculty.contact.office}</p> : <p>Department Of Civil and Environmental Engineering, IIT Patna, Bihar, India, 801103</p>}
                </div>
                <div className="contact-card">
                    <h3>Phone</h3>
                    <a href={`tel:${faculty.contact.phone}`}>{faculty.contact.phone}</a>
                </div>
                {faculty.contact.websites.length > 0 ? faculty.contact.websites.map((link, index) => (
                    <div className="contact-card" key={index}>
                        <h3>{link.label}</h3>
                        <a href={link.url} target="_blank" rel="noopener noreferrer">{link.url}</a>
                    </div>
                )) :
                    <div className="contact-card">
                        <h4>Websites</h4>
                        <p>Data will be updated from <code>./data/facultyData.js</code></p>
                    </div>
                }
            </div>
        </section>
    )
}

export default Contact;