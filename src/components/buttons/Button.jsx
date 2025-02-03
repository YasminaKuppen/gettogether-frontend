import React from "react";
import './Button.css'
function Button({ clickHandler, children, type, disabled }) {
    return (
        <button
            className="submitButton"
            onClick={clickHandler}
            type={type}
            disabled={disabled || false}
        >
            {children}
        </button>
    );
}


export default Button;