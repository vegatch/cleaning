import React from "react";
import '../CSS/radio.css'
// const Radio =({value, onChange, label, name, id}) =>{
//     return(
//         <div className="radio-container">
//             <div  className="radio">            
//                 <input type="radio" checked={name === value} value={value}  name={name} onChange={onChange} />
//                 <label htmlFor={id}> {label} </label>                      
//             </div>            
//         </div>
        
//     )
// }


const Radio = ({ id, text, name, onChange, checked, value }) => {
    return (
        <div className="radio-container">
            <div  className="radio"> 
                <label htmlFor={id} >
                    <input          
                    type="radio"
                    name={name}
                    id={id}
                    value={value}
                    onChange={onChange}
                    checked={checked}
                    />
                    <span className="custom-radiobutton" />
                    {text}
                </label>
            </div>
        </div>
    );
  };
  

export default Radio;