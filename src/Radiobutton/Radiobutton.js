import React from "react";
import "./radiobutton.scss";

export function Radiobutton() {
    return (
        <>
            <label className="radio-container">One
                <input type="radio" name="radio" />
                <span className="radio-checkmark"></span>
            </label>

            <label className="radio-container">Two
                <input type="radio" name="radio" />
                <span className="radio-checkmark"></span>
             </label>

             <label className="radio-container">Three
                <input type="radio" name="radio" />
                <span className="radio-checkmark"></span>
             </label>

        </>
    );
}