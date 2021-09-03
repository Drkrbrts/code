import React from "react";

class CarTemplate extends React.Component
{


    render()
    {

        return (
            <div className="card col-md-3 m-1">
                <div className="card-body">
                    <h5 className="card-title">{this.props.carInfo.make}</h5>
                    <h5 className="card-text">{this.props.carInfo.model}</h5>
                    <h5 className="card-text">{this.props.carInfo.year}</h5>
                </div>
            </div>
        )
    }
};

export default CarTemplate;