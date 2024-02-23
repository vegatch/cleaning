import React from "react";


const ServOffered = ({serviceTitle, serviceDesc}) =>{
    return(
        <div>
            <div>
                <h4>{serviceTitle}</h4>
                <p>{serviceDesc}</p>
            </div>
        </div>
    )        
    
}

export default ServOffered;