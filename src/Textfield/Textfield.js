import React from "react";
import "./textfield.scss";

export function Textfield(props) {

    const {isValid, errorText, classNames, ...eventHandlers} = props
    return (
        <>
            <label className = "textfield-label">TextField</label>
            <input type="text" className={`textfield ${isValid === false ? 'invalid' : 'valid'} ${classNames || "" }`} {...eventHandlers} ></input>
            {!isValid && <p className="errorText"> {errorText} </p>}
        </>
    );
}