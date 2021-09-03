import React from "react";
import defaultExport from "./itemService"

class Items extends React.Component {

    state = {
        name : "Nerf Gun",
        manufacturer : "Hasbro",
        description : "Fire soft kid friendly foam bullets at friends and family with the fun new Nerf Gun",
        cost : 25
    }

    onToyChange = (e) => {
        let currentTarget = e.currentTarget;
        let newValue = currentTarget.value;
        let inputName = currentTarget.name;
        
        this.setState(()=>{
            let newState = {}

            newState[inputName] = newValue

            return newState;

        });
    }

    onClickHandler = () =>
    {
        var payload = this.state

        defaultExport.toys(payload)
            .then(this.onToySuccess)
            .catch(this.onToyError)

    }
    
    onToySuccess = (response) => {
        console.warn(response.data, "Successful")
    }
       
    onToyError = (errResponse) => {
        console.warn(errResponse, "Unsuccessful")
    }

  


    render () {
        return <React.Fragment>
            <div className="content">
                {/* <form onSubmit={this.handleSubmit}> */}
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" value={this.state.name} onChange={this.onToyChange} name="name" className="form-control" id="firstName" v-model="firstName" aria-describedby="firstNameHelp"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="manufacturer" className="form-label">Manufacturer</label>
                        <input type="text" value={this.state.manufacturer} onChange={this.onToyChange} name="manufacturer" className="form-control" id="lastName" v-model="lastName" aria-describedby="lastNameHelp"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" value={this.state.description} onChange={this.onToyChange} name="description" className="form-control" id="email" v-model="email" aria-describedby="emailHelp"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="cost" className="form-label">Cost</label>
                        <input type="number" value={this.state.cost} onChange={this.onToyChange} name="cost" className="form-control" id="password1" v-model="password1"></input>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.onClickHandler}>Submit</button>
                </form>
            </div>
        </React.Fragment>
    }
}

export default Items;