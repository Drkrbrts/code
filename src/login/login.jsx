import React from "react"


class login extends React.Component{
  constructor(props){
    super(props)
    this.state = {
    email:"",
    password:""
  
  }
  }
  handleChange = (event) => {
    this.setState({[event.target.email]: event.target.value});
    this.setState({[event.target.password]: event.target.value});

  }
  handleSubmit = (event) => {
    alert('A form was submitted: ' + this.state);

    fetch("https://api.remotebootcamp.dev/api/users/login", {
        method: 'POST',
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(this.state)
      }).then(function(response) {
        console.log(response)
        return response.json();
      });

    event.preventDefault();
}

render()
{
  return <React.Fragment>
    <div className="base-container">
        <div className = "col-sm-6 offset-sm-3">
        <div className="header"><h1>Register</h1></div>
        </div>
        <div className="content">
       
        <form onSubmit={this.handleSubmit}>
          <div  className="form-group">
           
              
              <label htmlFor="email" >Email</label>
              <input type="text"  placeholder="email" value={this.state.value} name="email" onChange={this.handleChange} ></input>
            
              
              
              <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password"  placeholder="password" value={this.state.value} name="password" onChange={this.handleChange} ></input>
              </div>
              
             
              
              
            
    
            <button type="submit" value="Submit" className="btn btn-primary" >log In</button>
            </div>
           
            </form>
        </div>
      </div>






  </React.Fragment>
}


}
export default login