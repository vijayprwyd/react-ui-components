import React, {useState} from "react";
import "./modal.scss";

export function Modal(props) {

    const {dismissable, children} = props;
    const [show, setShow] = useState(true);


    if(!show) {
        return null;
    }

    return (
        <div className="modal-container">
            <div className="modal-dialog" >
                {
                    dismissable &&
                    <div className="modal-action-container">
                        <button onClick = {() => setShow(false)}>
                            <i className="fa fa-close" ></i>

                        </button>
                    </div>
                }
                {children}
            </div>
        </div>
    );
}