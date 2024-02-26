import React from "react";
import '../CSS/select.css'

const SelectItem = ({
  id,

  name,

  required,

  options,

  onChange,

  label,
}) => (
  <div className="select-wrapper">
    
    <label>
      {label}
      <select id={id} name={name} onChange={onChange} required={required}>
        <option value='' hidden> Select an option</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  </div>
);

export default SelectItem;

