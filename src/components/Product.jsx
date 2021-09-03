import React, {Component} from "react";
import * as entityService from "../services/entityService"
import { toast } from "react-toastify";



class Product extends Component {


    state = {
        name : "",
        age : "",
        breed : "",
        favoriteSnack : "",
        avatar : "", 
    }

    onSubmitClicked = (e) => {
        e.preventDefault(); 
        console.log("onSubmitClicked", "button firing ok");

        entityService.addDog(this.state)
          .then(this.onAddDogSuccess)
          .catch(this.onAddDogError)

    }



    onAddDogSuccess = (response) => {
        toast.success("New dog added!")
        console.log("onAddDogSuccess", response);

    }


    onAddDogError = (err) => {
        toast.error("Please fill out the indicated fields")
        console.error("onAddDogError", err);
    }


    onFormFieldChanged = (e) => {
        let currentTarget = e.currentTarget;
        let newValue = currentTarget.value;
        let inputName = currentTarget.name;
    
        this.setState(() => {
          let newState = {};
    
          newState[inputName] = newValue;
          console.log({ newState });
    
          return newState;
        });
      };
    

    render() {
        return (
            <React.Fragment>
                <main
                role="main"
                style={{
                    marginTop: "100px",
                    marginLeft: "100px",
                    marginRight: "100px",
                }}
                >
                <div className="container p-5">
                    <div className="row">
                        <div className="col-md-5 p-5">
                            <form>
                            <div className="mb-3">
                                <label className="form-label">
                                Name
                                </label>
                                <input
                                className="form-control"
                                name="name"
                                onChange={this.onFormFieldChanged}
                                value={this.state.name}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                Age
                                </label>
                                <input
                                className="form-control"
                                name="age"
                                onChange={this.onFormFieldChanged}
                                value={this.state.age}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                Breed
                                </label>
                                <input
                                className="form-control"
                                name="breed"
                                onChange={this.onFormFieldChanged}
                                value={this.state.breed}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                Favorite Snack
                                </label>
                                <input
                                className="form-control"
                                name="favoriteSnack"
                                onChange={this.onFormFieldChanged}
                                value={this.state.favoriteSnack}
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">
                                Avatar
                                </label>
                                <input
                                className="form-control"
                                name="avatar"
                                onChange={this.onFormFieldChanged}
                                value={this.state.avatar}
                                />
                            </div>

            
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    onClick={this.onSubmitClicked}
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
        
                    <hr />
                </div>
                </main>
            </React.Fragment>
        );  
    }; 
}

export default Product; 