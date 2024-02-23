import React from "react";
import './phone.css'
const Phone = ({message, className}) => {
    const benskyaPhone ='1-561-768-3760'
    return(
        <div className="phone-container">
                <a href="tel:5617683760" className={className}> {message } {benskyaPhone} </a>       
        </div>
    )
}

export default Phone;