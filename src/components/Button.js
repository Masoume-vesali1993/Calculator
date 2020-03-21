import React from 'react';
import './Button.css';

const is0perator = val => {
    return !isNaN(val) || val === "." || val === "=";
  }

const Button = props => (
    <div className={`button-wrapper ${
        is0perator(props.children) ? null : "operator"
        }`}
    >
        {props.children}
    </div>
)

export default Button;