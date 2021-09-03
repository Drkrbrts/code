import React from "react";
import * as FriendService from "../services/FriendService";

class Presidents extends React.Component {

    state = {
        names: ["George Washington", "John Adams", "Thomas Jefferson"],
        presidents: [
            {
            id: 1,
            president: 1,
            nm: "George Washington",
            pp: "None, Federalist",
            tm: "1789-1797"
            },
            {
            id: 2,
            president: 2,
            nm: "John Adams",
            pp: "Federalist",
            tm: "1797-1801"
            },
            {
            id: 3,
            president: 3,
            nm: "Thomas Jefferson",
            pp: "Democratic-Republican",
            tm: "1801-1809"
            },
        ]};
    
    
    componentDidMount() {
        FriendService.getPaginated().then(this.onGetSuccess).catch(this.onGetError);
    }
    
    onGetSuccess = (response) => {
        console.log(response);
        
        this.setState((preState) => {
            return {mappedPresidents: preState.presidents.map(this.mapPresidents) };
        });
    };
    
    onGetError = (err) => {
        console.error(err)
    };
    
    mapPresidents = (onePresident) => {
    return (
        <React.Fragment key={`Pres-${onePresident.id}`}>
        <div className="card col-md-3">
                    <img src="{onePresident.avatar}" className="card-img-top" alt="..."></img>
                    <div className="card" style={{width: "18rem"}}>
                    <div className="card-body">
                        <h5 className="card-title">{onePresident.nm}</h5>
                        <p className="card-text">
                            Here
                        </p>
                        <button href="#" className="btn btn-primary">Go somewhere</button>
                     </div>
                </div>
                </div>
        </React.Fragment>
        );
    };

    render() {
        return(
            <div className="col-md-12 p-5">
            <h1>Presidents</h1>
            <hr />
            <div className="row">
                {this.state.presidents.map(this.mapPresidents)}
            </div>
            </div>
        );
    }
}

export default Presidents;