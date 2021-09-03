import React from "react";
import userService from "./service/userService"

class Presidents extends React.Component{ //anytime you render anyting in react its probably going to be in STATE
    state = {
        // names: ["George Washington","John Adams","Thomas Jefferson"],//dont use this array
        presidents: [{name:"George Washington"}], // use this because it is an array of objects
    };

componentDidMount(){ // set state function that takes updater function
//     this.setState((preState)=>{  //from prevState, the most updated version Only use this when we have static info but normally we do ajax calls so we have to do it a different way
//         return {mappedPresidents: preState.presidents.map(this.mapPresident)}         
// });
    userService.getPresidents().then(this.onGetSuccess).catch(this.onGetError); // performing ajax call
}
onGetSuccess = (myPresidents) =>{ //verify if response is actually an array, if it is change it to the correct name and location. make sure its not buried in .items
    console.log(myPresidents) //identify where is my array, sometimes the array is the entire object coming back. 
    this.setState((preState) =>{ //we take the array and execute .map() passing a mapper function. map() responsible for looping over the array and collecting the new array of objects and giving it back to us as map presidents
        return {mappedPresidents: myPresidents.map(this.mapPresident)};
    });
}
onGetError = (err)=> {
    console.error(err);
}

mapPresident = (onePresident) => { //this mapper function is responsible for taking one single presidnet and generating another type of object over it.
    // var result = onePresident.name;
    // return result;

    //key has to be first ELEMENT that is being RETURNED, if it is in React.Fragment, it needs to be in the React.Fragment
    return (<div key={`Presidents-${onePresident.id}`} className="card col-md-3">
    <img className="card-img-top" src="{onePresident.avatar}" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{onePresident.nm}</h5>
      <p className="card-text">{onePresident.pp}</p>
      <button className="btn btn-primary link-button">Go somewhere</button>
    </div>
    </div>
    );
};

mapPresidentSimple = (onePresident) => {
    // var result = onePresident.name;

    // return result;
    //i need to return a jsx snippet

    return <p key={`Presidents-${onePresident.id}`}>{onePresident.name}</p>; //string interpolation to create a key

};

render() {
    return(
        <div className="col-md-12 p-5">
            <h1>Presidents</h1>
            <hr />
            <div className="row"> 
                {/* <div className="col"> */}
                    {/* {this.state.presidents.map(this.mapPresident)} */} inefficient because it will encounter this array, for this exact array, it will call the map fuction. 
                      ^^when this executes, "render" could potentially be executing mutiple times. dont use this because it is STATIC
                    
                       {this.state.mappedPresidents}
                       </div>
            {/* </div> */}
         
        </div>
    );
};


}

export default Presidents;