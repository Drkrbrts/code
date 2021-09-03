import React from "react";

/* Functional component usually for CHILD
pass PROPS 
Child component must use PROPS not THIS

PROPS communicate parent to child and child to parent
Ref a function called changeName(). 
This function gets called in the parent. 
When it gets called, it setState, and changes whatever needs to be changed.
*/


const Bird = (props) => {
    
    const handleName = () =>{props.changeName("Yellow",props.bird.id);
    }


return(
    <div className= "py-4 px-4">   
    <h3>{props.bird.name}</h3>
    <button className="btn btn-success" onClick={handleName}>Change Name</button>
    </div>
);

};

export default Bird;