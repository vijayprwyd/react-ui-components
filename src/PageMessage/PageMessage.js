import React, {useState} from "react";
import './pagemessage.scss';
import { Button } from "../Button/Button";

const types = {
    info: "info",
    warn: "warn",
    error: "error"
}

export function PageMessage(props) {

    const {titleText, dismissable, type, children, ...customProps} = props;
    const [show, setShow] = useState(true);

    if(!show) {
        return null;
    }

    return (

        <div  {...customProps} className = {`page-message-container ${type}-border `}>
            <i className={`fa fa-exclamation-circle icon ${types[type]}`} aria-hidden="true"></i>
            <div className = "page-message-content">
            <h3 className  = "page-message-title"> {titleText}</h3>
            {children}
    
            </div>
            <Button onClick = { () => setShow(false)}
                type = "noBorder" classNames = "page-message-button">
                <i className = "fa fa-close" ></i>

            </Button>

        </div>
    )
}