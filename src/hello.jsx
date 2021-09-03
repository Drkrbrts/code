import React (from "react")

import service from "./services/userService" 
// this is NOW the ajax we are called to do for Friends Component, friendService!!!!

import SingleFriendship from "./SingleFriendship"



class Friendships extends React.Component {

    state ={
    names: ["George Washington", "John Adams", "Thomas Jefferson"]
    friendships: [{ president:1, pp: None, Federalist, tm: "1789-1797" , id:1}
    ,{ name: "George Washington", president:1, pp: "None, Federalist", tm: "1789-1797", id:1, avatar:"https://bit.ly/37jsxtG"}
    , {name: "John Adams",president:1, pp: None, Federalist, tm: "1789-1797", id:1, avatar:"https://bit.ly/3A6UQrp"}
    ,{ name: "Thomas Jefferson",president:1, pp: None, Federalist, tm: "1789-1797", id:1, avatar:"https://bit.ly/2WMUiIN"}]
}
///  THIS IS NO LONGER NEEDED BECAUSE WE ARE DOING AN AJAX CALL FOR NOW FRESH CHANGING DATA FROM FRIENDS api!!!!!

componentDidMount() {

    //  THIS IS NO LONGER HERE BECAUSE WE ARE GOING TO USE AJAX CALL FRIENDS API
    // this.setState((preState)=>{
    //     return {mappedFriendships: preState.friendships.map(this.mapPresident)}
    // })
    service.getFriendships().then(this.onGetSuccess).catch(onGetError)
}

onGetSuccess =(myFriendships) =>{
    console.log(myFriendships)
        this.setState((preState)=>{
        return {mappedFriendships: myFriendships.map(this.mapFriendship)}
    })
}

onGetError =() =>{
    console.error(err)
}


onFrenClick =(e) =>{
    console.log(e.currentTarget, dataset)
    console.log(e.currentTarget, dataset, frenId)
    // data-pres-id
    //presId (it got camelCased)
}

onFrenClickFull =(fren) =>{
    console.log(fren)

}

    mapFriendship = (oneFriendship) =>{
    
        return (
            
        <React.Fragment key={`Friendships-${oneFriendship.id}`}>
            <SingleFriendship friendship={oneFriendship} onClick={this.onFrenClickFull}></SingleFriendship>

        </React.Fragment>
        )
    }
    // onClick={this.onFrenClick}


    mapFriendshipSimple =(oneFriendship)=>{  
            return <p key={`Friendships-${oneFriendship.id}`}>{oneFriendship.name}</p>
        }
    
    
    render () {
        return (
            <div className = "col-md-12 p-5">
            <h1>Friendships</h1>
            <hr />

            <div className ="row">
     {/*this.state.friendships.map(this.mapFriendship) */}
     {this.state.mappedFriendships}
            
            </div>
            </div>
           
        )
        
    }
}

export default Friendships