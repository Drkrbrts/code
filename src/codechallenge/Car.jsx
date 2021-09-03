import React from "react";

function Car(props)
{
    return (
        <div className="card col-md-3 m-1">
            <div className="card-body">
                    <h5 className="card-title">{props.oneCar.make}</h5>
                    <h5 className="card-text">{props.oneCar.model}</h5>
                    <h5 className="card-text">{props.oneCar.year}</h5>
            </div>
        </div>                   
    );
}

export default Car;