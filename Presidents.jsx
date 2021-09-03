import React from "react"

class Presidents extends React.Component {
    state = {
        names: ["George Washington", "John Adams", "Thomas Jefferson"],
        presidents: [[
            {
                "id": 1,
                "president": 1,
                "nm": "George Washington",
                "pp": "None, Federalist",
                "tm": "1789-1797"
            },
            {
                "id": 2,
                "president": 2,
                "nm": "John Adams",
                "pp": "Federalist",
                "tm": "1797-1801"
            },
            {
                "id": 3,
                "president": 3,
                "nm": "Thomas Jefferson",
                "pp": "Democratic-Republican",
                "tm": "1801-1809"
            },]
    };

    componentDidMount() {}
    
    
    mapPresident = (onePresident) => {
            return <p key={`Pres-${onePresident.id}`}>{onePresident.nm}</p>
        }
    

    render() {
        return (
            <div className="col-md-12 p-5">
                <h1>Presidents</h1>
                <hr/>
                <div className="row">
                    <div className ="col">
                        {this.state.presidents.map(this.mapPresident)}
                    </div>
                </div>
            </div>
        );
    }
}