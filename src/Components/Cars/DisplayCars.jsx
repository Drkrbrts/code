import React from "react";
import "./CarStyles/cars.scss";

const DisplayCars = props => {
    let aCar = props.car;
    return (
        <div className="card col-md-3 m-1">
            <div className="card-body c">
                <h5 className="card-title">{aCar.make} </h5>
                <h5 className="card-text">{aCar.model}</h5>
                <h5 className="card-text">{aCar.year}</h5>
            </div>
        </div>
    );
};

export default DisplayCars;
