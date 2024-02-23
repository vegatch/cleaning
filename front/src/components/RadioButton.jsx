import React from "react";
import '../CSS/radio.css'
const Radio =({value, onChange, label, name, id}) =>{
    return(
        <div className="radio-container">
            <div  className="radio">            
                <input type="radio" value={value}  name={name} onChange={onChange}/>
                <label htmlFor={id}> {label} </label>                      
            </div>            
        </div>
    )
}

export default Radio;