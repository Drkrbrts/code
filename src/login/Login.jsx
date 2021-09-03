import React from "react"

class Login extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.email]: e.target.value})
        this.setState({[e.target.password]: e.target.value})
    }

    handleSubmit = (e) => {
        alert("A form was submitted:" + this.state);

        fetch("https://api.remotebootcamp.dev/api/users/login", {
            method: "POST",
            body: JSON.stringify(this.state)
        }).then(function(response) {
            console.log(response)
            return response.json();
        })
        e.preventDefault();
    }

    render(){
        return <React.Fragment>
            <div className="header p-5">Login</div>
            <div className="content">
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email1" className="form-label">Email address</label>
                        <input type="email" value={this.state.value} name="email" onChange={this.handleChange} className="form-control" id="email1" aria-describedby="emailHelp"></input>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" value={this.state.value} name="password" onChange={this.handleChange} className="form-control" id="password"></input>
                    </div>
                </form>
                <div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </div>
        </React.Fragment>

    }
}

export default Login

