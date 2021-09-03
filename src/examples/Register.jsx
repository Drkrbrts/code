import React from "react";


class Register extends React.Component {

    onSubmitClicked = () => {
        console.log("onSubmitClicked");
    }

    render() {
        return(
            <div className="p-5 mb-4 bg-light rounded-3">
              <div className="container-fluid py-5">
                <h4>Register a user</h4>
                <form>
                    <div className="form-group">
                        <label htmlFor="inputFirstName"></label>
                        <input type="text" className="form-control" id="inputFirstName" name="inputFirstName" placeholder="First Name"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputLastName"></label>
                        <input type="text" className="form-control" id="inputLasttName" name="inputLastName" placeholder="Last Name"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputEmail"></label>
                        <input type="text" className="form-control" id="inputEmail" name="inputEmail" placeholder="Email"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword"></label>
                        <input type="new-password" className="form-control" id="inputPassword" name="inputPassword" placeholder="Password"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPasswordConfirm"></label>
                        <input type="new-password" className="form-control" id="inputPasswordConfirm" name="inputPasswordConfirm" placeholder="Retype Password"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAvatarUrl"></label>
                        <input type="url" className="form-control" id="inputAvatarUrl" name="inputAvatarUrl" placeholder="Avatar Url"></input>
                    </div>
                    <div className="form-check m-3">
                        <input type="checkbox" className="form-check-input" id="checkBox" name="checkBox"></input>
                        <label className="form-check-label" htmlFor="checkBox">
                            <b>
                                I agree to the <font color="blue">terms</font>
                            </b>
                        </label>
                    </div>
                    <button id="register" type="button" className="btn btn-primary" onClick={this.onSubmitClicked}>Submit</button>
                </form>
              </div>
            </div>
        );
    }
}

export default Register;