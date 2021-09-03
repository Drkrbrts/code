import React from "react";
import CompaniesForm from "./CompaniesForm";
import { Formik, Form, Field, ErrorMessage } from "formik";




class TechCompanies extends React.Component {
    state = {
        update: false,
        TechForm: {
          name: "",
          profile: "",
          summary: "",
          headline: "",
          contactInformation: "",
          slug: "",
          statusId: "",
          images:""
          
        },
      };
    render() {
      return (
        <React.Fragment>
     
            <Formik
              initialValues={{ name: "", email: "" }}
              onSubmit={async (values) => {
                await new Promise((resolve) => setTimeout(resolve, 500));
                alert(JSON.stringify(values, null, 2));
              }}>
                <Form>
                    <Field name="" type=""/>
                    <Field name="" type=""/>
                    <Field name="" type=""/>
                    <button>Submit</button>
                </Form>



            </Formik>
     
       </React.Fragment>



      )
 
    }
  }



export default TechCompanies;