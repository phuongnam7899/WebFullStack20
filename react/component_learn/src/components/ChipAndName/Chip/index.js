import './index.css';
import React from 'react';
const Chip = (props) => {
  return (
    <div className={`chip-background chip-text ${props.color}`}>
    {props.text}
   </div>
  );
}

export default Chip;