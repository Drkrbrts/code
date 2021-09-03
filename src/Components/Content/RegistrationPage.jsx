import React from "react"
import * as userService from "../../services/userService"
import { NavLink } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik";
import { TextField, Button, Container, Grid, Box } from "@material-ui/core"
import * as Yup from "yup"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const registrationSchema = Yup.object().shape({
    firstName: Yup.string().min(2).max(20).required("Firstname is required"),
    lastName: Yup.string().min(2).max(20).required("Lastname is required"),
    email: Yup.string().email("Invalid Email").required("Email required"),
    password: Yup.string().required("Password is required").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Must contain 8 characters, One Uppercase, One Lowercase, One Number and One Special Character"),
    passwordConfirm: Yup.string().oneOf([Yup.ref("password"), null], "Password does not match"),
    avatarUrl: Yup.string().required("Avatar Url is required")
})

class RegistrationPage extends React.Component{

    state = {
        newUser: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passwordConfirm: "",
            avatarUrl: "",
            tenantId: "bootcamp1"
        },
        agreeTerms: false,
    }

    componentDidMount(){
        console.log("componentDidMount() -> RegistrationPage");
    }

    submitRegistration = (values) => {
        let userRegistrationInfo = values;
        if(userRegistrationInfo.agreeTerms){
            console.log(userRegistrationInfo);
            userService.register(userRegistrationInfo)
                .then(this.onRegisterSuccess)
                .catch(this.onRegisterError)
        } else {
            toast.warning("Please Agree to Terms!")
        }
    }

    // onChange={Handler}
    onFormFieldChange = (e) => {
        let currentTarget = e.currentTarget;
        let inputName = currentTarget.name
        let newValue = currentTarget.type === "checkbox" 
            ? currentTarget.checked 
            : currentTarget.value
        

        this.setState(() => {
            let newUser = {...this.state.newUser};
            newUser[inputName] = newValue
            return {newUser}
        })
    }

    onRegisterSuccess = (response) => {
        console.log(response.data, "onRegisterSuccess");
        let userId = response.data.item;
        console.log("User ID:", userId);
        toast.success("You have registered successfully!")
        this.props.history.push("/");
    }

    onRegisterError = (errResponse) => {
        console.log({error: errResponse});
        let errMessage = errResponse.response.data.errors[0];
        toast.error(errMessage);
    }

    render(){
        return(
            // <Container maxWidth="sm">
            //     <Grid xs={12}>
            //         <Formik
            //         enableReinitialize={true}
            //         initialValues={this.state.newUser}
            //         onSubmit={this.submitRegistration}
            //         validationSchema={registrationSchema}
            //         > 
            //         {({ values, handleChange }) => (
            //             <Form>
            //                 <Box display="flex">
            //                     <TextField
            //                         name="firstName"
            //                         value={values.firstName}
            //                         onChange={handleChange}
            //                         label="First Name"      
            //                     />
            //                 </Box>
            //                 <Box display="flex">
            //                     <TextField
            //                         name="lastName"
            //                         value={values.lastName}
            //                         onChange={handleChange}
            //                         label="Last Name"      
            //                     />
            //                 </Box>
            //             </Form>
            //         )}
            //         </Formik>
            //     </Grid>
            // </Container>

            <div className="col-lg-8 col-md-6 col-sm-6 mb-4 mx-auto">
                
                <div className="card border-0 shadow">
                    <div className="card-body">
                        <h5 className="card-title text-center">
                            Register a new membership
                        </h5>
                    </div>
                    <div className="card-body">
                        <div className="card-text text-black-50">
                            <Formik
                                enableReinitialize={true}
                                initialValues={this.state.newUser}
                                onSubmit={this.submitRegistration}
                                validationSchema={registrationSchema}
                            >    
                            {({ values }) => (
                                <Form>
                                    <div>
                                        <div className="form-group mb-3">
                                            <Field
                                                type="text"
                                                className="form-control"
                                                placeholder="First Name"
                                                name="firstName"
                                            />
                                            <ErrorMessage 
                                                name="firstName" 
                                                component="div" className="har-error" 
                                            />
                                        </div>
                                        <div className="form-group mb-3">
                                            <Field
                                                type="text"
                                                className="form-control"
                                                placeholder="Last Name"
                                                name="lastName"
                                            />
                                            <ErrorMessage 
                                                name="lastName" 
                                                component="div" className="har-error" 
                                            />
                                        </div>
                                        <div className="form-group mb-3">
                                            <Field
                                                type="email"
                                                className="form-control"
                                                placeholder="Email"
                                                name="email"
                                            />
                                            <ErrorMessage 
                                                name="email" 
                                                component="div" className="har-error" 
                                            />
                                        </div>
                                        <div className="form-group mb-3">
                                            <Field
                                                type="password"
                                                className="form-control"
                                                placeholder="Password"
                                                name="password"
                                            />
                                            <ErrorMessage 
                                                name="password" 
                                                component="div" className="har-error" 
                                            />
                                        </div>
                                        <div className="form-group mb-3">
                                            <Field
                                                type="password"
                                                className="form-control"
                                                placeholder="Retype password"
                                                name="passwordConfirm"
                                            />
                                            <ErrorMessage 
                                                name="passwordConfirm" 
                                                component="div" className="har-error" 
                                            />
                                        </div>
                                        <div className="form-group mb-3">
                                            <Field
                                                type="text"
                                                className="form-control"
                                                placeholder="Avatar Url"
                                                name="avatarUrl"
                                            />
                                            <ErrorMessage 
                                                name="avatarUrl" 
                                                component="div" className="har-error" 
                                            />
                                        </div>
                                        <div className="form-group form-check">
                                            <Field
                                                type="checkbox"
                                                className="form-check-input"
                                                name="agreeTerms"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="agreeTerms"
                                                ><strong>I agree to the terms</strong></label
                                            >
                                        </div>
                                        <NavLink to="/login">
                                            <strong>
                                                Already have an Account?
                                            </strong>
                                        </NavLink>
                                        <div className="card-body text-center">
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-lg"
                                            >
                                                Register
                                            </button>
                                        </div>
                                    </div>
                                </Form>
                            )}
                            
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default RegistrationPage