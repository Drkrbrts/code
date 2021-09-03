import React from "react"




// onRegBtnClicked = (e) => {

  
// };

class Button extends React.Component {
    render() {
        return (
            <React.Fragment>

            <div className="col md-4">
                <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={this.onRegBtnClicked}
                    >
                    Register
                </button>
            </div>


            </React.Fragment>
        )
    }
}




export default Button;