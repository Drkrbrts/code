import React from "react";


class Car extends React.Component {


    carFilter = (car) => {
        console.log(car.year);
        if (parseInt(this.props.year) === 1) {
            return true;
        } if (parseInt(this.props.year) === car.year) {
            return true;
        }
    }

    carMap = (car) => {     
            return ( 
                <div key={car.make.concat(car.model, car.year)} className={this.props.render ? "card col-md-3 m-1" : "d-none"} style={{width: "30%", float: "left", marginRight: "5px"}}>
            <div className="card-body">
                <h5 className="card-title" name="make">{car.make}</h5>
                <h5 className="card-text" name="model">{car.model}</h5>
                <h5 className="card-text" name="year">{car.year}</h5>
            </div>
        </div>   

            )
    }


    render() {

        return (
            <div>
                        <span>
                            {this.props.cars.filter(this.carFilter).map(this.carMap)}
                        </span>
                    </div>
        )
    }


}




export default Car;