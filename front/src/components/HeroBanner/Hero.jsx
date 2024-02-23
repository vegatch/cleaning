import React from "react";
import Path from '../Path/Path.jsx'

import './hero.css'


// const Hero = ({message, picture, lblbtn}) => {
//     const heroStyles = {
//         heroContainer: {
//             background: `url(${picture}) ` ,
//             height: "50vh",
//             margin:0,
//             padding:0,
//             // marginTop: "-4.4vh",
//             backgroundSize: "cover",
//             maxWidth:'100%',
//             objectFit: 'cover',
//             backgroundRepeat: "no-repeat",
//             overflow:"auto",
//         },
//         textContainer: {
//             linearGradient:"(180deg, rgba(255, 255, 255, 0.03) 50%, rgba(0, 0, 0, 0.9) 100%)",
//         },
//         message:{
//             padding:"3rem 1rem",
            
//         },
//       };
    
//     return(
//         <div className="main-component-container">
//             <div className='heroContainer' style={heroStyles.heroContainer}>
//                 <div className="textContainer" style={heroStyles.textContainer}>
//                     <h1 className="message" style={heroStyles.message}>
//                         {message}
//                     </h1>
//                 </div>
//                 <div>
//                     < Button label={lblbtn} className='main-btn'/>
//                 </div>
                
//             </div>
//         </div>
//     )
// }

const Hero = ({message, mainMessage, picture, picturedesc, lblbtn}) => {
    
    return(
        <div className="main-component-container">
            <div className='heroContainer' >
                <div className="hero-top">
                    <div className="hero-left">
                        <div className="main-message">
                            <h1>
                                {mainMessage}
                            </h1>
                        </div>
                        <div className="secondary-message">
                            <h3>
                                {message}
                            </h3>
                        </div>                        
                    </div>
                    <div className="hero-right">
                        <img src={picture} alt={picturedesc}/>
                    </div>                    
                </div>  
                <div className="hero-bottom">
                    {/* < Button label={lblbtn} className='small-btn'/> */}
                    <Path labelForLink = {lblbtn} goToPage='/BookNow'/>
                </div>

            </div>
        </div>
    )
}


export default Hero;