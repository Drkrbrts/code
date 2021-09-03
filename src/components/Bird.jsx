import React from "react"

const Bird = (props) => {

    const handleName = () => {
        props.changeName( "Yellow", props.bird.id,);
    }


    return( 
        <div className="py-4 px-4">
            <h3>{props.bird.name}</h3>
            <button className="btn btn-success" onClick={handleName}>Change Name</button>
        </div>
    );
};

export default Bird;