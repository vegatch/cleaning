import React from "react";
import Form from '../components/Forms/Form.jsx'
import '../components/Forms/form.css'
// import picture from '../pics/pain.jpg'

const Booking = () => {
    return (
        <div className="page-container">
            <div className="header-booking">
                <h1> Spots are filled quicker than normal. PLease Book now</h1>
                {/* <img src={picture} alt='fyfyfgyu'/> */}
            </div>            
            <Form />
        </div>
        
        )
}

export default Booking;