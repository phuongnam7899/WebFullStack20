import React from "react";
import "./button.css"

const Button = (props) => {
    return (
        <button onClick={props.role} className={`button ${props.color}`}>
            {props.content}
        </button>
    );
}

export default Button;