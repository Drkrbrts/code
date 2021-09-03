import React from "react"
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom"
import { Formik, Form } from "formik"
import { TextField, Button } from "@material-ui/core"
import * as Yup from "yup"
import * as userService from "../../services/userService"

const logInSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Email Required")
})

class LogInPage extends React.Component{

    state = {
        formData: {
          email: "",
          password: "",
          tenantId: "bootcamp1"
        }
    }

    componentDidMount(){
        console.log("componentDidMount() -> LogInPage");
    }

    signInSubmit = (values) => {
        let userLogInInfo = values;
        userService.logIn(userLogInInfo)
            .then(this.onUserLogInSuccess)
            .catch(this.onUserLogInError)
    }

    onUserLogInSuccess = (response) => {
        console.log(response.data, "userLogInSuccess");
        userService.getCurrent()
            .then(this.onGetCurrentSuccess)
            .catch(this.onGetCurrentError)
    }

    onGetCurrentSuccess = (response) => {
        console.log(response.data, "onGetCurrentSuccess");
        toast.success(`Welcome back ${response.data.item.name}!`)
        userService.getUserById(response.data.item.id)
            .then(this.onGetUserByIdSuccess)
            .catch(this.onGetUserByIdError)
    }

    onGetUserByIdSuccess = (response) => {
        console.log(response.data.item, "onGetUserByIdSuccess");
        this.props.handleLogIn(response.data.item);
        this.props.history.push("/home")
    }

    onUserLogInError = (errResponse) => {
        console.log({error: errResponse});
        toast.error(`Make sure Email and Password fields are correct!`)
    }

    onGetCurrentError = (errResponse) => {
        console.log({error:errResponse});
        this.setState({})
    }

    onGetUserByIdError = (errResponse) => {
        console.log({error:errResponse});
    }

    render(){
        return(
            <div className="container text-center my-5">
                <div className="card border-0 rounded-3 shadow col-lg-3 col-md-8 col-sm-8 mb-4 mx-auto">
                    <Formik
                        enableReinitialize={true}
                        initialValues={this.state.formData}
                        // onSubmit={this.handleSumbit}
                        onSubmit={this.signInSubmit}
                        validationSchema={logInSchema}
                    >
                        {({ values, handleChange, touched, errors }) => (
                        <Form>
                            <div className="form-group my-5">
                                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                                <div>
                                    <TextField
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        label="Email Address"
                                        className="mb-1"
                                        error={touched.email && Boolean(errors.email)}
                                        helperText={touched.email && errors.email}
                                    />
                                </div>
                                <div>
                                    <TextField
                                        type="password"
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                        label="Password"
                                        className="mb-2"
                                    />
                                </div>
                                <div><NavLink to="">I forgot my password</NavLink></div>
                                <div className="mb-3">
                                    <NavLink to="/register">Register a new membership</NavLink>
                                </div>

                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                >
                                    Sign in
                                </Button>
                            </div>
                        </Form>
                        )}
                    </Formik>
                </div>
            </div>
        );
    }
}

export default LogInPage