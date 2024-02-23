import React from "react";
import {Link} from 'react-router-dom';
import './path.css';


const myPath = ({goToPage, className, labelForLink}) =>{
    return(
        <div className="linkContainer">
            <Link to={goToPage} className="small-btn">{labelForLink}</Link>
        </div>
    )
}

export default myPath;