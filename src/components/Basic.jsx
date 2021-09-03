import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import debug from "sabio-debug";
import * as Yup from "yup";


const basicSchema = Yup.object().shape({
    fullName: Yup.string().min(2).max(50).required("Is Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    content: Yup.string().min(10).max(200).required("Content required"),
    friends: Yup.array().of(
        Yup.object().shape(
            {
                name: Yup.string().min(2, "minimum 2 characters required").max(50).required("Name required")
            }
        )
    ).required("Required to add friends").min(2)
})

const _logger = debug.extend("Basic");

class Basic extends React.Component
{
    state = {
        sports: [
            { id: 1, name: "Soccer" },
            { id: 2, name: "Basketball" },
            { id: 3, name: "Football" },
            { id: 4, name: "Cricket" },
            { id: 5, name: "Hockey" },
        ],
        formData: {
            fullName: "",
            email: "",
            isAwesome: true,
            color: "",
            content: "",
            sportId: 0,
            friends: [{ name: "" }]
        }
    }

    handleSubmit = (values) =>
    {
        _logger(values);
    }

    mapSport = (sport) =>   // PARENTHESES
    (
        <option value={sport.id} key={`sport_${sport.id}`}>{sport.name}</option>
    )

    render()
    {


        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <Formik
                            enableReinitialize={true}
                            initialValues={this.state.formData}
                            onSubmit={this.handleSubmit}
                            validationSchema={basicSchema}>

                            {({ values }) => (


                                <Form>
                                    <div className="form-group">
                                        <label htmlFor="fullName">FullName</label>
                                        <Field type="text" name="fullName" className="form-control" />
                                        <ErrorMessage name="fullName" component="div" className="has-error" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <Field type="email" name="email" className="form-control" />
                                        <ErrorMessage name="email" component="div" className="has-error" />
                                    </div>
                                    <h4>Checkbox</h4>
                                    <div className="form-check">
                                        <Field type="checkbox" name="isAwesome" className="form-check-input" />
                                        <label htmlFor="isAwesome"
                                            className="form-check-label">
                                            {/* {`${values.isAwesome}`} this simply captures the value of 'isAwesome' in state*/}
                                            Are you awesome?
                                        </label>
                                    </div>
                                    <h4>Radios</h4>
                                    <div className="form-check">
                                        <Field type="radio" className="form-check-input" name="color" value="red" />
                                        {/* make sure the NAME is the same for each item in the group of radio buttons */}
                                        <label classNAme="form-check-label">Red</label>
                                    </div>
                                    <div className="form-check">
                                        <Field type="radio" className="form-check-input" name="color" value="blue" />
                                        <label className="form-check-label">Blue</label>
                                    </div>
                                    <div className="form-check">
                                        <Field type="radio" className="form-check-input" name="color" value="yellow" />
                                        <label classNAme="form-check-label">Yellow</label>
                                    </div>
                                    <h4>Text Area</h4>
                                    <div className="form-group">
                                        <label htmlFor="content">Content</label>
                                        <Field component="textarea" name="content" className="form-control" />
                                    </div>
                                    <ErrorMessage name="content" component="div" className="has-error" />
                                    <h4>Select</h4>
                                    <div className="form-group">
                                        <Field component="select" name="sportId" className="form-control">
                                            <option value="">Please select a sport</option>
                                            {this.state.sports.map(this.mapSport)}
                                        </Field>
                                    </div>
                                    <h4>Array List</h4>
                                    <div className="form-group">
                                        <FieldArray name="friends">
                                            {({ push, remove }) =>
                                            (
                                                <div>
                                                    <button className="btn btn-info"
                                                        onClick={() => push({ name: "" })}>Add</button>
                                                    {
                                                        values.friends && values.friends.map((friend, index) => (
                                                            <div className="row">
                                                                <div className="col-10">
                                                                    <Field type="text" name={`friends.${index}.name`} // .name can be any other property (id, age, etc)
                                                                        placeholder="Add a friend" />
                                                                </div>
                                                                <div className="col-2">
                                                                    <button className="btn btn-danger"
                                                                        onClick={() => remove(index)}>
                                                                        Remove
                                                                    </button>
                                                                </div>
                                                                <ErrorMessage
                                                                    name={`friends.${index}.name`}
                                                                    component="div"
                                                                    className="has-error" />
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            )}
                                        </FieldArray>
                                    </div>

                                    <button type="submit" className="btn btn-primary">
                                        Submit
                                    </button>
                                </Form>


                            )}

                        </Formik>
                    </div>
                </div>
            </div>


        )
    }
}

export default Basic;