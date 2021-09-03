import React from "react";
import defaultExport from "./services/userService"
import { ToastContainer, toast } from 'react-toastify';



class header extends React.Component{
onClickLogin = (e) =>{
  
  
  console.log("login  was clicked");
  this.props.history.push("/login" )

}
onClickSignUp = (e) => {
  console.log("signUp  was clicked");
  this.props.history.push("/signUp" )


}
onHomeClick = (e) => {
  this.props.history.push("/home")

}
onFriendsClick = (e) => {
  this.props.history.push("/friends")

}
onBlogsClick = (e) => {
  this.props.history.push("/blogs")

}
onTechClick = (e) => {
  this.props.history.push("/tech")

}
onJobsClick = (e) => {
  this.props.history.push("/jobs")

}
onEventsClick = (e) => {
  this.props.history.push("/events")

}
onCarsClick = (e) =>{
  this.props.history.push("/car")
}
onClickLogOut = () =>
{
  console.log("log me out")
  defaultExport.logOut()
  .then(this.onLogOutSuc)
  .catch(this.onLogOutErr)
  this.props.history.push("/Login" )
}
onLogOutSuc = (response) =>
{
  console.log(response)
  toast.success('🦄 you are logged out!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });

}
onLogOutErr = (errorResponse) =>{
  console.log(errorResponse, "Unsuccsessful")
  toast.error('🦄 Wow you suck!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });




}




    render(){
      console.log("Rendering Buttons")

        return<React.Fragment>
       <header className="p-3 bg-dark text-white">
            <div className="container">
  <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
    <a
      href="/"
      className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
    >
      
    </a>

    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
      <li>
        <button
          href="#"
          className="nav-link px-2 text-white link-button"
          onClick={this.onHomeClick}
        >
          Home
        </button>
      </li>
      <li>
      <button className="nav-link px-2 text-white link-button">
      
        </button>
      </li>
      
      <li>
        <button
          href="#"
          className="nav-link px-2 text-white link-button"
          onClick={this.onFriendsClick}
        >
          Friends
        </button>
      </li>
      <li>
        <button
          href="#"
          className="nav-link px-2 text-white link-button"
          onClick={this.onBlogsClick}
        >
          Blogs
        </button>
      </li>
    
    <li>
        <button
          href="#"
          className="nav-link px-2 text-white link-button"
          onClick={this.onTechClick}
        >
          Tech companies
        </button>
      </li>
      <li>
        <button
          href="#"
          className="nav-link px-2 text-white link-button"
          onClick={this.onJobsClick}
        >
          Jobs
        </button>
      </li>
      <li>
        <button
          href="#"
          className="nav-link px-2 text-white link-button"
          onClick={this.onEventsClick}
        >
          Events
        </button>
      </li>
      <li>
        <button
          href="#"
          className="nav-link px-2 text-white link-button"
          onClick={this.onCarsClick}
        >
          Cars
        </button>
      </li>
      
    </ul>

   

    <div className="text-end">
      <button type="button" className="btn btn-outline-light me-2" onClick={this.onClickLogin} >Login</button>
      <button type="button" className="btn btn-outline-danger me-2" onClick={this.onClickLogOut} >Log-out</button>
      <button type="button" className="btn btn-warning" onClick={this.onClickSignUp}> Sign-up</button>
      
    </div>
  </div>
  
</div>
<div>

</div>
</header>
<div>
  <div>
      <ToastContainer/>
  </div>
</div>












</React.Fragment>
    }


}
export default header