import React from 'react';
import './BurguerButton.css';

const BurguerButton = (props) => (
  <div>
    <div onClick={props.handleClick} className={`icon nav-icon-5 ${props.clicked ? 'open' : ''}`}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
);

export default BurguerButton;