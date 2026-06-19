import { faculty } from "../data/facultyData"

function Footer() {
    return (
        <footer>
            <div className="foot-container">
                <h3>{faculty.name}</h3>
                <p>{faculty.designation}, {faculty.department}</p>
                <p>{faculty.institute}</p>

                <a href={`mailto:${faculty.contact.email}`}>
                    {faculty.contact.email}
                </a>

                <p className="copyright">
                    © {new Date().getFullYear()} {faculty.name}. All rights reserved.
                </p>
                <p className="developer">
                    <i>Designed & Developed by Khyati Aggarwal</i>
                </p>
            </div>
        </footer>
    )
}

export default Footer;