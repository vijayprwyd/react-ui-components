import React, { useState } from "react";
import "./tabs.scss";

export function Tabs(props) {

    const [component, setComponent] = useState(props.children[0]);

    const tabSection = React.Children.map(props.children, (child) => {
        return <button className = {`tab-buttons ${component === child ? "tab-active" : ""}`} onClick={() => setComponent(child)}>{child.props.title}</button>
    });
    return (
        <>
            <div className="tab-container">
                {tabSection}
            </div>

            {component}
        </>
    );
}