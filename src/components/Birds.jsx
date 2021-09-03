import React from "react";
import Bird from "./Bird";


/* Class component usually for PARENT 
use THIS

if you want to ref something in an array, you are going to use INDEX
KEY should be unique

MAP on Class Component

*/

class Birds extends React.Component{

    state = { //we have 1 array of 3 objects
        birds:[
            { id: 1, name: "Twitty" },
            { id: 2, name: "Blue" },
            { id: 3, name: "Red" },
        ],
    };

    changeName = (name, id) => {
        this.setState(prevState => {

            const birds = [...prevState.birds]
            let index = birds.findIndex(bird => bird.id === id)
            birds[index].name = name;

            return{birds}
        })
    }


    mapBird = (bird) => ( //passing props of 1 bird
        <Bird key={bird.id} //must have unique key, in this case it is an id
        bird={bird} 
        changeName={this.changeName}/>
    )

    render() {
        return (
            <div>
                <h1>Birds</h1>
                {this.state.birds.map(this.mapBird)}
            </div>
        );
    }
}
    export default Birds;