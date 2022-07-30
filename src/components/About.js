import React from 'react';
import '../App.css'
import '../App.js';
import '../index.css';
// import '../footer.css';


import MSULogo from '../assets/images/MSU-Logo.png';


const About = () => {
    return(
        <React.Fragment>
            <div className='containeR'>
                <div className='row'>
                    <div className='card'>
                        <div className='card-bodyy'>
                            <div className='row-abstract-back'>
                                {/* <img className='avatar' src={Avatar} alt="My-face" /> */}
                            </div>
                        </div>
                        
                        <br></br>

                        <div className='card-body'>
                                <h2 className='edu'>Education</h2>
                                <br />
                                <div className='grid-container'>
                                <div className='grid-container-profile'>
                                    
                                    <div className='grid-item'>
                                        <div className='title-uni'>Medical College, M. S. University, Baroda, India</div>
                                        <div className='title-concentration'>Medical School/ Education</div>
                                    </div>

                                    <div className='grid-item'>
                                        <a href='https://www.medicalcollegebaroda.edu.in/' target='_blank' rel="noreferrer"><img className='university-logo' src={MSULogo} alt="MSU-Logo" /></a>
                                    </div>
                                    </div>
                                    
                                </div>
                        </div>

                    </div>

                </div>

            </div>

        </React.Fragment>
    )
}


export default About; 