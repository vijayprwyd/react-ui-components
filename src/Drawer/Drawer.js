import React, {useState, useEffect} from "react";
import "./drawer.scss";

export function Drawer(props) {


    const [show, setShow] = useState(false);
    useEffect(() => {

        setTimeout(() => {
            setShow(true);
        }, 0);

    }, []);

    function handleClose() {
        console.log("Closed");
        setShow(!show);
    }


    return (
        <>
            <div className= {` drawer-container ${show ? "drawer-show" : "drawer-hide"}`}>
                
                <button onClick = {handleClose} className = "swipe-right">
                    <i className=" drawer-icon fa fa-angle-right" style = {{fontSize: "25px", color: "inherit"}}></i>
                </button>


                <div className = "drawer-body">
                    <div className = "drawer-header">
                        <button className="drawer-close" onClick={handleClose}>
                        <i className = "fa fa-close" ></i>

                        </button>
                    </div>
                    <h3 align = "center">Title</h3>

                {props.children}

                </div>
            </div>
        </>
    );
}