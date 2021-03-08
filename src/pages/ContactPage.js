import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';




const ContactPage=()=>{
    return(
        <div >
            <Navbar/>
            <div className="contactPage elem-border">
            <div className="sectionTitle">Contact</div>
             <h2>If you are interested in my work, want to learn more or collaborate,
                 please get in touch!
             </h2>
             <div className="contactItems elem-border">
             <div className="contactItem">
                     <AlternateEmailIcon fontSize="large"/>
                     <a href="mailto:zuzanna.tarka@gmail.com?subject=I have seen your portfolio and want to get in touch" target="_blank" rel="noreferrer">  
                         <h3>Reach out via email</h3></a>
                </div>
                <div className="contactItem">
                    <GitHubIcon fontSize="large"/>
                     <a href="https://github.com/tarkazuz" target="_blank" rel="noreferrer"><h3>Visit my GitHub Page</h3></a>
                </div>
                <div className="contactItem">
                    <LinkedInIcon fontSize="large"/>
                    <a href="https://www.linkedin.com/in/zuzanna-tarka-1a583313a/?originalSubdomain=uk" target="_blank" rel="noreferrer">
                     <h3>Connect with me on LinkedIn </h3></a>
                </div>
             </div>
             
             
             
            </div>
            <Footer/>
        </div>
    )
}

export default ContactPage;