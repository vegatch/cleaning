import React, { useState } from "react";
import './textarea.css'

const Textarea = ({ id, label, errorMessage, onChange, placeholder, ...inputProps }) => {
  const [focused, setFocused] = useState(false);

  const handleFocused = () => {
    setFocused(true);
  };

  return (
    <div className="form-input">
      <label htmlFor="id">{label}</label>
      <textarea
        {...inputProps}
        onChange={onChange}
        placeholder={placeholder}
        cols='30'
        rows='15'
        wrap="true"
        onBlur={handleFocused}
        focused={focused.toString()}
        onFocus={() => inputProps.name === "message" && setFocused(true)}
            >

      </textarea>
      
      <span className="error-message">{errorMessage}</span>
    </div>
  );
};

export default Textarea;