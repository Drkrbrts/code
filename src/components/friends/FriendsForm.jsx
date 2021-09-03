import React from "react";
import { addFriend, editFriend } from "../../services/friendService";
import { getAllFriends } from "../../services/friendService";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

class FriendForm extends React.Component {
  state = {
    personData: this.propsToFormData(this.props),
  };

  componentDidMount() {}

  propsToFormData(props) {
    console.log(props);
    if (props.friendData && props.friendData.id) {
      return props.friendData;
    } else if (props.location && props.location.state) {
      return props.location.state;
    } else {
      return {
        title: "",
        bio: "",
        summary: "",
        headline: "",
        slug: "",
        statusId: "",
        primaryImage: "",
      };
    }
  }

  onFormFieldChanged = (e) => {
    const currentTarget = e.currentTarget;
    const newValue = currentTarget.value;
    const inputName = currentTarget.name;

    this.setState((prevState) => {
      const updatedFormData = {
        ...prevState.personData,
      };
      updatedFormData[inputName] = newValue;

      return { personData: updatedFormData };
    }, this.stateChanged);
  };

  addFriendSuccess = (response) => {
    toast.success("🦄 Friend Added!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    console.log(response);
  };
  addFriendError = (err) => {
    toast.error("Add Friend Error", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    console.error(err);
  };

  editFriendSuccess = (response) => {
    toast.success("🦄 Friend Updated!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    console.log(response);
  };

  editFriendError = (err) => {
    toast.error("Add Friend Error", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    console.error(err);
  };
  getAllFriendsSuccess = (response) => {
    this.props.history.push("/friends");
    toast.success("🦄 Friend Added!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    console.log(response);
  };
  getAllFriendsError = (err) => {
    toast.error("Add Friend Error", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    console.error(err);
  };

  turboClick = () => {
    //  let banana = this.state.personData.primaryImage.imageUrl;
    this.state.personData.id
      ? editFriend(this.state.personData, this.state.personData.id)
          .then(this.editFriendSuccess)
          .catch(this.editFriendError)
      : addFriend(this.state.personData)
          .then(this.addFriendSuccess)
          .catch(this.addFriendError);
  };
  turboGetFriends = () => {
    getAllFriends(0, 2)
      .then(this.getAllFriendsSuccess)
      .catch(this.getAllFriendsError);
  };

  render() {
    return (
      <React.Fragment>
        <div className="container col-md-6">
          <form>
            <div className="form-group mb-3">
              <label htmlFor="exampleInputEmail1">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={this.state.personData.title}
                onChange={this.onFormFieldChanged}
              ></input>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="exampleInputPassword1">Bio</label>
              <input
                type="text"
                className="form-control"
                id="bio"
                name="bio"
                value={this.state.personData.bio}
                onChange={this.onFormFieldChanged}
              ></input>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="exampleInputPassword1">Summary</label>
              <input
                type="text"
                className="form-control"
                id="summary"
                name="summary"
                value={this.state.personData.summary}
                onChange={this.onFormFieldChanged}
              ></input>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="exampleInputPassword1">Headline</label>
              <input
                type="text"
                className="form-control"
                id="headline"
                name="headline"
                value={this.state.personData.headline}
                onChange={this.onFormFieldChanged}
              ></input>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="exampleInputPassword1">Slug</label>
              <input
                type="text"
                className="form-control"
                id="slug"
                name="slug"
                value={this.state.personData.slug}
                onChange={this.onFormFieldChanged}
              ></input>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="exampleInputPassword1">Status Id</label>
              <input
                type="text"
                className="form-control"
                id="statusId"
                name="statusId"
                placeholder="NotSet, Active, Deleted, Flagged"
                value={this.state.personData.statusId}
                onChange={this.onFormFieldChanged}
              ></input>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="exampleInputPassword1">Primary Image</label>
              <input
                type="URL"
                className="form-control"
                id="primaryImage"
                name="primaryImage"
                placeholder="must be a valid URL"
                value={this.state.personData.primaryImage.imageUrl}
                onChange={this.onFormFieldChanged}
              ></input>
            </div>
            <div>
              <input
                type="button"
                onClick={this.turboClick}
                let
                className="btn btn-primary"
                value={this.state.personData.id ? "update" : "add friend"}
              />
              <input
                type="button"
                onClick={this.turboGetFriends}
                className="btn btn-warning "
                value="See All Friends"
              />
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default FriendForm;
