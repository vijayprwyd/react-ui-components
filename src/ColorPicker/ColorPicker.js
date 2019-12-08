import React, {useState} from "react";
import "./colorpicker.scss";

export function ColorPicker(props) {

    const {colorElements} = props;
    const [activeButtonIndex, setActiveButtonIndex] = useState(null);

    function handleClick(index, onClickCallback) {
        setActiveButtonIndex(index);
        onClickCallback && onClickCallback();
    }

    return colorElements.map((colorElement, index) => {
        const {color, ...eventHandlers} = colorElement;

        return (
            <button 
                {...eventHandlers} 
                key = {index} 
                onClick = {() => handleClick(index, colorElement.onClick)}
                className = {`color-picker`} 
                style ={{border: `1px solid ${color}`,backgroundColor: `${activeButtonIndex !== index ? color : "inherit"}`}}
                >

                    <div className = "color-picker-selected" style = {{backgroundColor: `${color}`}}></div>

            </button>
        )
    });
}