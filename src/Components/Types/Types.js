import React from "react";
import PropTypes from "prop-types";

const Types = props => {
    return(
        <div className="col-sm-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Name: {props.name} </h5>
                    <p className="card-text" onClick= {props.logAge}>
                    {props.age}
                    </p>
                    <p className="card-text">Has Car: {props.hasCar}</p>
                </div>
            </div>
        </div>
    )
}

Types.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    hasCar: PropTypes.bool,
    logAge: PropTypes.func
};

export default Types;