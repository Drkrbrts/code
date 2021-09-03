import React from "react"



class Birds extends React.Component {
    state = {
        birds: [
            {id:1, name: "Twitty"},
            {id:2, name: "Blue"},
            {id:3, name: "Red"},
        ]
    }

    changeName = (name, id)=> {
        this.setState(prevState => {

            const birds = [...prevState.birds]
            let index = birds.findIndex(bird => bird.id)
            birds[index].name = name;

            return {birds}
        })
    }


    mapBird = (bird) => (
        <h3 key={bird.id}>{bird.name}</h3>
    )

    render() {
        return (
            <div>
                <h1>Birds</h1>
                {this.state.birds.map(this.mapBird)}

            </div>
        );
    }
};    

export default Birds;