import React, {useState} from "react";
import "./toastmessage.scss";

export function ToastMessage(props) {

    const [showToast, setShowToast] = useState(true);

    function handleAnimationEnd(event) {

        if(event.animationName === "fadeout") {
            setShowToast(false);
        }
    }

    function handleDismiss() {
        setShowToast(false);
    }

    if(showToast) {
        return (
        <div className = "toast-container" 
            style = {{animation: props.duration ? `fadein 1s, fadeout 1s ${props.duration}s` : `fadein 1s`}} 
            onAnimationEnd = {handleAnimationEnd}>

            <div>
                {props.message} 
            </div>

            <div>
                {props.dismissable && <button onClick = {handleDismiss}>Dismiss</button>}
            </div>

        </div>
        );
    }

    return null;
}