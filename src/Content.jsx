import React from "react";
import * as usersService from "./services/usersService";

class Content extends React.Component{

  onLogMeClick =()=>
  {
    console.log("Log me was clicked on", new Date());

    // const data = {
    //   email: "harrisXX21@gmail.com", 
    //   password: "Sabiopass1!",
    //   tenantId: "U02BETD8TSM"
    // };

    // usersService.logIn(data)
    //   .then(this.onLogInSuccess)
    //   .catch(this.onLogInError);

  };

  componentDidMount()
  {
    console.log("componentDidMount");
    const data = {
      email: "harrisXX21@gmail.com", 
      password: "Sabiopass1!",
      tenantId: "U02BETD8TSM"
    };

    usersService.logIn(data)
      .then(this.onLogInSuccess)
      .catch(this.onLogInError);
  }

  onLogInSuccess =(response)=>
  {
    console.log(response, "onLogInSuccess");
  }

  onLogInError =(error)=>
  {
    console.log(error, "onLogInError");
  }




    render()
    {
        return (
        <React.Fragment>
        <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h2>Heading</h2>
                <p>
                  Donec id elit non mi porta gravida at eget metus. Fusce
                  dapibus, tellus ac cursus commodo, tortor mauris condimentum
                  nibh, ut fermentum massa justo sit amet risus. Etiam porta sem
                  malesuada magna mollis euismod. Donec sed odio dui.
                </p>
                <p>
                  <button className="btn btn-secondary">
                    View details &raquo;
                  </button>
                </p>
              </div>
              <div className="col-md-4">
                <h2>Heading</h2>
                <p>
                  Donec id elit non mi porta gravida at eget metus. Fusce
                  dapibus, tellus ac cursus commodo, tortor mauris condimentum
                  nibh, ut fermentum massa justo sit amet risus. Etiam porta sem
                  malesuada magna mollis euismod. Donec sed odio dui.
                </p>
                <p>
                  <button className="btn btn-secondary">
                    View details &raquo;
                  </button>
                </p>
              </div>
              <div className="col-md-4">
                <h2>Heading</h2>
                <p>
                  Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
                  egestas eget quam. Vestibulum id ligula porta felis euismod
                  semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
                  condimentum nibh, ut fermentum massa justo sit amet risus.
                </p>
                <p>
                  <button className="btn btn-secondary">
                    View details &raquo;
                  </button>
                </p>
              </div>
            </div>

            <hr />
          </div>
          <div className= "container">
            <div className="row col-3">
              <button className="btn btn-primary" 
              type="button"
              onClick={this.onLogMeClick}>
                Log Me
              </button>
            </div>
          </div>
          </React.Fragment>
        );
    }
}

export default Content;