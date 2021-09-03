import React from "react";
import logIn from "../services/userService";

class Content extends React.Component
{
    componentDidMount()
    {
        console.log("componentDidMount");
        this.onClickHandler();
    }
    // userData = {
    //   email: "user@google.com",
    //   password: "password"
    // };

    onClickHandler = () =>
    {
        const data = {
            email: "david@example.com",
            password: "!Dd123456",
            tenantId: "david@example.com"
        }

        logIn(data)
            .then(this.onLogInSuccess)
            .catch(this.onLogInError);
    }

    onLogInSuccess = (response) =>
    {
        console.log(response)
        console.log("Success!")
    }

    onLogInError = (response) =>
    {
        console.log(response)
    }

    displayMessage = () =>
    {
        console.log("This is a message");
    }

    state = {
        formData: {
            firstName: "Koree",
            lastName: "Scott",
            email: "email@example.com",
            color: 0,
            agree: true
        },
        otherProp: true,
        randomArray: []

    }

    onFormFieldChanged = (e) =>
    {
        let currentTarget = e.currentTarget;
        let newValue = currentTarget.type === "checkbox" ? currentTarget.checked : currentTarget.value;
        let inputName = currentTarget.name; // firstName or lastName, depending on which you click.
        console.log(inputName)

        this.setState(() =>
        {       // use bracket notation! dot notation does NOT WORK!
            let newState = { ...this.state.formData }; // copying an object from state that we want to change.
            newState[inputName] = newValue;            // changing the copy by assigning it newValue.
            return { formData: newState };              // returning what we copied, and specifiying where we want it to go.
        })
        // ^^^^^ this works just like a Github project.

        // the modern way to do this...
        // this.setState(() =>
        // {
        //     let formData = { ...this.state.formData };
        //     formData[inputName] = newValue;     
        //     return { formData };    AKA   return { formData: formData }
        // })

    }

    render()
    {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 p-5">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="firstName" className="form-label">First Name:</label>
                                <input type="text"
                                    className="form-control"
                                    id="firstName"
                                    name="firstName"
                                    value={this.state.formData.firstName}
                                    onChange={this.onFormFieldChanged} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lastName" className="form-label">Last Name:</label>
                                <input type="text"
                                    className="form-control"
                                    id="lastName"
                                    name="lastName"
                                    value={this.state.formData.lastName}
                                    onChange={this.onFormFieldChanged} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input type="email"
                                    className="form-control"
                                    name="email"
                                    value={this.state.formData.email}
                                    onChange={this.onFormFieldChanged} />
                            </div>
                            <label htmlFor="email" className="form-label">Select Color:</label>
                            <select onChange={this.onFormFieldChanged}
                                name="color"
                                className="form-select"
                                aria-label="Default select example"
                                value={this.state.formData.color}>
                                <option value="0">Red</option>
                                <option value="1">Orange</option>
                                <option value="2">Yellow</option>
                                <option value="3">Green</option>
                            </select>
                            <div className="form-check">
                                <input onChange={this.onFormFieldChanged}
                                    value="1013"
                                    checked={this.state.formData.agree}
                                    className="form-check-input"
                                    type="checkbox"
                                    name="agree" />
                                <label className="form-check-label" htmlFor="agree">
                                    I agree to the terms and conditions.
                                </label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>

                <hr />
            </div>
        )
    }
}

export { Content };