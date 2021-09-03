import React from 'react';
import { NavLink, Route } from "react-router-dom";
import * as userService from '../services/userService'
import Home from '../Views/Home';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                tenantId: props.tenantId,
                id: props.id,
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                passwordConfirm: "",
                avatarUrl: "",
                terms: false
            }
        }
    }

    onRegister = e => {
        e.preventDefault();
        const user = { ...this.state.formData };

        userService
            .create(user)
            .then(data => {
                this.setState(prevState => {
                    const formData = { ...prevState.formData, id: data.item };
                    this.props.setUserId(data.item)
                    console.log(`User Created with id: ${data.item}`);
                    return { ...prevState, formData: formData };
                });
            })
            .then(() => { this.callComplete(this.state.formData.id); })
            .catch(error => console.log(error));
    };

    onChangeHandler = e => {
        const target = e.target,
            value = target.type === "checkbox" ? target.checked : target.value,
            name = target.name;

        this.setState(() => {
            let newState = { ...this.state.formData }
            newState[name] = value;

            return {
                formData: newState
            };
        });
    };

    callComplete = id => {
        if (id)
            this.props.history.push("/")
        else
            return;
    }

    render() {
        return (
            <div className="container col-8 border pb-4 my-4">
                <h3 className="text-center my-4">Register a new membership</h3>
                <form id="reg-form" className="form-group">
                    <input
                        className="form-control mb-2"
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        value={this.state.formData.firstName}
                        onChange={this.onChangeHandler}
                    />
                    <input
                        className="form-control mb-2"
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        value={this.state.formData.lastName}
                        onChange={this.onChangeHandler}
                    />
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
                    <input
                        className="form-control mb-2"
                        name="passwordConfirm"
                        type="password"
                        placeholder="Confirm Password"
                        value={this.state.formData.passwordConfirm}
                        onChange={this.onChangeHandler}
                    />
                    <input
                        className="form-control mb-2"
                        name="avatarUrl"
                        type="text"
                        placeholder="Avatar Url"
                        value={this.state.formData.avatarUrl}
                        onChange={this.onChangeHandler}
                    />
                    <div className="form-group d-flex justify-content-between mb-3">
                        <div className="form-check position-relative bottom-0">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="terms"
                                value={this.state.formData.terms}
                                onChange={this.onChangeHandler}
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                <strong>
                                    I agree to the
                                    <NavLink
                                        to="/terms"
                                        className="text-decoration-none"
                                    > terms
                                    </NavLink>
                                </strong>
                            </label>
                        </div>
                        <input
                            className="btn btn-primary register"
                            type="submit"
                            value="Register"
                            onClick={this.onRegister}
                        />
                    </div>
                    <NavLink
                        className="text-decoration-none"
                        to="/login"
                    >Already have an account?
                    </NavLink>
                    <Route
                        path="/"
                        exact
                        component={Home}
                    />
                </form>
            </div>
        )
    }
}

export default Register;