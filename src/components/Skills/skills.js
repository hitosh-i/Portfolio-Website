import React from "react";
import './skills.css';
import SoftwareDesign from '../../assets/javaDesign.png';
import csLearning from '../../assets/csLearning.png';
import appDesign from '../../assets/softwareDesignResized.png'


const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do and what I've learned</span>
            <span className="skillDescription"> I am a skilled and passionate Computer Science Undergraduate student at Kennesaw State University with most of my experience in coding in Java, but also some experience in JavaScript, CSS, and SQL. I have a strong understanding of multiple concepts within Java like Object-Oriented Programming, Data Structures, and Algorithms. I also do have experience in using editing video in Sony Vegas as well as great computer technical skills as I have built a repaired many desktop pc towers. </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={SoftwareDesign} alt="SoftwareDesign" className="skillbarImg" />
                    <div className="skillBarText">
                        <h2>Learning Computer Science Languages</h2>
                        <p>The main language that I'm most proficient in Java, though I'm not unfamiliar to JavaScript, SQL, and React. I've started branching out and learning more languages and exprimenting as I have started to create more fun projects for myself!</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={csLearning} alt="csLearning" className="skillbarImg" />
                    <div className="skillBarText">
                        <h2>Computer Science Undergraduate</h2>
                        <p>I'm currently an Undergraduate student at Kennesaw State University and I'm currently pursuing my Bachelor's in the field with a concentration in Artificial Intelligence. I love to learn about coding and computers as I've been coding and working on computers since 6th Grade. My expected graduation date is May 2026, and by then I hope to have become proficient in many different languages and have built some quite amazing projects!</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={appDesign} alt="App Design" className="skillbarImg" />
                    <div className="skillBarText">
                        <h2>Website and App Design</h2>
                        <p>As you're seeing on this website currently I'm learning and experimenting with learning how to create my own websites within CSS and React. This website was built using React and CSS, though this is not my only project that I've utilized CSS with</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;