import React from "react";
import "./button.scss";

const typeClassMapper = {
    primary: "primary",
    secondary: "secondary",
    noBorder: "noBorder"
}

export function Button(props) {

    const {type, children, classNames, ...eventHandlers} = props

    return (
        <button className = {`button ${typeClassMapper[type || 'primary'] } ${classNames || ""} `} 
            {...eventHandlers || {}}
        >
            {children}
        </button>
    );
}