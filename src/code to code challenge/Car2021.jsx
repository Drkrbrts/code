import React from "react"


function Car2021 (props)
{
    const car = props.car;
    if (car.year === 2021)
    {
        return(
            <div className="card col-md-3 m-1" key={car.model}>
                <div className="card-body">
                    <h5 className="card-title">{car.make}</h5>
                    <h5 className="card-text">{car.model}</h5>
                    <h5 className="card-text">{car.year}</h5>
                </div>
            </div>
        )
    }
    
}

export default Car2021