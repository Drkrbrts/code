import React from "react";


class Fruits extends React.Component {
    state = {
        fruits: [0],
    };

    render() {

        return  <div>Fruits are gonna be here.
            <strong> {this.state.fruits.length}</strong>
        </div>;
    }


}

export default Fruits;