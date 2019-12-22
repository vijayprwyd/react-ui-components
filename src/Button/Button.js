import React from "react";
import "./button.scss";
import { Ripples } from "../Ripples/Ripples";

const typeClassMapper = {
    primary: "primary",
    secondary: "secondary",
    noBorder: "noBorder"
}

export function Button(props) {

    const {type, children, classNames, ...eventHandlers} = props

    return (
        <button className = {`button ${typeClassMapper[type || 'primary'] } ${classNames || ""} `} 
            {...eventHandlers || {}} ripple = "ripple"
        >
            Hi
            <Ripples/>
        </button>
    );
}