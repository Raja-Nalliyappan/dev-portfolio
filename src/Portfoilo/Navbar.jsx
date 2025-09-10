import instagramIcon from '../assets/instagram.svg';
import linkedinIcon from '../assets/linkedin.svg';
import githubIcon from '../assets/github.svg';
import whatsappIcon from '../assets/whatsapp.svg';
import { NavLink } from 'react-router-dom';
import download from '../assets/download.png'
import "./Navbar.css"

export const Navbar =()=>{

    // const resumeDownload =()=>{
    //     const link = document.createElement("a");
    //     link.href = "/Resume/Raja.pdf";
    //     link.download = "Raja_resume.pdf";
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    // }

    return(
        <div>
            <header>
                <div className='main-header'>
                    <nav className="navbar-card">
                        <ul className="nav-list">
                            <li><NavLink to="/home" style={({isActive})=>isActive?{backgroundColor:"#829ecaff",borderRadius:"10px"}:{color:"white"}}>Home</NavLink></li>
                            <li><NavLink to="/experience" style={({isActive})=>isActive?{backgroundColor:"#829ecaff",borderRadius:"10px"}:{color:"white"}}>Experience</NavLink></li>
                            <li><NavLink to="/projects" style={({isActive})=>isActive?{backgroundColor:"#829ecaff",borderRadius:"10px"}:{color:"white"}}>Projects</NavLink></li>
                            {/* <li><NavLink to="/recentwork" style={({isActive})=>isActive?{backgroundColor:"#829ecaff",borderRadius:"10px"}:{color:"white"}}>Recent work</NavLink></li> */}
                            <li><NavLink to="/skills" style={({isActive})=>isActive?{backgroundColor:"#829ecaff",borderRadius:"10px"}:{color:"white"}}>Skills</NavLink></li>
                        </ul>
                    </nav>
                    <nav className="navbar-img">
                        <ul className="nav-bar-img-list">
                            <li><a href="#" target='_blank' rel='oopener noreferrer'><img src={instagramIcon} alt="instagram" width="35" height="35"/></a></li>
                            <li><a href="https://www.linkedin.com/in/raja-nalliyappan-22a131174/" target='_blank' rel='oopener noreferrer'><img src={linkedinIcon} alt="linkedin" width="35" height="35"/></a></li>
                            <li><a href="https://github.com/Raja-Nalliyappan" target='_blank' rel='oopener noreferrer'><img src={githubIcon} alt="" width="35" height="35"/></a></li>
                            <li><a href="https://wa.me/9626945746?text=Hello%20I%20saw%20your%20portfolio!" target='_blank' rel='oopener noreferrer'><img src={whatsappIcon} alt="" width="31" height="31" style={{marginBottom:"2px"}}/></a></li>
                            {/* <li><button onClick={resumeDownload} style={{position:"relative", left:"50px" ,bottom:"4px", cursor: "pointer"}} ><img src={download} alt="" width="25" height="25"/></button></li> */}
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}
