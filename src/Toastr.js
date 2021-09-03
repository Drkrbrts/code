import React, { Component } from 'react';    
import { ToastContainer, toast } from 'react-toastify';    
import 'react-toastify/dist/ReactToastify.css';    
import './App.css';    

class Toastr extends Component {    
  render(){    
    return (    
      <div>    
        
        <button  className="btn btn-success btnspace" onClick={()=>toast.success('Registration Success')}> Success Message</button>    
        <button  className="btn btn-danger btnspace" onClick={()=>toast.error('Registration Failed')}>Error Message</button>    
        <ToastContainer />    
      </div>    
    );    
  }    
}    
export default Toastr   

