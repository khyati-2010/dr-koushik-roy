import { useEffect, useState } from "react";

function BackToTop(){
    const [visible, setVisible] = useState(false)
    useEffect(()=>{
        const handleScroll= ()=>{
            setVisible(window.scrollY > 300)
        }

        window.addEventListener("scroll", handleScroll)

        return ()=>{
            window.addEventListener("scroll", handleScroll)
        }
    }, [])

    const scrollToTop = ()=>{
        window.scrollTo({
            top: 0,
            behaviur: "smooth",
        })
    }

    return(
        visible && (
            <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">↑</button>
        )
    )
}

export default BackToTop;