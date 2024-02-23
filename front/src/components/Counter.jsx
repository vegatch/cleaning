import React from "react";
// import Extra from './Extra.jsx'
import  '../CSS/button.css'


const Counter = (price) =>{
    const [count, setCount] = React.useState(1)

    const handleIncrement = (e) =>{
        setCount(prevCount => prevCount + 1)
    }
    const handleDecrement = (e) =>{
        setCount(count <= 1 ? 1 : prevCount => prevCount - 1)    
    }
    
    return(
        <div>
            <button onClick={handleDecrement}>-</button>
            <p className="counter">{count}</p>
            <button onClick={handleIncrement}>+</button>
            {/* <div>{}</div> */}
        </div>
    )
}

export default Counter;