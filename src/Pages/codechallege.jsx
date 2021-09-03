import React from 'react'
import { codeChallegePost } from '../ajax';
import '../Styles/registration.css'
import {toast} from "react-toastify"

class Codechallege extends React.Component{

    state= {
        formData :{
            name : ''
            ,manufacturer : ''
            ,description : ''
            ,cost : ''
        }
    }



    onChangeState = (e) =>{
        let target = e.currentTarget
        let newValue = target.value;
        let inputName = e.currentTarget.name;
        this.setState(()=>{
          let newState = {...this.state.formData}
          newState[inputName] = newValue;
          
          return {formData:newState}
        })
      }


    onSubmitBtnClick = (e) =>{
        e.preventDefault();
    
        const payload ={    
          name: this.state.formData.name,
          manufacturer: this.state.formData.manufacturer,
          description: this.state.formData.description,
          cost : this.state.formData.cost
        }

        codeChallegePost(payload)
            .then((res)=>{
                 toast.success(`${res.data.item}`)
            })


    }
    render(){
        return (
            <form className="container form-box" style={{width:300,height:400}}>
                            <div className="form-group">
                                <input 
                                className="name" 
                                name="name" 
                                placeholder="name" 
                                type="text" 
                                onChange={this.onChangeState}
                                value={this.state.formData.formData}
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                className="manufacture" 
                                name="manufacture" 
                                placeholder="manufacture" 
                                type="text" 
                                onChange={this.onChangeState}
                                value={this.state.formData.manufacture}
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                className="discription" 
                                name="discription" 
                                placeholder="discription" 
                                type="text" 
                                onChange={this.onChangeState}
                                value={this.state.formData.discription}
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                className="cost" 
                                name="cost" 
                                placeholder="cost" 
                                type="text" 
                                onChange={this.onChangeState}
                                value={this.state.formData.cost}
                                />
                            </div>
                            <button 
                                className="btn" 
                                type="submit"
                                onClick={this.onSubmitBtnClick}
                            >Submit</button>
            </form>
        )
    }
}

export default Codechallege