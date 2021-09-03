import React from "react";
// import defaultExport from "../services/userService"



class register extends React.Component{
 state = {
   formData: {
    firstName:"austin",
    lastName: "powers",
    email: "powers@gmail.com",
    password: "Ac020302!!",
    passwordConfirm: "Ac020302!!",
    avatarUrl: "https://gravatar.com/avatar/f1e4149fe365f6c0534e703ba994e3c8?s=400&d=robohash&r=x",
    
   },


 }


  // onClickHandeler(){
  //   var payload = {
  //     firstName:"yello",
  //   lastName:"powers",
  //   email:"powers@gmail.com",
  //   password:"Ac020302!!",
  //   passwordConfirm:"Ac020302!!",
  //   avatarUrl:"https://gravatar.com/avatar/f1e4149fe365f6c0534e703ba994e3c8?s=400&d=robohash&r=x",
    
  // }
  // defaultExport.Register(payload)
  // .then(this.onRegisterSuc)
  // .catch(this.onRegisterErr)
      
  // }
  // onRegisterSuc = (response) => {
  //   console.log(response.data, "succsessful")

  // }
  // onRegisterErr = (errResponse) => {
  //   console.warn(errResponse, "Error")
   
  // }
  handleChange = (e) =>{
    let currentTarget =e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() =>{
      let formData = {...this.state.formData};
      formData[inputName]= newValue;
      return { formData }
  
    } )


  }
  





 

   
    render()
    {
      return<React.Fragment>
        <div className="base-container">
        <div className = "col-sm-6 offset-sm-3">
        <div className="header"><h1>Register</h1></div>
        </div>
        <div className="content">
       
        <form onSubmit={this.handleSubmit}>
          <div  className="form-group">
            
              <label   htmlFor="firstName" id="firstName" >First Name</label>
              <input  type="text"  placeholder="firstName" value={this.state.formData.firstName}  name="firstName" onChange={this.handleChange} ></input>
              
              </div>
             
              <div className="form-group">
              <label htmlFor="lastName" id="lastName">Last Name</label>
              <input type="text"  placeholder="lastName" value={this.state.formData.lastName} name="lastName" onChange={this.handleChange} ></input>
              </div>
              
              
              <label htmlFor="email" >Email</label>
              <input type="text"  placeholder="email" value={this.state.formData.email} name="email" onChange={this.handleChange} ></input>
            
              
              
              <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password"  placeholder="password" value={this.state.formData.password} name="password" onChange={this.handleChange} ></input>
              </div>
              
             
              <div className="form-group">
              <label htmlFor="password">Password Confirm</label>
              <input type="password"  placeholder="Password Confirm" value={this.state.formData.passwordConfirm} name="passwordConfirm" onChange={this.handleChange} ></input>
              </div>
              
              
              <div className="form-group">
              <label htmlFor="avatarUrl">Avatar Url</label>
              <input type="text"  placeholder="Avatar Url" value={this.state.formData.avatarUrl} name="avatarUrl" onChange={this.handleChange} ></input>
              </div>
         
          
    
            <button type="button" value="Submit" className="btn btn-primary" onClick={this.onClickHandeler} >Register Now</button>
            
           
            </form>
        </div>
      </div>
      </React.Fragment> 
    
    }
    
    
    }


  
export default register





//   constructor(props){
//     super(props)
//     this.state = {
//     firstName:"",
//     lastName:"",
//     email:"",
//     password:"",
//     passwordConfirm:"",
//     avatarUrl:""
//   }
//   }

//   handleChange = (event) => {
//     this.setState({[event.target.firstName]: event.target.value});
//     this.setState({[event.target.lastName]: event.target.value});
//     this.setState({[event.target.email]: event.target.value});
//     this.setState({[event.target.password]: event.target.value});
//     this.setState({[event.target.passwordConfirm]: event.target.value});
//     this.setState({[event.target.avatarUrl]: event.target.value});
    
//   }

//   handleSubmit = (event) => {
//     alert('A form was submitted: ' + this.state);

//     fetch('https://api.remotebootcamp.dev/api/users/register', {
//         method: 'POST',
        
//         body: JSON.stringify(this.state)
//       }).then(function(response) {
//         console.log(response)
//         return response.json();
//       });

//     event.preventDefault();
// }