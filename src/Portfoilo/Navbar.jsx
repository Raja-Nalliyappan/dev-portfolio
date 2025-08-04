import instagramIcon from '../assets/instagram.svg';
import linkedinIcon from '../assets/linkedin.svg';
import githubIcon from '../assets/github.svg';
import whatsappIcon from '../assets/whatsapp.svg';
import { Link } from 'react-router-dom';
import "./Navbar.css"

export const Navbar =()=>{
    return(
        <div>
            <header>
                <div className='main-header'>
                    <nav className="navbar-card">
                        <ul className="nav-list">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/experience">Experience</Link></li>
                            <li><a href="#">Projects</a></li>
                            <li><a href="">Recent work</a></li>
                            <li><Link to="/skills">Skills</Link></li>
                        </ul>
                    </nav>
                    <nav className="navbar-img">
                        <ul className="nav-bar-img-list">
                            <li><a href="#" target='_blank' rel='oopener noreferrer'><img src={instagramIcon} alt="instagram" width="35" height="35"/></a></li>
                            <li><a href="#" target='_blank' rel='oopener noreferrer'><img src={linkedinIcon} alt="linkedin" width="35" height="35"/></a></li>
                            <li><a href="#" target='_blank' rel='oopener noreferrer'><img src={githubIcon} alt="" width="35" height="35"/></a></li>
                            <li><a href="#" target='_blank' rel='oopener noreferrer'><img src={whatsappIcon} alt="" width="31" height="31" style={{marginBottom:"2px"}}/></a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}

                    
                    
                    
                    
                    