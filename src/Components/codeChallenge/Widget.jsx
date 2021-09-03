import React from "react";
import { postEntity } from "./entityService";
import { toast } from "react-toastify";

class Widget extends React.Component {
  state = {
    product: { name: "", manufacturer: "", description: "", cost: 0 },
  };

  widgetFormChange = (e) => {
    let product = { ...this.state.product };
    if (e.currentTarget.name === "cost") {
      product[e.currentTarget.name] = parseInt(e.currentTarget.value);
    }
    product[e.currentTarget.name] = e.currentTarget.value;
    // console.log(typeof e.currentTarget.value);
    this.setState({ product });
  };

  createClicked = () => {
    console.log("create Firing!");
    postEntity(this.state.product)
      .then(this.onEntitySuccess)
      .catch(this.onEntityError);
  };

  onEntitySuccess = (response) => {
    console.log(response);
    toast.success(`Widget was created itemID:${response.data.item}`);
  };

  onEntityError = (response) => {
    console.log("error: ", response);
    toast.error(response, "failed");
  };

  render() {
    return (
      <div className="container ps-10 pe-2 pt-5 pb-5">
        <div className="row shadow">
          <h6 className="text-center">Widget Info</h6>
          <form>
            {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}

            <div className="form-outline mb-4">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                onChange={this.widgetFormChange}
              />
            </div>

            <div className="form-outline mb-4">
              <input
                name="manufacturer"
                type="text"
                className="form-control"
                placeholder="manufacturer"
                onChange={this.widgetFormChange}
              />
            </div>

            {/* <!-- Email input --> */}
            <div className="form-outline mb-4">
              <input
                name="description"
                type="text"
                className="form-control"
                placeholder="Description"
                onChange={this.widgetFormChange}
              />
            </div>

            {/* <!-- Password input --> */}
            <div className="form-outline mb-4">
              <input
                name="cost"
                type="text"
                className="form-control"
                placeholder="Cost"
                onChange={this.widgetFormChange}
              />
            </div>

            {/* <!--Avatar URL--> */}

            {/* <!-- Submit button --> */}

            <button
              type="button"
              className="btn btn-primary btn-block register mb-4"
              onClick={this.createClicked}
            >
              Create
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default Widget;
