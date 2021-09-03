import React from "react";
import defaultExport from "../services/Entitysevice"
// import { toast } from "react-toastify";


class AllWidgets extends React.Component{
    state = {
        
       
            name:"movies",
            manufacturer: "BlockBuster",
            description: "rent movies here",
            cost: 29.99,
        
    }
         

    
        handleChange = (e) =>{
            let currentTarget =e.currentTarget;
            let newValue = currentTarget.value;
            let inputName = currentTarget.name;
        
            this.setState(() =>{
                let newState = {};
                newState[inputName]= newValue;
                    return newState
            } )
        
        
          }
          
  onClickHandeler(){

     var payload = this.state;

    defaultExport.movies(payload)
  .then(this.onMoviesSuc)
  .catch(this.onMoviesErr)

  }
  onMoviesSuc = (response) => {
      console.log(response.data, "succsessful")
    //   toast.success('🦄 Wow so easy!', {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     });
  }
    onMoviesErr = (errResponse) => {
          console.warn(errResponse, "Error")
        //   toast.error('🦄 Wow so easy!', {
        //     position: "top-right",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     });
    }
         





    render(){
        return      <React.Fragment>
       
           
            <form>
            <div className="mb-3">
             <label htmlFor="name" className="form-label">name</label>
             <input type="text" className="form-control" value={this.state.name}  name="name" onChange={this.handleChange} ></input>         
            </div>
            <div className="mb-3">
             <label htmlFor="manufacturer" className="form-label">Manufacturer</label>
             <input type="text" className="form-control" value={this.state.manufacturer}  name="manufacturer" onChange={this.handleChange} ></input>         
            </div>
            <div className="mb-3">
             <label htmlFor="description" className="form-label">Description</label>
             <input type="text" className="form-control" value={this.state.description}  name="description" onChange={this.handleChange}></input>         
            </div>
            <div className="mb-3">
             <label htmlFor="cost" className="form-label">Cost</label>
             <input type="text" className="form-control" value={this.state.cost}  name="cost" onChange={this.handleChange} ></input>         
            </div>
             <button type="button" className="btn btn-primary" onClick={this.onClickHandeler} >Submit</button>
            </form>
    </React.Fragment>
    
    }

}

export default AllWidgets
