import React from 'react';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as userService from '../services/userService'


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            formData: {
                email: "",
                password: "",
                tenantId: "U0250AX5C3D"
            }
        }

    }

    onLogin = e => {
        e.preventDefault();
        const user = { ...this.state.formData };

        userService
            .logIn(user)
            .then(data => {
                this.props.isLogged()
                toast.success('Welcome!')
                this.props.history.push("/")
            })
            .catch(error => {
                console.log(error)
                toast.error(`The following error accured: ${error}`);
            });
    };


    onChangeHandler = e => {
        const target = e.target,
            value = target.value,
            name = target.name;

        this.setState(() => {
            let newState = { ...this.state.formData }
            newState[name] = value;

            return {
                formData: newState
            };
        });
    };

    render() {
        return (
            <div className="container col-4 border p-2 my-4">
                <form className="form-group login-form">
                    <h3 className="text-center mb-3">Sign In</h3>
                    <input
                        className="form-control mb-2"
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={this.state.formData.email}
                        onChange={this.onChangeHandler}
                    />
                    <input
                        className="form-control mb-2"
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={this.state.formData.password}
                        onChange={this.onChangeHandler}
                    />
                    <div className="form-group d-flex justify-content-between">
                        <div>
                            <NavLink
                                to="/forgot-password"
                                className="text-decoration-none d-block"
                            >I forgot my password.
                            </NavLink>
                            <NavLink
                                to="/register"
                                className="text-decoration-none d-block"
                            >Register a new membership.
                            </NavLink>
                        </div>
                        <input
                            type="submit"
                            value="Sign In"
                            className="btn btn-primary login"
                            onClick={this.onLogin}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;