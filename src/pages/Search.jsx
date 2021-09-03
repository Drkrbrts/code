import React from "react";
import axios from "axios";

/*class Search extends React.Component {
  showFriends = () => {
    var config = {
      method: "GET",
      url: "https://api.remotebootcamp.dev/api/friends?pageIndex=0&pageSize=5",
      crossdomain: true,
    };

    axios(config)
      .then((response) => {
        console.log("data", response.data.item.pagedItems);
        console.log(this.state.friends);
        this.setState({ friends: response.data.item.pagedItems });
      })
      .catch((response) => {
        console.warn(response);
      });
  };

  //need to be logged in?
  //componentDidMount() {
  //this.getFriends();
  //   

  onItemClickedShow = (e) => {
    this.showFriends();
    console.log("clicked");
  };

  render() {
    return (
      <div class="container">
        <h1> Welcome to your Friends Page</h1>
        <h1> </h1>
        <button
          type="button"
          class="btn btn-success btn-lg btn-blockon"
          onClick={this.onItemClickedShow}
        >
          Show Friends
        </button>
      </div>
    ); // multi-line expression wrapp in ()
  }
}

//export default Search; */
