import React from "react";



class SubmitButton extends React.Component {

    render() {

        return <React.Fragment>

<button  onClick={this.props.action} type="button" className="btn btn-primary" style={{margin: "5px"}}>Submit</button>

        </React.Fragment>
    }
}



export default SubmitButton;