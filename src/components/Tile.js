import React from 'react';
import {
    BrowserRouter as Router, Link
  } from "react-router-dom";

const Tile = ({title, content, sendTo})=>{
    return(
        <div className='elem-border tile'>
            <h1>{title}</h1> 
            <p className="overlay">{content}
                <Link to={sendTo}><button>See more</button></Link>
            </p>     
        </div>
    )
};

export default Tile;