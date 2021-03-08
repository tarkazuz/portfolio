import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard'
import Travel21 from '../assets/Travel21.png'
import FeelGood from '../assets/FeelGood.png'
import IndecisionApp from '../assets/IndecisionApp.png'


const ProjectPage=()=>{
    return(
        <div >
            <Navbar/>
            <div className="projectPage elem-border">
                <div className="sectionTitle">Projects</div>
                <div className="projectTiles">
                    <ProjectCard title="Travel-21" image={Travel21} 
                    content= "A single-page application with current restrictions summary to enable easier and safer travel in the Covid-19 pandemic."
                    expand="This group project was developed out of the frustration of Berlin's expats with the unclear guidelines for travel during the Covid-19 pandemic.
                    The aim was to create a simple clear interface, which would allow the user to choose from a list of destinations, to see all the relevant data for planning a trip.
                    In order to achieve this, the data was scraped from German Foreign Office and World Health Organisation websites and connected via API to the interface"
            
                    technologies="Vanilla JavaScript, HTML, CSS, Bootstrap"
                    projectLink="https://github.com/TechLabs-Berlin/Travel-20" />
                    <ProjectCard title="Feel Good Page" image={FeelGood}
                    content="This simple website allows the user to kill some time during the lockdown - you can browse seasonal galleries and search for new shows to binge."
                    technologies="Vanilla JavaScript, HTML, CSS"
                    projectLink="https://github.com/tarkazuz/feel-good"
                    deployLink="https://tarkazuz.github.io/feel-good/index.html"
                    />
                    <ProjectCard
                    title="Indecision App"
                    content="When you are struggling to make a decision, sometimes you need to just pick at random. This React application can do that for you, and using a random number algorithm, tells you what your choice should be."
                    image={IndecisionApp}
                    expand="Built as a part of a React course, this CRUD application allows you to Create, Read, Update and Delete entries from your personal list. Using Local Storage saves data between sessions, so you can come back to your choice whenever you need to. "
                    technologies="React, JavaScript (ES6), CSS"
                    projectLink="https://github.com/tarkazuz/indecision_app" 
                    deployLink="https://react-indecision.netlify.app"
                    />
                    
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default ProjectPage;