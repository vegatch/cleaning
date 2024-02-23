import React from 'react';
import '../CSS/input.css';

// const FormInput = (props) => {
//   const [focused, setFocused] = useState(false);
//   const { label, errorMessage, onChange, id, ...inputProps } = props;

//   const handleFocus = (e) => {
//     setFocused(true);
//   };


//   return (
//     <div className="formInput">
//       <label>
//         {label}
//         <input
          
//           {...inputProps}
//           onChange={onChange}
//           onBlur={handleFocus}
//           min= {new Date().toISOString().split('T')[0]}      
//           onFocus={() =>
//             inputProps.name === "cleaningtime" && setFocused(true)
//           }
//           focused={focused.toString()}
//         />
//     </label>
//       <span>{errorMessage}</span>
//     </div>
//   );
// };

const FormInput = ({label, type, pattern, onChange, id, placeholder, maxLength}) => {
  return(
    <div className="input-container">
      <label htmlFor={id}>
        {label}
        <input 
          type={type}
          onChange={onChange}
          placeholder={placeholder}
          min= {new Date().toISOString().split('T')[0]}  
          pattern={pattern}
          maxLength={maxLength}
        />
      </label>
      <span>error to be displayed here</span>
    </div>
  )
}

export default FormInput;
