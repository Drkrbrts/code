import React from 'react';

class FriendForm extends React.Component {

    render() {
        return (
            <React.Fragment>
                <form id="friend-form"
                    className="form-group border border-dark border-2 rounded-3 my-4 col-9 mx-auto p-4 bg-light">
                    <div className="row d-flex justify-content-center">
                        <div className="row mb-4">
                            <div className="col-2">
                                <label htmlFor="title" name="title" className="col-form-label">Title</label>
                            </div>
                            <div className="col-9">
                                <input type="text" id="title" name="title" className="form-control" />
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-2">
                                <label htmlFor="bio" className="col-form-label">Bio</label>
                            </div>
                            <div className="col-9">
                                <input type="text" id="bio" name="bio" className="form-control" />
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-2">
                                <label htmlFor="summary" className="col-form-label">Summary</label>
                            </div>
                            <div className="col-9">
                                <input type="text" id="summary" name="summary" className="form-control" />
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-2">
                                <label htmlFor="headline" className="col-form-label">Headline</label>
                            </div>
                            <div className="col-9">
                                <input type="text" id="headline" name="headline" className="form-control" />
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-2">
                                <label htmlFor="slug" className="col-form-label">Slug</label>
                            </div>
                            <div className="col-9">
                                <input type="text" id="slug" name="slug" className="form-control" />
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-2">
                                <label htmlFor="status" className="col-form-label">Status</label>
                            </div>
                            <div className="col-9">
                                <input type="text" id="status" name="status" className="form-control" />
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-2">
                                <label htmlFor="skills" className="col-form-label">Skills</label>
                            </div>
                            <div className="col-9">
                                <input type="text" id="skills" name="skills" className="form-control" />
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-2">
                                <label htmlFor="primaryImage" className="col-form-label">Primary Image</label>
                            </div>
                            <div className="col-9">
                                <input type="text" id="primaryImage" name="primaryImage" className="form-control" />
                            </div>
                        </div>
                    </div>
                    <input type="submit" value="Submit" className="btn btn-primary mt-2 form-submit" />
                </form>
            </React.Fragment>
        )
    }
}

export default FriendForm;