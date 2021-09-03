import React from "react"

const Button = () => {
    const onClick = () => {
        console.log('Click')
    }


    return (
        <button
            onClick={onClick}
            className="btn"
        >Button</button>
    )
}




export default Button;