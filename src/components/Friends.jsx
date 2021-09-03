import React, { Component } from "react";
import * as starterService from "../services/starterService";
//import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FriendForm from "./FriendForm";

class Friends extends Component {
  state = {
    people: [],
    formData: null,
  };

  componentDidMount() {
    starterService
      .getFriends()
      .then(this.onGetFriendsSuccess)
      .catch(this.onGetFriendsError);
  }

  onGetFriendsSuccess = (response) => {
    this.setState(() => {
      return { people: response };
    });
  };

  onGetFriendsError = (error) => {
    console.log(error);
  };

  onNewFriend = (e) => {
    this.setState(() => {
      return {
        formData: {},
      };
    });
  };

  onSubmitRequested = (newPerson) => {
    this.setState(() => {
      let updatedPeople = [...this.state.people];
      let existingPersonIndex = this.state.people.findIndex((item) => {
        return item.id === newPerson.id;
      });
      if (existingPersonIndex >= 0) {
        updatedPeople[existingPersonIndex] = newPerson;
      } else {
        updatedPeople = updatedPeople.concat(newPerson);
      }
      return {
        people: updatedPeople,
        formData: null,
      };
    });
  };

  onDeleteRequested = (personData) => {
    this.setState(() => {
      let updatedPeople = [...this.state.people];

      let updatedPersonIndex = this.state.people.findIndex((item) => {
        return item.id === personData.id;
      });

      if (updatedPersonIndex >= 0) {
        updatedPeople.splice(updatedPersonIndex, 1);
      }
      console.log(updatedPeople, "delete requested");
      return { people: updatedPeople, formData: null };
    });
  };

  onCancelRequested = () => {
    this.setState(() => {
      return { formData: null };
    });
  };

  onSelect = (person, e) => {
    console.log(person, "on select");
    e.preventDefault();
    this.setState(() => {
      return { formData: person };
    });
  };

  render() {
    const peopleItems = this.state.people ? (
      this.state.people.map((person) => {
        return (
          <div key={person.id}>
            <div className="card shadow p-3 my-3 mx-3 bg-white rounded col align-items-center">
              <div>
                <img
                  className="card-img-top rounded-circle"
                  src={person.primaryImage.imageUrl || person.primaryImage}
                  alt="selfie"
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">{person.title}</h3>
              </div>
              <div>
                <button
                  onClick={(e) => this.onSelect(person, e)}
                  type="button"
                  className="btn btn-warning m-2"
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <div>No Friends...</div>
    );

    return (
      <>
        <div className="friend-container">
          <button
            type="button"
            className="btn btn-success"
            disabled={this.state.formData === null ? false : true}
            onClick={this.onNewFriend}
          >
            + Add Friend
          </button>
          {this.state.formData && (
            <div className="col-6">
              <FriendForm
                key={this.state.formData.id}
                formData={this.state.formData}
                onSubmit={this.onSubmitRequested}
                onCancel={this.onCancelRequested}
                onDelete={this.onDeleteRequested}
              />
            </div>
          )}
          <div className="d-inline-flex justify-content-center flex-wrap">
            {this.state.people && peopleItems}
          </div>
        </div>
      </>
    );
  }
}

export default Friends;
