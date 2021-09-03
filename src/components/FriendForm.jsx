import React from "react";

class FriendForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      bio: "",
      summary: "",
      headline: "",
      slug: "",
      statusId: "Active",
      primaryImage: "",
    };
  }

  onFormFieldChanged = (e) => {
    let currentTarget = e.currentTarget;
    let newValue = currentTarget.value;
    let inputName = currentTarget.name;

    this.setState(() => {
      let newState = {};
      newState[inputName] = newValue;
      return newState;
    });
  };

  onSubmitClicked = () => {};

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="p-5 mb-4 bg-light rounded-3">
            <h1 style={{ textAlign: "center" }}>Add or Edit Friend</h1>
            <div className="container-fluid py-4">
              <form>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="title"
                    value={this.state.title}
                    onChange={this.onFormFieldChanged}
                  />
                  <label htmlFor="floatingInput">Title</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="bio"
                    placeholder="bio"
                    value={this.state.bio}
                    onChange={this.onFormFieldChanged}
                  />
                  <label htmlFor="floatingInput">Bio</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="summary"
                    placeholder="summary"
                    value={this.state.summary}
                    onChange={this.onFormFieldChanged}
                  />
                  <label htmlFor="floatingInput">Summary</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="headline"
                    placeholder="headline"
                    value={this.state.headline}
                    onChange={this.onFormFieldChanged}
                  />
                  <label htmlFor="floatingInput">Headline</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="slug"
                    placeholder="slug"
                    value={this.state.slug}
                    onChange={this.onFormFieldChanged}
                  />
                  <label htmlFor="floatingInput">Slug</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    disabled
                    className="form-control"
                    name="statusId"
                    placeholder="statusId"
                    value={this.state.statusId}
                    onChange={this.onFormFieldChanged}
                  />
                  <label htmlFor="floatingInput">Status</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="primaryImage"
                    placeholder="primary image"
                    value={this.state.primaryImage}
                    onChange={this.onFormFieldChanged}
                  />
                  <label htmlFor="floatingInput">Primary Image</label>
                </div>
              </form>
              <div>
                <button
                  className="btn btn-primary"
                  onClick={this.submitClicked}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FriendForm;
