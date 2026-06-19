import { useEffect, useState } from "react";

function ScrollProgress(){
    const [scroll,setScroll] = useState(0)
    useEffect(()=>{
        const updateScroll = () => {
            const totalHt = document.documentElement.scrollHeight - document.documentElement.clientHeight
            const progress = totalHt >0 ? (window.scrollY/totalHt)*100 : 0;
            setScroll(progress)
        } 
        window.addEventListener("scroll", updateScroll)
        updateScroll()

        return ()=>window.addEventListener("scroll", updateScroll)
    },[])

    return(
        <div className="scroll-progress" style={{width: `${scroll}%`}}></div>
    )
}

export default ScrollProgress;