import React from "react";
import {Route} from "react-router-dom";
import Show from "./car"


class car extends React.Component{
    
    onShowCars =(e) =>{
        this.props.history.push("/show")

        
    }

    render(){
        return(
            <div className = "col-md-12 p5">
                <h1>Cars</h1>
                <div className="row">
                <button id="showFriends" type="button" className="nav-link px-2 text-black link-button" onClick={this.onShowCars}>Show Cars</button>
                {/* {this.state.cars.map(this.mapCars)} */}


                </div>
                <Route path="/show" exact={true} component={Show}></Route>
                </div>
                
        )
    }
}
export default car