import React from "react";

const NumberButton = (props) => {
  return (
    
      
      <button onClick={event => props.addNumber(props.textContent)} className="number"> {props.textContent} </button>
  )
};

export default NumberButton;

//event => props.addNumber(event.target.value)