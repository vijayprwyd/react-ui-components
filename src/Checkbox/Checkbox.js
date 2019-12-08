import React from "react";
import '../Radiobutton/radiobutton.scss'

export function Checkbox() {
    return (
        <>
            <label className="checkbox-container">One
                <input type="checkbox" name="radio" />
                <span className="checkbox-checkmark"></span>
            </label>

            <label className="checkbox-container">Two
                <input type="checkbox" name="radio" />
                <span className="checkbox-checkmark"></span>
            </label>

            <label className="checkbox-container">Three
                <input type="checkbox" name="radio" />
                <span className="checkbox-checkmark"></span>
            </label>
        </>
    );
}