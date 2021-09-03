import React from "react"

class LogInNav extends React.Component{

    componentDidMount(){
        console.log("componentDidMount() -> LogInNav");
    }

    onRegisterClick = (e) => {
        console.log("onSignUpClick() was clicked!");
        this.props.history.push("/register")
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
                        <button type="button" className="btn btn-outline-light me-2" onClick={this.onRegisterClick}>
                        Register
                        </button>
                    </div>
                </div>
            </React.Fragment>
        );
    };
};

export default LogInNav