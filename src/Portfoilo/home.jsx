import rajaIcon from '../assets/Raja N.jpg';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import "./home.css"
import { useEffect } from 'react';

export const Home =()=>{
    useEffect (()=>{
        document.body.style.backgroundColor = "black"
    })
    return(
        <>
        <Navbar />
        <main>
            <div className="main-parent">
                <div className="main-parent-1">
                    <h1>Raja N</h1>
                    <h3 style={{marginTop:"8px"}}>Financial Analyst&nbsp;&#8594;Manual Tester&nbsp;&#8594; <span style={{color:"lightpink"}}>FullStack Developer</span>  </h3>
                    <p>Motivated and detail-oriented professional with 2 years of experience as an XBRL Financial Analyst and 1 year in Manual Testing, currently upskilling in Full Stack Web Development. Seeking a dynamic role in software development where I can blend my analytical background with technical skills to build efficient, user-centric web applications. Eager to contribute to innovative projects while continuously growing as a full stack developer. Raja N</p>
                    <a href="#">Let's get started</a>
                </div>
                <div className="main-parent-img">
                    <img src={rajaIcon} alt="raja" width="230px" height="350px"/>
                </div>
            </div>
        </main>
        <Footer />
        </>
    )
}