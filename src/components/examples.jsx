import React from "react";

class examples extends React.Component{
    state = {
        formData: {firstName: "Kevin", lastName: "Echavarria", email: "", color: 0, agree: true},
      };
    
      onFormFieldChanged = (e) => {
        let currentTarget= e.currentTarget;
        let newValue= currentTarget.type === "checkbox" ? currentTarget.checked : currentTarget.value;
        let inputName= currentTarget.name;
    
        this.setState(()=>{
          let formData = {...this.state.formData};
    
          formData[inputName]= newValue;
    
          return {formData};
        })
      };
    
      onButtonClicked = (e) => {
        e.stopPropagation();
        e.preventDefault();
        console.log('I was clicked', e.currentTarget);
      }

    render(){
        return(
            <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
    <input 
      type="text" 
      className="form-control" 
      id="firstName" 
      name="firstName" 
      onChange={this.onFormFieldChanged} 
      value={this.state.formData.firstName}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Last Name</label>
    <input 
      type="text" 
      className="form-control" 
      id="lastName" 
      name="lastName" 
      onChange={this.onFormFieldChanged} 
      value={this.state.formData.lastName}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
    <input 
      type="email" 
      className="form-control" 
      id="email" 
      name="email" 
      onChange={this.onFormFieldChanged} 
      value={this.state.formData.email}/>
  </div>
  <div>
    <select className="form-select" name="color" value={this.state.formData.color} onChange={this.onFormFieldChanged} aria-label="Default select example">
      <option value="">Select Color</option>
      <option value="1">Red</option>
      <option value="2">Green</option>
      <option value="3">Blue</option>
    </select>
  </div>
  <div className="form-check">
  <input 
  className="form-check-input" 
  type="checkbox"
  name="agree"
  checked={this.state.formData.agree}
  onChange={this.onFormFieldChanged}
  value="8458"
  />
  <label className="form-check-label" htmlFor="flexCheckDefault">
    Agree to terms?
  </label>
</div>

  <button type="submit" className="btn btn-primary" onClick={this.onButtonClicked}>Submit</button>
</form>
        )
    }
}

export default examples;