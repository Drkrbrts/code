import React from "react";
//import * as userService from "../services/userService";

class Content extends React.Component
{
    onItemClicked = (e) =>
    {    
        // var data = {
        //     email: "sabio@sabio.la"
        //     , password: "Sabiopassword1!"
        //     , tenantId: "bottcamp1"
        // };

        e.stopPropagation();
        e.preventDefault();
        console.log("i was clicked", e.currentTarget);

        // userService.login(data).then(this.onLoginSuccess).catch(this.onLoginError);

    }

    // //to call ajax calls right away
    // //reheresed jquery. 
    // //
    // componentDidMount(){
    //     var data = {
    //         email: "sabio@sabio.la",
    //         password: "Sabiopassword1!",
    //         tenantId: "bottcamp1"
    //     };

    //     userService.login(data).then(this.onLoginSuccess).catch(this.onLoginError);
    // }

    // onLoginSuccess = (response) => {
    //     console.log(response);
    // }

    // onLoginError = (errorResponse) => {
    //     console.error(errorResponse);
    // }

    render(){
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
                        <button className="btn btn-secondary" onClick={this.onItemClicked}>
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
                        <button className="btn btn-secondary" onClick={this.onItemClicked}>
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
                        <button className="btn btn-secondary" onClick={this.onItemClicked}>
                            View details &raquo;
                        </button>
                        </p>
                    </div>
                    </div>

                    <hr />
                </div>
            </React.Fragment>
        );
    }
}

export default Content;