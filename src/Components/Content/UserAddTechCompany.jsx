import React from "react";
import * as techCompanyService from "../../services/techCompanyService";
import { toast } from "react-toastify";

class UserAddTechCompany extends React.Component {
    state = {
        formData: {
            images: [
                {
                    imageTypeId: 0,
                    imageUrl: "",
                },
            ],
        },
        techCoId: 0,
    };

    componentDidMount() {
        console.log("componentDidMount() -> UserAddTechCompanyPage");
        if (this.props.match.params.techCoId) {
            techCompanyService
                .getTechCompanyById(this.props.match.params.techCoId)
                .then(this.onGetTechCompanyByIdSuccess)
                .catch(this.onGetTechCompanyByIdError);
        }
    }

    onFormFieldChange = (e) => {
        e.preventDefault();
        let currentTarget = e.currentTarget;
        let inputName = currentTarget.name;
        let newValue = currentTarget.value;
        this.setState(() => {
            let formData = { ...this.state.formData };
            if (inputName === "imageUrl" || inputName === "imageTypeId") {
                formData.images[0][inputName] = newValue;
            } else if (inputName === "urls") {
                formData[inputName] = newValue.split(",");
            } else if (inputName === "tags") {
                formData[inputName] = newValue.split(",");
            } else if (inputName === "friendIds") {
                formData[inputName] = parseInt(newValue.split(","));
            } else {
                formData[inputName] = newValue;
            }
            return { formData };
        });
    };

    onSubmitClick = (e) => {
        e.preventDefault();
        // eslint-disable-next-line
        if (e.currentTarget.value == 0) {
            techCompanyService
                .addTechCompany(this.state.formData)
                .then(this.onAddTechCompanySuccess)
                .catch(this.onAddTechCompanyError);
        } else {
            techCompanyService
                .updateTechCompany(this.state.techCoId, this.state.formData)
                .then(this.onUpdateTechCompanySuccess)
                .catch(this.onUpdateTechCompanyError);
        }
    };

    //####### SUCCESS HANDLERS #######//
    onAddTechCompanySuccess = (response) => {
        console.log(response.data, "onAddTechCompanySuccess");
        this.props.history.push("/techCo");
    };

    onGetTechCompanyByIdSuccess = (response) => {
        console.log(response.data, "onGetTechCompanyByIdSuccess");
            let companyByID = response.data.item

        this.setState((prevState) => {
            let formData = prevState.formData;
            let techCoId = prevState.techCoId;
            formData = companyByID;
            techCoId = response.data.item.id;
            formData.contactInformation = response.data.item.contactInformation
                ? response.data.item.contactInformation.data
                : "";
            formData.urls = response.data.item.urls
                ? response.data.item.urls[0].url
                : "";
            formData.tags = response.data.item.tags
                ? response.data.item.tags[0].tagName
                : "";

            if (response.data.item.images) {
                let imageTypeId = response.data.item.images[0].imageTypeId;
                if (imageTypeId.toLowerCase() === "seo")
                    formData.images[0].imageTypeId = 1;
                if (imageTypeId.toLowerCase() === "cover")
                    formData.images[0].imageTypeId = 2;
                if (imageTypeId.toLowerCase() === "main")
                    formData.images[0].imageTypeId = 3;
                if (imageTypeId.toLowerCase() === "other")
                    formData.images[0].imageTypeId = 4;
                if (imageTypeId.toLowerCase() === "logo")
                    formData.images[0].imageTypeId = 5;
            } else {
                formData.images = [
                    {
                        imageTypeId: 0,
                        imageUrl: "",
                    },
                ];
            }

            return { formData, techCoId };
        });
    };

    onUpdateTechCompanySuccess = (response) => {
        console.log(response.data, "onUpdateTechCompanySuccess");
        toast.info(
            `Successfully updated Tech Company Id: ${this.state.techCoId}`
        );
        this.props.history.push("/techCo");
    };

    //####### ERROR HANDLERS #######//
    onAddTechCompanyError = (errResponse) => {
        console.log({ error: errResponse });
    };

    onGetTechCompanyByIdError = (errResponse) => {
        console.log({ error: errResponse });
    };

    onUpdateTechCompanyError = (errResponse) => {
        console.log({ error: errResponse });
        toast.error(`${errResponse.response.data.errors[0]}`);
    };

    render() {
        return (
            <React.Fragment>
                <div className="container p-2 my-1 bg-success rounded-3">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start px-3">
                        <h3 className="my-1 text-white">
                            Add or Edit Tech Company
                        </h3>
                    </div>
                </div>
                <div className="col-lg-8 col-md-6 col-sm-12 my-3">
                    <div className="card border-0 shadow">
                        <div className="card-body m-4">
                            <form>
                                <div className="form-group mb-3 row">
                                    <label
                                        htmlFor="name"
                                        className="col-form-label col-sm-2"
                                    >
                                        <strong>Name</strong>
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Name"
                                            name="name"
                                            onChange={this.onFormFieldChange}
                                            value={this.state.formData.name}
                                        />
                                    </div>
                                </div>

                                <div className="form-group mb-3 row">
                                    <label
                                        htmlFor="profile"
                                        className="col-form-label col-sm-2"
                                    >
                                        <strong>Profile</strong>
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Profile"
                                            name="profile"
                                            onChange={this.onFormFieldChange}
                                            value={this.state.formData.profile}
                                        />
                                    </div>
                                </div>

                                <div className="form-group mb-3 row">
                                    <label
                                        htmlFor="summary"
                                        className="col-sm-2 col-form-label"
                                    >
                                        <strong>Co. Summary</strong>
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Summary"
                                            name="summary"
                                            onChange={this.onFormFieldChange}
                                            value={this.state.formData.summary}
                                        />
                                    </div>
                                </div>

                                <div className="form-group mb-3 row">
                                    <label
                                        htmlFor="headline"
                                        className="col-sm-2 col-form-label"
                                    >
                                        <strong>Co. Headline</strong>
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Headline"
                                            name="headline"
                                            onChange={this.onFormFieldChange}
                                            value={this.state.formData.headline}
                                        />
                                    </div>
                                </div>

                                <div className="form-group mb-3 row">
                                    <label
                                        htmlFor="contactInformation"
                                        className="col-sm-2 col-form-label"
                                    >
                                        <strong>Contact Information</strong>
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder=""
                                            name="contactInformation"
                                            onChange={this.onFormFieldChange}
                                            value={
                                                this.state.formData
                                                    .contactInformation
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="form-group mb-3 row">
                                    <label
                                        htmlFor="slug"
                                        className="col-sm-2 col-form-label"
                                    >
                                        <strong>Slug</strong>
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Slug"
                                            name="slug"
                                            onChange={this.onFormFieldChange}
                                            value={this.state.formData.slug}
                                        />
                                    </div>
                                </div>

                                <div className="form-group mb-3 row">
                                    <label
                                        htmlFor="statusId"
                                        className="col-sm-2 col-form-label"
                                    >
                                        <strong>Status</strong>
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Active"
                                            name="statusId"
                                            onChange={this.onFormFieldChange}
                                            value={this.state.formData.statusId}
                                        />
                                    </div>
                                </div>

                                <div className="form-group mb-3 row">
                                    <label
                                        htmlFor="images"
                                        className="col-sm-2 col-form-label"
                                    >
                                        <strong>Images</strong>
                                    </label>
                                    <div className="col-sm-2">
                                        <input
                                            type="number"
                                            min="1"
                                            max="5"
                                            className="form-control"
                                            placeholder="Image ID"
                                            name="imageTypeId"
                                            onChange={this.onFormFieldChange}
                                            value={
                                                this.state.formData.images[0]
                                                    .imageTypeId || ""
                                            }
                                        />
                                    </div>

                                    <div className="col-sm-8">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Image Url"
                                            name="imageUrl"
                                            onChange={this.onFormFieldChange}
                                            value={
                                                this.state.formData.images[0]
                                                    .imageUrl
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="form-group mb-3 row">
                                    <label
                                        htmlFor="urls"
                                        className="col-sm-2 col-form-label"
                                    >
                                        <strong>URLs</strong>
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder=""
                                            name="urls"
                                            onChange={this.onFormFieldChange}
                                            value={this.state.formData.urls}
                                        />
                                    </div>
                                </div>

                                <div className="form-group mb-3 row">
                                    <label
                                        htmlFor="tags"
                                        className="col-sm-2 col-form-label"
                                    >
                                        <strong>Tags</strong>
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder=""
                                            name="tags"
                                            onChange={this.onFormFieldChange}
                                            value={
                                                this.state.formData.tags || ""
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="form-group mb-3 row">
                                    <label
                                        htmlFor="friendIds"
                                        className="col-sm-2 col-form-label"
                                    >
                                        <strong>Friend IDs</strong>
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            type="number"
                                            min="0"
                                            className="form-control"
                                            placeholder=""
                                            name="friendIds"
                                            onChange={this.onFormFieldChange}
                                            value={
                                                this.state.formData.friends ||
                                                ""
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        onClick={this.onSubmitClick}
                                        name="jobId"
                                        value={this.state.techCoId}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default UserAddTechCompany;
