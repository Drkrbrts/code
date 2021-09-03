import React from 'react';
import defaultExport from "../services/userService"
import { ToastContainer, toast } from 'react-toastify';
// import LogHeader from "../LRheader"


class home extends React.Component
{
    state = {
            name: '',
        }
    

  componentDidMount()
  {
    defaultExport.getUser()
    .then(this.currentUserSuc)
    .catch(this.currentUserErr)

  }
  currentUserSuc = (response) =>
  {
      console.log(response.data, "Succsessful")
      this.setState((prevState)=>
      {
          return{...prevState, name: response.data.item.name }
    
    
      })

  }
  currentUserErr = (errorResponse) =>
  {
    console.log(errorResponse, "Unsuccsessful")

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
        return <React.Fragment>
          <div>
            
          </div>
          <div role="main">
  <div className="container">
    <div className="row">
    <div className="col-mb-5 p-5">
              
              <h1> welcome {this.state.name} !! </h1>
              
              
              
              
            </div>
          </div>
          </div>
          </div>
           
  


      <ToastContainer/>
      {/* <h1> welcome {this.state.name} </h1> */}








        </React.Fragment>
    }
}
export default home