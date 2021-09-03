import React from "react"; 

class Presidents extends React.Component {

    state = {
        names: ["George Washington", "John Adams", "Thomas Jefferson"], 
        presidents: [{ name: "George Washington", id: 1 }, 
                     { name: "John Adams", id: 2 },   
      ], 
    }; 

    componentDidMount() {}
        mapPresident = (onePresident) => {
            return <p key={`Presidents-${onePresident.id}`}>{onePresident.name}</p>
        }; 
    

    render() {
        return (
            <div className="col-md-12 p-5">
                <h1>Presidents</h1>
                <hr />
                <div className="row">
                    <div className="col">
                        {this.state.presidents.map(this.mapPresident)}
                    </div>
                </div>
            </div>
        ); 
    }
}

export default Presidents; 