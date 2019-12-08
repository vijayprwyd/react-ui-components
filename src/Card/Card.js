import React from "react";
import "./card.scss";

export function Card(props) {
    return (
        <div className = "card-container">
            {props.children}
        </div>
    )
}