import React from "react";
import './contact.css';
import Github from '../../assets/githubwideSized.png'
import LinkedIn from '../../assets/linkedInWideSized.png'

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
            <div className="contactMe">

            </div>
        </section>
    )
}

export default Contact;