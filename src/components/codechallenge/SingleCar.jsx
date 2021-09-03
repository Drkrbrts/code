import React from "react"


function SingleCar(props) {
    console.log(props);
    const oneCar = props.car;

    


return (
    <div className="card col-md-3 m-1">
        <div className="card-body">
        <h5 className="card-title">{oneCar.make}</h5>
        <h5 className="card-text">{oneCar.model}</h5>
        <h5 className="card-text">{oneCar.year}</h5>
        </div>
    </div>
);

}



export default React.memo(SingleCar); //memo instad of coming thru entire function call, if youre passing it the same props, it will not bother calling function at all, it will return output from pevious render