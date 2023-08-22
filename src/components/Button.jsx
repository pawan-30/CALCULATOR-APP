import React from 'react'
import "./Button.css";

const Button = ({fn, text, classname}) => {
    const myclass = `${classname} text-center m-1`;
    return (
        <button onClick={()=>{fn(text)}} className={myclass}>{text}</button>
    )
}

export default Button