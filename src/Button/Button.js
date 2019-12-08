import React from "react";
import "./button.scss";

const typeClassMapper = {
    primary: "primary",
    secondary: "secondary"
}

export function Button(props) {

    const {type, children, ...eventHandlers} = props

    return (
        <button className = {`button ${typeClassMapper[type || 'primary']} `} 
            {...eventHandlers || {}}
        >
            {children}
        </button>
    );
}