import React from 'react';
import './Campo.css';
export default ( { caption , type, readOnly ,value, name , onChange, ...props } )=>{
  return (
    <fieldset>
      <legend>{caption}</legend>
      <input
        type={type||"text"}
        readOnly={readOnly||"readOnly"}
        value={value||""}
        name={name}
        onChange={(onChange||function(){})}
        
        
      />
    </fieldset>
  );
};
