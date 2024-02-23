import React from "react";
import Path from '../Path/Path.jsx'
// import Button from '../Button/Button.jsx'
import Phone from '../Phone/Phone.jsx'
import './banner.css';

const Banner =() =>{
    return(
        <div className="banner-container">
            <h2> Your search for a cleaning service ends here.</h2>
            <div>
                <div>
                    <Phone message='Call us today at '  className='dark' />
                </div>
                <div>
                   <Path goToPage='/BookNow' labelForLink='Get quote or book online'/>
                </div>
            </div>
        </div>
    )
}


export default Banner;