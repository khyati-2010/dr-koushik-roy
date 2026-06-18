import { useState } from "react"
import { faculty } from "../data/facultyData"

const yearGrped = (publications) => {
    return publications.reduce((acc, pub) => {
        if (!acc[pub.year]) acc[pub.year] = [];
        acc[pub.year].push(pub);
        return acc;
    }, {})
}


function Publications() {
    const [activeTab, setActiveTab] = useState("journals")
    const [openYear, setOpenYear] = useState(null)
    const publications = activeTab === "journals" ? faculty.publications.journals : faculty.publications.conferences

    const grped = yearGrped(publications)
    const years = Object.keys(grped).sort((a, b) => b - a)

    return (
        <section className="publications" id="publications">
            <div className="public-container">
                <h2>Publications</h2>
                <h4>({faculty.publications.journals.length} Journals,{" "}
                    {faculty.publications.conferences.length} Conferences)</h4>
                <div className="public-tabs">
                    <button className={activeTab === "journals" ? "active" : ""} onClick={() => {
                        setActiveTab("journals")
                        setOpenYear(null)
                    }}>
                        Journals
                    </button>
                    <button className={activeTab === "conferences" ? "active" : ""} onClick={() => {
                        setActiveTab("conferences")
                        setOpenYear(null)
                    }}>
                        Conferences
                    </button>
                </div>
                {years.map((year) => (
                    <div className="year-block" key={year}>
                        <button className="year-header" onClick={() => {
                            setOpenYear(openYear === year ? null : year)
                        }}>
                            {openYear === year ? "▼" : "▶"} {year} ({grped[year].length})
                        </button>

                        {openYear === year && (
                            <div className="year-content">
                                {grped[year].map((pub, index) => (
                                    <div className="public-item" key={index}>
                                        <h5>{pub.title}</h5>
                                        <p className="conf-date">{pub.date ? pub.date : ""}</p>
                                        <p>{pub.citation}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Publications;
