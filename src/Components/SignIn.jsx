import React from "react"


class SignIn extends React.Component {
    render() {
        return (

            <form>
                <div class="form-group">
                    <label for="exampleImputEmail1">Email Address</label>
                    <input type="email" class="form-control" id="exampleImputEmail1" placeholder="Enter Email"></input>
                    <small id="emailHelp" class="form-text text-muted">Example text</small>
                </div>
                <div class="form-group">
                    <label for="exampleImputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleImputPassword1" placeholder="Enter Password"></input>
                    <small id="passwordHelp" class="form-text text-muted">Don't put your birthday, please</small>
                </div>
                <div>
                    <button type="submit" class="btn btn-primary">Sign In</button>
                </div>
            </form>
          )
    }
}

export default SignIn