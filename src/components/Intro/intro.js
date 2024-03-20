import React from "react";
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png'
import {Link} from 'react-scroll';

const Intro = () => {
    return(
        <section id="intro">
            <div className="introContent">
            <spam className="hello">Hello,</spam>
            <span className="introText">I'm <span className="Abdoul"> Abdoul</span><br />Kennesaw State University Student</span>
            <p className="introPara">I'm a computer science student currently attending Kennesaw State University and looking for experiences!</p>
            <Link><button className="btn"><img src={btnImg} alt="Hire Me" />Hire Me</button></Link>
            </div>
            <img src="{bg}" alt="Profile" className="bg" />
        </section>
    )
}

export default Intro;