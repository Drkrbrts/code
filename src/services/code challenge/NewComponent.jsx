import React from "react";

class NewComponent extends React.Component {
    state = {

    };
    render() {
        return (
            <div>
                <form>
  <div className="mb-3">
    <label htmlForm="exampleInputEmail1">This is a text box</label>
    <input 
      type="text" 
      className="form-control" 
      id="firstName" 
      name="firstname"
      onChange={this.onFormFieldChanged} 
      value={this.state.firstName}
      />
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

            </div>
        );
    }
}
export default NewComponent;