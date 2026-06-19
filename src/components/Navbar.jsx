import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-logo">
                    Dr. Koushik Roy
                </div>
                <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}> {menuOpen ? "✕" : "☰"} </button>
                <ul className={menuOpen ? "nav-links open" : "nav-links"}>
                    <li onClick={() => {
                        scrollToSection("home")
                        setMenuOpen(false)
                    }}>Home</li>
                    <li onClick={() => {
                        scrollToSection("about")
                        setMenuOpen(false)
                    }}>About</li>
                    <li onClick={() => {
                        scrollToSection("research")
                        setMenuOpen(false)
                    }}>Research</li>
                    <li onClick={() => {
                        scrollToSection("publications")
                        setMenuOpen(false)
                    }}>Publications</li>
                    <li onClick={() => {
                        scrollToSection("recognitions")
                        setMenuOpen(false)
                    }}>Recognitions</li>
                    <li onClick={() => {
                        scrollToSection("teaching")
                        setMenuOpen(false)
                    }}>Teaching</li>
                    <li onClick={() => {
                        scrollToSection("contact")
                        setMenuOpen(false)
                    }}>Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;