// import { H } from "jest-haste-map";
import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import debug from "sabio-debug";
import { userService } from "../services/userService";
import PersonCard from "./PersonCard";
import { friendsService } from "../services/friendsService";
// const _logger = debug.extend("App")
// const _loggerPage = _logger.extend("SPA")

class Friends extends React.Component {

    
    constructor(props) {
        super(props);
        this.state = {
            people: [{
                title: "testTitle",
                id: 1,
                first_name: "fakeFirstName",
                last_name: "fakeLastName",
                email: "fakeemail@gmail.com",
                gender: "Male"
              }, ],
              mappedPeople: []
            
        };
    } 

componentDidMount(){
 friendsService.showAll()
 .then(console.log("Working"))
 .catch(console.log("not working"))
}

renderPeople = () => {
    this.setState(prevState => {
        return{
            ...prevState,
            mappedPeople: prevState.people.map(this.mapPerson),
        }
    })
}
    mapPerson = (person) => (
        <PersonCard person={person}
        // key={person.id} 
        // handleDelete={this.handleDelete} 
        />
    )

    handleDelete = (id) => {
        console.log(id)
        // userService.delete(id).then().catch()
        // make the delete api call using something like this
    }

    

    
    render(){
        return(
           <React.Fragment>
                <input className="btn btn-info"
                 type="submit"
                value="Show All Friends"
                onClick={this.renderPeople}  
                  ></input>

            <div>{this.state.mappedPeople}</div>
            </React.Fragment>



      )
    }
}

export default Friends            


