import React from "react";

function SingleCar(props) {

    const car = props.myCar;

    return (

        <div className="card col-md-3 m-1">
        <div className="card-body">
                   <h5 className="card-title">Make: {car.make}</h5>
                   <h5 className="card-text">Model: {car.model}</h5>
                   <h5 className="card-text">Year: {car.year}</h5>
        </div>
        </div>

    );
}

export default SingleCar;