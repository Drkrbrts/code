import React from "react"

class Register extends React.Component
{
    render()
    {
        return  <div className="container">
        <div className="row">
        <div className="col-md-5"> 
        <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputFirstName" className="form-label">First Name</label>
          <input type="text" className="form-control" id="inputFirstName"/>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputLastName" className="form-label">Last Name</label>
          <input type="text" className="form-control" id="inputLastName"/>
        </div>
        <div className="col-12">
          <label htmlFor="inputEmail" className="form-label">Email</label>
          <input type="email" className="form-control" id="inputEmail" placeholder="user@example.com"/>
        </div>
        <div className="col-12">
          <label htmlFor="inputPassword" className="form-label">Password</label>
          <input type="password" className="form-control" id="inputPassword" />
        </div>
        <div className="col-12">
          <label htmlFor="inputConfirmPassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="inputConfirmPassword" />
        </div>
        <div className="col-12">
          <label htmlFor="inputAvatarUrl" className="form-label">Avatar URL</label>
          <input type="text" className="form-control" id="inputAvatarUrl" />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Sign in</button>
        </div>
      </form>
      </div>
      </div>
      </div>
    }
}

export default Register