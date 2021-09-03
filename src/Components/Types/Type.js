import React, {Component} from "react";
import Types from "./Types";

class Type extends Component {
    state = {
        name: "John Doe",
        age: 30,
        hasCar: true
    };

    render() {
        return(
            <>
            <Types
            name={this.state.name}
            age={this.state.age}
            hasCar={this.state.hasCar}
            />
            </>
        )
    }
}


export default Type;