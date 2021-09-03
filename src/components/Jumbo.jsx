import React from "react";
import Fade from '@material-ui/core/Fade';
import * as userService from "../services/userService";

class Jumbo extends React.Component {

    state = {
      user: []
    };

    componentDidMount() {
        userService.getCurrent()
      .then(this.onActionSuccess)
      .catch(this.onActionError);
    }

    onActionSuccess = (response) => {
      console.log(response);
      this.setState({user: response.data.item});
    }
   
    onActionError = (errResponse) => {
      console.warn(errResponse);
      window.location = "/login";
    }

    render() {
        return(
          <Fade in={true} style={{ transitionDelay:'250ms'}}>
              <div className="p-5 mb-4 bg-light rounded-3">
              <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold" 
                style={{
                  textAlign: 'center',
                  }}>
                  Hello, {this.state.user.name}</h1>
                <p className="col-md-8 fs-4"
                  style={{
                    textAlign: 'center',
                    margin: `auto`
                }}>
                  This is the homepage for the Starter Task!
                </p>
              </div>
            </div>
          </Fade>
        );
    }
}

export default Jumbo;