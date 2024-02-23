import React from "react";
import './work.css'

const Work = ({title, titleDesc}) =>{
    return(
        <div className="section-container">
            <div className="residential">
                    <div>
                        <h4>
                            {title}
                        </h4>
                        <p>
                            {titleDesc}
                        </p>
                    </div>
            </div>
            <div className="commercial">
            {/* <div>
                        <h3>
                            {title}
                        </h3>
                        <p>
                            {titleDesc}
                        </p>
            </div> */}
            </div>
        </div>
        
    )
}

export default Work;