import React from "react";
import App from "./Sandbox.jsx"


const TaskCard = ({children}) => {
    return (
        <div className="d-flex justify-content-between col-6">
            <h2>{children}</h2>
            <h2 className="closeBtn">X</h2>
        </div>
    )
}

export default TaskCard

