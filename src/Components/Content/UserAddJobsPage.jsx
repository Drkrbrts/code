import React from "react"
import RenderCompany from "./RenderCompany";
import { Formik, Form, Field } from "formik";
import { toast } from "react-toastify"
import * as techCompanies from "../../services/techCompanyService"
import * as jobService from "../../services/jobService"

class UserAddJobsPage extends React.Component{

    state = {
        formData: {
            title: "",
            description: "",
            summary: "", 
            pay: "", 
            slug: "", 
            statusId: "",
            techCompanyId: "",
            skills: []
        },
        techCompanies: [{}],
        jobId: 0
    }

    componentDidMount(){
        console.log("componentDidMount() -> UserAddJobsPage");

        techCompanies.getTechCompanies(0,30)
                .then(this.onGetTechCompaniesSuccess)
                .catch(this.onGetTechCompaniesError)

        if(this.props.match.params.jobId){
            jobService.getJobById(this.props.match.params.jobId)
                .then(this.onGetJobByIdSuccess)
                .catch(this.onGetJobByIdError)
        }
    }

    mapSkills = (skill) => {
        let newSkills = {
            name: skill
        }
        return newSkills;
    }

    submitForm = (values) => {
        // eslint-disable-next-line
        if(values.skills == "") values.skills = null;
        // eslint-disable-next-line
        if(this.state.jobId == 0){
            if(values.skills != null)
            {
                let skillArray = values.skills.split(", ")
                let newSkillArray = skillArray.map(this.mapSkills)
                values.skills = newSkillArray   
                values.techCompanyId = parseInt(values.techCompanyId)
            }
            jobService.addJob(values)
                .then(this.onAddJobError)
                .catch(this.onAddJobError)
        }
        else 
        {
            if(values.skills != null)
            {
                let skillArray = values.skills.split(", ")
                let newSkillArray = skillArray.map(this.mapSkills)
                values.skills = newSkillArray
                values.techCompanyId = parseInt(values.techCompanyId)
            }
            jobService.updateJob(this.state.jobId, values)
                .then(this.onUpdateJobSuccess)
                .catch(this.onUpdateJobError)
        }
    }

    //####### SUCCESS HANDLERS #######//
    onGetTechCompaniesSuccess = (response) => {
        console.log(response.data, "onGetTechCompaniesSuccess");
        let companies = response.data.item.pagedItems;

        this.setState(prevState => {
            return{
                ...prevState,
                mappedCompanies: companies.map(this.mapTechCompanies)
            }
        })
    }

    onAddJobSuccess = (response) => {
        console.log(response.data, "onAddJobSuccess");
        toast.success(`Successfully added jobId: ${response.data.item}`)
        this.setState(prevState => {
            return{
                ...prevState,
                jobId: response.data.item
            }
        })
    }

    onUpdateJobSuccess = (response) => {
        console.log(response.data, "onUpdateJobSuccess");
        toast.info(`Successfully updated jobId: ${this.state.jobId}`)
        this.props.history.push("/jobs")
    }

    onGetJobByIdSuccess = (response) => {
        console.log(response.data, "onGetJobByIdSuccess");
        let jobData = response.data.item
        if(jobData.skills != null){
            var skillArray = jobData.skills.map((element)=>{
                return element.name
            })
            skillArray = skillArray.join(", ")
        } else {
            jobData.skills = ""
        }
        this.setState(prevState=>{
            return{
                ...prevState,
                formData:{
                    title: jobData.title,
                    description: jobData.description,
                    summary: jobData.summary, 
                    pay: jobData.pay, 
                    slug: jobData.slug, 
                    statusId: jobData.statusId,
                    techCompanyId: jobData.techCompany.id,
                    skills: skillArray
                },
                jobId: jobData.id
            }
        })
        // this.setState((prevState)=>{
        //     let formData = {...prevState.formData}
        //     let jobId = prevState.jobId
        //     jobId = jobData.id
        //     formData.title = jobData.title
        //     formData.description = jobData.description
        //     formData.summary = jobData.summary
        //     formData.pay = jobData.pay
        //     formData.slug = jobData.slug
        //     formData.statusId = jobData.statusId
        //     formData.techCompanyId = jobData.techCompany.id
        //     formData.skills = skillArray
        //     return {formData, jobId}
        // })
    }

    //####### ERROR HANDLERS #######//
    onGetTechCompaniesError = (errResponse) => {
        console.log({error:errResponse});
    }

    onAddJobError = (errResponse) => {
        console.log({error:errResponse});
    }

    onUpdateJobError = (errResponse) => {
        console.log({error:errResponse});
    }

    onGetJobByIdError = (errResponse) => {
        console.log({ error:errResponse });
    }

    //####### RENDER PAGE #######//
    mapTechCompanies = (company) => {
        return(
            <React.Fragment key={`tecCo-${company.id}`}>
                <RenderCompany
                    company={company}
                />
            </React.Fragment>
        )
    }

    render(){
        return(
            <React.Fragment>
                <div className="container p-2 my-1 bg-primary rounded-3">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start px-3">
                        <h3 className="my-1 text-white">Add or Edit Job</h3>
                    </div>
                </div>
                <div className="col-lg-8 col-md-6 col-sm-12 my-3">
                    <div className="card border-0 shadow">
                        <div className="card-body m-4">
                            <Formik
                                enableReinitialize={true}
                                initialValues={this.state.formData}
                                onSubmit={this.submitForm}
                            >
                                {({ values })=>(
                                <Form>
                                    <div className="form-group mb-3 row">
                                        <label
                                            htmlFor="title"
                                            className="col-form-label col-sm-2"
                                            ><strong>Role</strong></label
                                        >
                                        <div className="col-sm-10">
                                            <Field
                                                type="text"
                                                className="form-control"
                                                placeholder="Title"
                                                name="title"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group mb-3 row">
                                        <label
                                            htmlFor="techCompanyId"
                                            className="
                                                col-sm-2 col-form-label
                                                forTechId
                                            "
                                            ><strong> Tech Company </strong></label
                                        >
                                        <div className="col-sm-10">
                                            <Field
                                                component="select"
                                                className="form-select"
                                                name="techCompanyId"
                                            >
                                                <option>Select</option>
                                                {this.state.mappedCompanies}
                                            </Field>
                                        </div>
                                    </div>

                                    <div className="form-group mb-3 row">
                                        <label
                                            htmlFor="description"
                                            className="col-sm-2 col-form-label"
                                            ><strong>Job Description</strong></label
                                        >
                                        <div className="col-sm-10">
                                            <Field
                                                type="text"
                                                className="form-control"
                                                placeholder="Description"
                                                name="description"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group mb-3 row">
                                        <label
                                            htmlFor="summary"
                                            className="col-sm-2 col-form-label"
                                            ><strong>Job Summary</strong></label
                                        >
                                        <div className="col-sm-10">
                                            <Field
                                                type="text"
                                                className="form-control"
                                                placeholder="Summary"
                                                name="summary"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group mb-3 row">
                                        <label
                                            htmlFor="pay"
                                            className="col-sm-2 col-form-label"
                                            ><strong>Pay</strong></label
                                        >
                                        <div className="col-sm-10">
                                            <Field
                                                type="text"
                                                className="form-control"
                                                placeholder=""
                                                name="pay"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group mb-3 row">
                                        <label
                                            htmlFor="skills"
                                            className="col-sm-2 col-form-label"
                                            ><strong>Skills</strong></label
                                        >
                                        <div className="col-sm-10">
                                            <Field
                                                type="text"
                                                className="form-control"
                                                placeholder="Skills"
                                                name="skills"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group mb-3 row">
                                        <label
                                            htmlFor="slug"
                                            className="col-sm-2 col-form-label"
                                            ><strong>Slug</strong></label
                                        >
                                        <div className="col-sm-10">
                                            <Field
                                                type="text"
                                                className="form-control"
                                                placeholder="Slug"
                                                name="slug"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group mb-3 row">
                                        <label
                                            htmlFor="statusId"
                                            className="col-sm-2 col-form-label"
                                            ><strong>Status</strong></label
                                        >
                                        <div className="col-sm-10">
                                            <Field
                                                type="text"
                                                className="form-control"
                                                placeholder="Active"
                                                name="statusId"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default UserAddJobsPage