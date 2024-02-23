import { React} from "react";
// import { useState,useEffect, React } from "react";
// import ExtraNum from './ExtraNum'
import '../CSS/extra.css'


const Extra = ({label, price, name, id, title, myLabel, value, tile, onChange, ...props}) =>{
    // console.log('from extra component',typeof(value))
    
    return(
        <div className="checkbox-container">
            <div className='left-container'>
                <label  className="label-extra">
                    <input 
                    onChange={onChange}
                    name={name}
                    type="checkbox"/>
                    {label}
                </label>
            </div> 
            {value === true ? 
            <div className='right-container'>
                <div>
                    <label htmlFor={title}>{myLabel}</label>
                </div>
                <div className='extra-container'> 
                    <select 
                        onChange={onChange}
                        name={title}>
                        <option value='0' hidden> Select an option</option>
                        <option value='1'>One</option>
                        <option value='2'>Two</option>
                        <option value='3'>Three</option>
                        <option value='4'>Four</option>
                        <option value='5'>Five</option>
                        <option value='6'>Six</option>
                    </select>
                    
                </div>            
            
        </div>
            :
         null   
            }
             
        </div>
                      
        
    )    
}



// const Extra = ({label, price, name, id, ...props}) =>{
//     const [count, setCount] = useState(1)
//     const [checked, setChecked] = useState(false);
//     const handleCheck = () =>{
//         setChecked(!checked)
//         resetCounter()
//       }
    
//     const handleIncrement = (e) =>{
//         setCount(prevCount => prevCount + 1)
//         handlePricePerItem()
//     }
    
//     const handleDecrement = (e) =>{
//         setCount(count <= 1 ? 1 : prevCount => prevCount - 1)    
//         handlePricePerItem()  
//     }
    
//     const [extraPrice, setExtraprice] = useState(0);
//     const handlePricePerItem = (e) =>{
       
//         setExtraprice(count <=1 ? price: price * count )  
//     }
    
//     const resetCounter =() => {
//         if(checked === true) {            
                
//                 setExtraprice(price)            
//         }
//     }

//     useEffect((e) => {    
        
//         handlePricePerItem()    
//         // console.log('value of count', count, checked, label)     
          
//       });
    
//     return(
//         <div>
//             <div className="displayFlex">
//                     <div className="checkbox">
//                         <label  className="label-extra">
//                             <input 
//                             checked={checked}
//                             onChange={handleCheck}
//                             name={name}
//                             type="checkbox"/>
//                             {label}
//                         </label>
//                     </div>
//                     <div>
//                 </div>
//                     { checked === true ? 
//                         <div className="displayFlex counter-price">
//                             <button type= "button" className="btn-extra" onClick={handleDecrement}>-</button>
//                             <p className="counter">{count}</p>
//                             <button type="button" className="btn-extra" onClick={handleIncrement}>+</button>
//                             <div className="extra-price">
//                                 <p>{extraPrice}</p>
//                             </div>
//                         </div>
//                     : null }
//             </div> 
//         </div>
        
//     )
// }

export default Extra