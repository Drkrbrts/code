import React from "react"

class CarsForm extends React.Component{
    
        // not sure how to hide the cars with the same button, will come back to this
        // if I have time at the end of the assesment. 

    render(){
        return(
        <React.Fragment>
        <div className="card col-md-3 m-1">
        <div className="card-body">
                   <h5 className="card-title">{`${this.props.car.make}`}</h5>
                   <h5 className="card-text">{`${this.props.car.model}`}</h5>
                   <h5 className="card-text">{`${this.props.car.year}`}</h5>
                   
        </div>
        {/* <div className="card-body">
        </div> */}

    </div>
    </React.Fragment>
    )
    }
}

export default CarsForm 