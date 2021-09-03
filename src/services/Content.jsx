import React from "react";

function ContentButton()

{ function clickHandler(){
    console.log("button click")
}
    return (
        <button onClick={clickHandler} className="btn btn-secondary">View details &raquo;</button>
    )
}

export default ContentButton;