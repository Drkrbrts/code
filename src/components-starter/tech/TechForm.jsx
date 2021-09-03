import React from "react";
import debug from "sabio-debug";
import { createCompany, updateCompany } from "../../services/techService";

const _logger = debug.extend("TechForm");

class TechForm extends React.Component
{

    state = {
        shouldUpdateCompany: false,
        coId: 0,
        formData: {
            "name": "",
            "profile": "",
            "summary": "",
            "headline": "",
            "contactInformation": "",
            "slug": "",
            "statusId": "Active",
            "images": [
                {
                    "imageTypeId": 0,
                    "imageUrl": ""
                }
            ],
            "urls": [
                ""
            ],
            "tags": [
                ""
            ],
            "friendIds": [
                0
            ]
        }
    }

    onChangeFunction = (e) =>
    {

        let inputName = e.currentTarget.name;
        let inputValue = e.currentTarget.value;


        this.setState(() =>
        {
            let formData = { ...this.state.formData };

            if (inputName === "urls" || inputName === "tags" || inputName === "friendIds")
            {
                inputValue = [
                    inputValue
                ]
            }

            if (inputName === "imageUrl" || inputName === "imageTypeId")
            {
                formData.images[0][inputName] = inputValue;
                return { formData }
            }

            formData[inputName] = inputValue;
            return { formData }

        })
    }

    onCreateCompanySuccess = (response) =>
    {
        _logger("onCreateCompanySuccess", response);
        this.setState(() =>
        {
            let shouldUpdateCompany = { ...this.state.shouldUpdateCompany };
            let coId = { ...this.state.coId };
            shouldUpdateCompany = true;
            coId = response.data.item;
            return { shouldUpdateCompany, coId }
        })
    }

    onCreateCompanyFail = (response) =>
    {
        _logger("onCreateCompanyFail", response)
    }

    onCreateCompanyClicked = () =>
    {
        let coInfo = this.state.formData;
        createCompany(coInfo)
            .then(this.onCreateCompanySuccess)
            .catch(this.onCreateCompanyFail)
    }

    onUpdateCompanySuccess = (response) =>
    {
        _logger("onCreateConUpdateCompanySuccessompanyFail", response)
    }

    onUpdateCompanyFail = (response) =>
    {
        _logger("onUpdateCompanyFail", response)
    }

    onUpdateCompanyClicked = () =>
    {
        let coInfo = this.state.formData;
        let coId = this.state.coId;
        updateCompany(coInfo, coId)
            .then(this.onUpdateCompanySuccess)
            .catch(this.onUpdateCompanyFail)
    }

    render()
    {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 p-5">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name:</label>
                                <input type="text"
                                    className="form-control"
                                    name="name"
                                    value={this.state.formData.name}
                                    onChange={this.onChangeFunction}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="profile" className="form-label">Profile:</label>
                                <input type="text"
                                    className="form-control"
                                    name="profile"
                                    value={this.state.formData.profile}
                                    onChange={this.onChangeFunction}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="summary" className="form-label">Summary:</label>
                                <input type="text"
                                    className="form-control"
                                    name="summary"
                                    value={this.state.formData.summary}
                                    onChange={this.onChangeFunction}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="headline" className="form-label">Headline:</label>
                                <input type="text"
                                    className="form-control"
                                    name="headline"
                                    value={this.state.formData.headline}
                                    onChange={this.onChangeFunction}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="contactInformation" className="form-label">Contact Information:</label>
                                <input type="text"
                                    className="form-control"
                                    name="contactInformation"
                                    value={this.state.formData.contactInformation}
                                    onChange={this.onChangeFunction}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="slug" className="form-label">Slug:</label>
                                <input type="text"
                                    className="form-control"
                                    name="slug"
                                    value={this.state.formData.slug}
                                    onChange={this.onChangeFunction}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="statusId" className="form-label">Status ID:</label>
                                <input type="text"
                                    className="form-control"
                                    name="statusId"
                                    value={this.state.formData.statusId}
                                    onChange={this.onChangeFunction}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="imageTypeId" className="form-label">Image Type ID:</label>
                                <input type="text"
                                    className="form-control"
                                    name="imageTypeId"
                                    value={this.state.formData.images[0].imageTypeId}
                                    onChange={this.onChangeFunction}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="imageUrl" className="form-label">Image URL:</label>
                                <input type="text"
                                    className="form-control"
                                    name="imageUrl"
                                    value={this.state.formData.images[0].imageUrl}
                                    onChange={this.onChangeFunction}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="urls" className="form-label">URLs:</label>
                                <input type="text"
                                    className="form-control"
                                    name="urls"
                                    value={this.state.formData.urls[0]}
                                    onChange={this.onChangeFunction}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="tags" className="form-label">Tags:</label>
                                <input type="text"
                                    className="form-control"
                                    name="tags"
                                    value={this.state.formData.tags[0]}
                                    onChange={this.onChangeFunction}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="friendIds" className="form-label">Friend IDs:</label>
                                <input type="text"
                                    className="form-control"
                                    name="friendIds"
                                    value={this.state.formData.friendIds[0]}
                                    onChange={this.onChangeFunction}
                                />
                            </div>
                        </form>
                        {!this.state.shouldUpdateCompany && <button type="button" className="btn btn-primary" onClick={this.onCreateCompanyClicked}>Create Company</button>}
                        {this.state.shouldUpdateCompany && <button type="button" className="btn btn-success" onClick={this.onUpdateCompanyClicked}>Update Company</button>}
                    </div>
                </div>
            </div>
        )
    }
}

export default TechForm;