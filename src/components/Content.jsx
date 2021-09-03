import React from "react"
import * as userService from "../services/userService";

// import Button from "./Button";



class Content extends React.Component {


    
onButtonClicked = (data) =>{
 console.log("click button clicked");

 var payload = { email: "kh4nhcodes@gmail.com", password: "Password1234!", tenantId:"U025RDS34CC" };

    userService.logIn(payload)
    .then(this.onActionSuccess)
    .catch(this.onActionError);
}

    onActionSuccess = (response) => {
    // do something
   }
   
   onActionError= (errResponse) => {
    // do something
}
    render() {
        return <div className="container">
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
                    {/* <div className='aButton'>
                        <Button backgroundcolor='green' />
                    </div> */}
                    <div>
                        <button
                           type="button"
                           className="btn btn-outline-primary"
                           onClick={this.onButtonClicked}
                           
                           > 
                           Button
                            </button>
                    </div>
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
    }
}

export default Content;