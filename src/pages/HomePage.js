import React from 'react';
import Navbar from '../components/Navbar';
import MainImage from '../components/MainImage';
import Tile from '../components/Tile';
import Footer from '../components/Footer';
import TextMain from '../components/TextMain';


const TEXTS = [
    "Hi, I am Zuza. Frontend Developer based in Berlin",
    "Welcome to my portfolio"
  ];

const HomePage = ()=>{
    return(
        <div>
            <Navbar/>
            <div className="homeScreen">
                <div className="mainImage homeImage elem-border">
                    <MainImage 
                    imageTitle={<TextMain text={TEXTS}/>}/>
                </div>
                <div className = "tilesMain">
                        <Tile  className="tile" title="About me"
                        content="I am a tech enthusiast, always excited to learn more and take my Web Development journey that step further." 
                            sendTo="/about"
                        />

                        <Tile  className="tile" title="My projects"
                        content="Have a look at a selection of my projects, to see what I have been working on." 
                        sendTo="/projects"
                        />
                        <Tile  className="tile" title="Contact me"
                        content="If you want to learn more about my work or are interested in collaborating, get in touch!" 
                        sendTo="/contact"
                    />
                </div>
            </div>
            <Footer/>
        </div>
    )
}


export default HomePage;