import React from "react";
import Banner from '../components/Banner/Banner.jsx'
import '../CSS/success.css'

const Success = () =>{
    return(
        <div className="page-container">
            <div className="thanks-container">
                <h1>Thank you for reaching out to us</h1>
                <p>
                    We are now reviewing the information submitted and 
                    a member of our team will contact you
                    shortly.
                </p>
                </div>
                <div>
                <Banner 
                    lblforbtn='Get quote or book online' 
                    lblforPhone='Call us at ' 
                    ads='Your search for cleaning service ends here.'
                /> 
                </div>
            <div></div>
        </div>
    )
}


export default Success;