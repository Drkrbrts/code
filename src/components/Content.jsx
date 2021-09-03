import React from"react";


class Content extends React.Component{
onButtonClicked = () => {
    console.log("Button was clicked");
};

    render(){
        return(
<React.Fragment>
<div className="row">
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <button type="button" className="btn btn-primary" onClick={this.onButtonClicked}>Primary</button>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <button type="button" className="btn btn-primary">Primary</button>
      </div>
    </div>
  </div>
</div>
</React.Fragment>
        );
    };
}

export default Content;