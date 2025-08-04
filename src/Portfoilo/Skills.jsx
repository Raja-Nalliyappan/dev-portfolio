import html from "../assets/html-5.svg"
import css from "../assets/CSS-3.svg"
import js from "../assets/javascript.svg"
import react from "../assets/react-js.svg"
import { Navbar } from "./Navbar"
import "./Skills.css"
import { useEffect } from "react"
export const Skills = ()=>{
    useEffect(()=>{
        document.body.style.backgroundColor="black"
    })
    return(
        <>
        <Navbar />
            <h1 style={{color:"white", }}>Development skills</h1>
            <div className="skill-scroll-wrapper">
                <div className="skill-list">
                    <img src={html} alt="html" />
                    <img src={css} alt="css" />
                    <img src={js} alt="js" />
                    <img src={react} alt="react" className="react-logo"/>
                </div>
            </div>
        </>
    )
}