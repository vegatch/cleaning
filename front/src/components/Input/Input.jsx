import React  from "react";
// import handleValidation from '../utilities/Validation.jsx'
import './input.css'

const Input = ({ id, label, onChange, type, required, ...inputProps }) => {
  const [focused, setFocused] = React.useState(false);

  const handleFocused = () => {
    setFocused(true);
  };

  return (
    <div className="form-input">
      <label>{label}
      <input
        {...inputProps}
        required={required}
        type={type}
        onChange={onChange}
        onBlur={handleFocused}
        focused={focused.toString()}
        onFocus={() => inputProps.name === "message" && setFocused(true)}
      />
      {/* <p>{errMsg}</p> */}
      {/* <span className="error-message">{errorMsg}</span> */}
      </label>
    </div>
  );
};

export default Input;


// import React from "react";
// import './input.css'

// const Input = ({label, type, pattern, errorMessage,  onBlur, onChange, id, placeholder, maxLength}) => {
//     return(
//       <div className="input-container">
//         <label htmlFor={id}>
//           {label}
//           <input 
//             type={type}
//             onChange={onChange}
//             placeholder={placeholder}
//             pattern={pattern}
//             maxLength={maxLength}
//             onBlur={onBlur}
//           />
//         </label>
//         <span> {errorMessage} </span>
//       </div>
//     )
//   }
  
//   export default Input;