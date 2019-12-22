import React, {useState} from "react";
import "./ripples.scss";
import { debounce } from "../utils/debounce";

export function Ripples({backgroundColor = "red"}) {

    const [rippleStyles, setRippleStyles] = useState([]);

    function handleMouseDown(event) {
        const position = event.currentTarget.getBoundingClientRect();
        const size = event.currentTarget.offsetWidth;
        let x = event.pageX - position.left - (size/2);
        let y = event.pageY - position.top - (size/2);

        let style = {
            top: `${y}px`,
            left: `${x}px`,
            height: `${size}px`,
            width: `${size}px`,
            backgroundColor
        }
        setRippleStyles([...rippleStyles, style]);
        debounce(clearRipples, 10000)();
    }

    function clearRipples() {
        setRippleStyles([]);
    }

    return (
        <div className = "ripple--container" 
            onMouseUp = {handleMouseDown}
            >

            {
                rippleStyles.map((style, index) => <span style = {style} key = {index} ></span>)
            }
        </div>
     );
}