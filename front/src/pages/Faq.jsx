import React from "react";
import Qanswer from '../components/FAQ/Faq.jsx'
import Banner from '../components/Banner/Banner.jsx';

const Faq = () =>{
    return (
        <div className="page-container">
            <h1>Frequently asked questions</h1>
            <div>
                <Qanswer />
            </div>
            
            <div>
                <Banner />
            </div>
        </div>
    )
}

export default Faq;