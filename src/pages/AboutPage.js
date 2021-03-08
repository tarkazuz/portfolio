import React from 'react';
import MyTimeLine from '../components/Timeline';
import Skills from '../components/Skills';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import myPhoto from '../assets/myPhoto.jpg'


const AboutPage = ()=>{
    return(
        <div>
            <Navbar/>
        <div className="aboutPage elem-border">
            <div className="homeScreen"> 
                <div className = "tilesMain">
                    <div className="sectionTitle">About me</div>
                    <div className="aboutSection">
                        <div className="leftAbout"> 
                            <img className="myPic" src="myPhoto.jpg" alt="Hi, it's my face in case you wondered."></img>
                           
                            <div className="aboutElements mySkills"> 
                                    <h2>My skills</h2>
                                    <Skills/>
                                </div>
                        </div>
                        <div className="aboutElements">
                            <div className="rightAbout">
                            <h2>Hi, I am Zuza <br/> ~ Frontend Developer ~</h2>
                                <p>I have always been fascinated by technology and excited to learn new 'magic tricks' on my computer to impress my family and friends.
                                    No matter what I did - studying, working or taking a break - I was always drawn to the idea of being able to create something beautiful and useful, which could be accessed and used by anyone.
                                </p>
                                <br/>
                                <p>When Covid-19 pandemic started and I was stranded at home for months, I finally gathered the courage to really dive into coding.
                                    Sitting in front of my computer for hours, going from an extreme frustration of not being able to make the program behave the way I wanted,
                                    to feeling ecstatic about finally making the result look close to my vision,
                                     I didn't notice the time flying by.
                                </p>
                                <p>And so I realised this is something I really want to do!</p>
            
                            </div>
                        </div>
                    </div>
                    <div className="aboutElements timeline">
                            <h2>My Timeline</h2>
                            <MyTimeLine/>
                        </div>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    )
}
export default AboutPage;