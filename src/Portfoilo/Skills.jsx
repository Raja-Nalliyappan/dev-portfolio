import html from "../assets/html-5.svg"
import css from "../assets/CSS-3.svg"
import js from "../assets/javascript.svg"
import react from "../assets/react-js.svg"
import csharo from "../assets/Csharp.svg"
import { Navbar } from "./Navbar"
import "./Skills.css"
import { useEffect } from "react"
import { Footer } from "./Footer"

export const Skills = ()=>{
    useEffect(()=>{
        document.body.style.backgroundColor="black"
    })
      return (
    <div className="skills-page">
      <Navbar />
      <div className="skills-content">
        <h1 style={{ color: "white", margin: "20px", fontFamily: "system-ui, sans-serif" }}>
          Development skills
        </h1>
        <p className="typewriter">
          Full Stack .NET Developer skilled in ASP.NET Core, Web API, React.js, and SQL Server with strong OOPs and problem-solving skills.
        </p>
        <div className="skill-scroll-wrapper">
          <div className="skill-list">
            <img src={html} alt="html" />
            <img src={css} alt="css" />
            <img src={js} alt="js" />
            <img src={react} alt="react" className="react-logo" />
            <img src={csharo} alt="CSharp" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}