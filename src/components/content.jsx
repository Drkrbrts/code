import React from "react";
import {ToastContainer, toast,Flip} from "react-toastify";
import "../App.css";

class Content extends React.Component {
      
    render() {
        const content = () => {
          toast.error("OH NO ERROR");
          toast.success("YOU SUCCEEDED");
          toast.info("YOU HAVE BEEN IMFORMATIONZIED");
          toast.warn("OH NO ERROR");
        };
        const consoleLogMessage = () => {
           console.log("This is the message");
          };
        return (
            <React.Fragment>
                <div className="bg-danger">
                 <>
                  < ToastContainer draggableDirection={false} transition={Flip}  />
                 </>

                </div>
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
                    {/* This button will console.log */}
                  <button  className="btn btn-danger" onClick={consoleLogMessage}>
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
                    {/* This button will toast */}
                  <button className="btn btn-info" onClick={content}>
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
                    {/* This button will not toast */}
                  <button className="btn btn-secondary" >
                    View details &raquo;
                  </button>
                </p>
              </div>
            </div>

            <hr />
          </div>
          </React.Fragment>
        )
    }

}

export default Content;