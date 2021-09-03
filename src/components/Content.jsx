import React from "react";
import * as userService from "../services/userService";

class Content extends React.Component {

    onNewBtnClick = () =>{
        console.log("click button is working")

        // const payload ={email:"user@google.com", password:"password"};
        const payload ={email:"kim@gmail.com", password:"Password1!", tenantId:"U025G714W4V"};
        userService.logIn(payload)
        .then(this.onActionSuccess)
        .catch(this.onActionError)
        }

        onActionSuccess = (response) => {
          console.log("success")
        }

        onActionError = (errResponse) => {
          console.log("error")
        }

    render() {
        return (

            <React.Fragment>
            <main role="main">

            <button className="btn btn-secondary" onClick={this.onNewBtnClick}>Add New Button</button>
                
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
            </main>
      

            </React.Fragment>
        );
    }

}

export default Content;