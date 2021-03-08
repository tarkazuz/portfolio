import React from 'react';

const Skills = ()=>{
    return(
        <div>
            <div className="skillsRow">
                <div className="skillsElem"> <i className="fab fa-html5"></i> <div>HTML</div> </div>
                <div className="skillsElem">
                    <div className="cubeIcon"></div> <div className="cubeIcon"></div> <div className="cubeIcon"></div> <div className="cubeIcon"></div> <div className="cubeIcon cubeInactive"></div> 
                </div>
            </div>
            <div className="skillsRow">
                <div className="skillsElem"><i className="fab fa-css3-alt"></i><div>CSS</div></div>
                <div className="skillsElem">  
                <div className="cubeIcon"></div> <div className="cubeIcon"></div> <div className="cubeIcon"></div> <div className="cubeIcon cubeInactive"></div><div className="cubeIcon cubeInactive"></div> 
                </div>  
            </div>
            <div className="skillsRow">
                <div className="skillsElem"><div>JavaScript</div></div>
                <div className="skillsElem">  
                <div className="cubeIcon"></div> <div className="cubeIcon"></div> <div className="cubeIcon"></div> <div className="cubeIcon cubeInactive"></div><div className="cubeIcon cubeInactive"></div> 
                </div>  
            </div>
            <div className="skillsRow">
                <div className="skillsElem"><div>React</div></div>
                <div className="skillsElem">  
                <div className="cubeIcon"></div> <div className="cubeIcon"></div> <div className="cubeIcon"></div> <div className="cubeIcon cubeInactive"></div><div className="cubeIcon cubeInactive"></div> 
                </div>  
            </div>
        </div>
    );
} 

export default Skills;