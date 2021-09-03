import React from "react";


class Login extends React.Component { 
    render() {
  return (
    <React.Fragment>
    <div className="Login d-flex " >
      <span>User Name: </span>
     <input className=""  type="text "></input>

     <span> Password: </span>
     <input className="" type="password "></input>

    </div>
    </React.Fragment>
  )
    }

    


}

export default Login;