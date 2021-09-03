import React from 'react';
import * as userService from '../services/userService';

class Content extends React.Component {

    componentDidMount() {
        const user = {
            email: "rambo@mail.com",
            password: "PA$$word11",
            tenantId: "U0250AX5C3D"
        };

        userService.logIn(user)
            .then(this.onLogInSuccess)
            .catch(this.onLogInError);
    }

    onButtonClicked = () => {
        console.log("You Clicked me!");

        const user = {
            email: "user@mail.com",
            password: "userPassword"
        };

        userService.logIn(user)
            .then(this.onLogInSuccess)
            .catch(this.onLogInError);

    }

    onLogInSuccess = (res) => {
        console.log("Log in Success");
    }
    onLogInError = (errRes) => {
        console.log(errRes, "Log in Failed");
    }

    render() {
        return (
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
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={this.onButtonClicked}
                            >
                                Click Me! &raquo;
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
        )
    }
}

export default Content;