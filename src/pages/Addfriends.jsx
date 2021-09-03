import React from "react";
import { toast } from "react-toastify";
import { NavLink, withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./Addfriends.css";

class Addfriends extends React.Component {
  state = {
    title: "",
    bio: "",
    summary: "",
    headline: "",
    slug: "",
    statusId: "",
    primaryImage: "",
    friends: [],
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addFriend = () => {
    var config = {
      method: "POST",
      url: "https://api.remotebootcamp.dev/api/friends",
      data: JSON.stringify({ ...this.state }),
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };

    return axios(config)
      .then((response) => {
        console.log(response.data);
      })
      .catch((response) => {
        console.warn(response);
      });
  };

  doFormSubmit = (e) => {
    e.preventDefault();
    console.log("form data", this.state);
    this.addFriend({ ...this.state })
      .then(() => {
        toast.success("Friend Added Successfully");
        this.props.history.push("/friends");
        console.log("friend was added");
      })
      .catch(() => {
        console.warn("something went wrong");
      });
  };

  // need to get all friends by person logged in

  /* 

    const numbers = [1,2,3,4];
    const outut = numbers.map((num) => num*2);

    what will be the output ? 
    console.log(output) = [2,4,6,8] ???? 
  */

  render() {
    // console.log("friends", this.state.friends);

    // const items = this.state.friends.map((friend) => (
    //   <div key={friend.id} class="col-md-2 card-template">
    //     <section id="templateThree">
    //       <div class="row wd-25"></div>
    //       <div class="col-sm-8 mb-4">
    //         <div class="card border-0 shadow">
    //           <img
    //             src={friend.primaryImage.imageUrl}
    //             class="card-img-top"
    //             alt="..."
    //           />
    //           <div class="card-body text-center">
    //             <h5 class="card-title mb-0">{friend.title}</h5>
    //             <div class="card-text text-black-50">{friend.bio}</div>
    //             <div class="card-text text-black-50">{friend.summary}</div>
    //             <h5 class="card-text mb-0">{friend.headline}</h5>
    //             <div>
    //               <div class="d-grid gap-2 d-md-block">
    //                 <button
    //                   class="btn btn-primary"
    //                   onClick={() => this.onItemClickedDelete(friend.id)}
    //                   type="button"
    //                 >
    //                   Delete
    //                 </button>
    //                 <button
    //                   class="btn btn-primary"
    //                   onClick={this.onItemClickedUpdate}
    //                   type="button"
    //                 >
    //                   Update
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //   </div>
    // ));
    return (
      <div>
        <div class="signup-form form-container">
          <form onSubmit={this.doFormSubmit}>
            <h2>Create Your Friend's List</h2>
            <p class="hint-text"></p>
            <div class="form-group">
              <label for="title" class="form-label">
                Title
              </label>
              <input
                type="text"
                maxlength="15"
                class="form-control"
                id="title"
                name="title"
                required="required"
                value={this.state.title}
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group">
              <label for="bio" class="form-label">
                Bio
              </label>
              <input
                type="text"
                className="form-bio"
                id="bio"
                name="bio"
                required="required"
                value={this.state.bio}
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group">
              <label for="summary" class="form-label">
                Summary
              </label>
              <input
                type="text"
                className="form-summary"
                id="summary"
                name="summary"
                required="required"
                value={this.state.summary}
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group">
              <label for="headline" class="form-label">
                headline
              </label>
              <input
                type="text"
                class="form-control"
                id="headline"
                name="headline"
                required="required"
                value={this.state.headline}
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group">
              <label for="slug" class="form-label">
                Slug
              </label>
              <input
                type="text"
                class="form-control"
                id="slug"
                name="slug"
                required="required"
                value={this.state.slug}
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group">
              <label for="status id" class="form-label">
                Status ID
              </label>
              <input
                type="text"
                class="form-control"
                id="statusId"
                name="statusId"
                value={this.state.statusId}
                onChange={this.handleChange}
              />
            </div>
            <div class="form-group">
              <label for="primaryImage" class="form-label">
                Primary Image
              </label>
              <input
                type="text"
                class="form-control"
                name="primaryImage"
                id="primaryImage"
                placeholder="Image"
                required="required"
                value={this.state.primaryImage}
                onChange={this.handleChange}
              />
            </div>
            &nbsp;
            <div class="form-group">
              <button type="submit" class="btn btn-success btn-sm btn-block">
                Add Friend
              </button>
            </div>
          </form>
          &nbsp;
          <div></div>
        </div>
        {/* <div class="container workspace">
          <div class="col">
            <div class="row">{items}</div>
          </div>
        </div> */}
      </div>
    ); // multi-line expression wrapp in ()
  }
}
export default withRouter(Addfriends);
