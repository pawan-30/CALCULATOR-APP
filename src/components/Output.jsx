import React from "react";
import "./Output.css";

const Output = ({value,classname}) => {
    const myclass = `${classname} text-right border border-3`;
    
    return (
            <div>
                <input className={myclass} value={value} />
            </div>
    );
};

export default Output;
