import React from "react";
import "./index.css"

const Button = (props) => {
    return (
        <button onClick={props.role} className={`button ${props.color}`}>
            {props.content}
        </button>
    );
}

export default Button;