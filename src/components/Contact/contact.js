import React from "react";
import './contact.css';
import Github from '../../assets/githubwideSized.png'
import LinkedIn from '../../assets/linkedInRight.png'
import Youtube from '../../assets/youtube.png'
import Twitter from '../../assets/twitter.png'
import Facebook from '../../assets/facebook-icon.png'
import Instagram from '../../assets/instagram.png'

const Contact = () => {
    return (
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">My Projects and LinkedIn</h1>
                <p className="clientDesc">Here below this text, you can see the logos of GitHub and LinkedIn which have been hyperLinked to the repsective websites. When clicked on they will take you to my profile on both websites!</p>

            </div>
            <div className="clientImgs">
                <img src={Github} alt="contactApps" className="clientImg" />
                <img src={LinkedIn} alt="contactApps" className="clientImg" />
            </div>
            <div id="contact">
                <h1 className="contactPagetitle">Contact Me</h1>
                <span className="contactDesc">You can fill out the form below to discuss and work opportunities.</span>
                <form className="contactForm">
                    <input type="text" className="name" placeholder="Your Name"/>
                    <input type="text" className="email" placeholder="Your Email"/>
                    <textarea type="text" className="message" rows="5" placeholder="Your Message"/>
                    <button type="submit" value='Send' className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={Youtube} alt="" className="link"/>
                        <img src={Twitter} alt="" className="link"/>
                        <img src={Facebook} alt="" className="link"/>
                        <img src={Instagram} alt="" className="link"/>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;