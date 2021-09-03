import React from "react"

class RegisterNav extends React.Component{

    componentDidMount(){
        console.log("onComponentDidMount() -> RegisterNav");
    }

    onLogInClick = (e) => {
        console.log("onSignUpClick() was clicked!");
        this.props.history.push("/login")
      }

    render(){
        return(
            <React.Fragment>
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a
                href="/"
                className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
              >
                <img
                  src="https://pw.sabio.la/images/Sabio.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="Sabio"
                />
              </a>

              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              </ul>

              <div className="text-end">
                <button type="button" className="btn btn-outline-light me-2" onClick={this.onLogInClick}>
                  Login
                </button>
              </div>
            </div>
            </React.Fragment>
        );
    };
};

export default RegisterNav