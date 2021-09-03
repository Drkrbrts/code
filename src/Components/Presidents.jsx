import React from "react";
import { getFriends } from "../services/userService";

class Presidents extends React.Component {
  state = {
    names: ["George Washington", "John Adams", "Thomas Jefferson"],
    // presidents: [
    //   {
    //     name: "George Washington",
    //     id: 1,
    //     president: 1,
    //     pp: "None, Federalist",
    //     tm: "1789-1797",
    //     avatar:
    //       "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/206px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg",
    //   },
    //   {
    //     name: "John Adams",
    //     id: 2,
    //     president: 2,
    //     pp: "Federalist",
    //     tm: "1797-1801",
    //     avatar:
    //       "https://www.whitehouse.gov/wp-content/uploads/2021/01/02_john_adams.jpg",
    //   },
    //   {
    //     name: "Thomas Jefferson",
    //     id: 3,
    //     president: 3,
    //     pp: "Democratic-Republican",
    //     tm: "1801-1809",
    //     avatar:
    //       "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Thomas_Jefferson_by_Rembrandt_Peale%2C_1800.jpg/503px-Thomas_Jefferson_by_Rembrandt_Peale%2C_1800.jpg",
    //   },
    // ],
  };
  componentDidMount() {
    getFriends().then(this.onGetSuccess).catch(this.onGetError);
  }

  onGetSuccess = (response) => {
    console.log(response.data.item.pagedItems);
    let oGState = response.data.item.pagedItems;
    this.setState((prevState) => {
      return { mappedFriends: oGState.map(this.mapFriend) };
    });
  };

  onGetError = (err) => {
    console.error(err);
  };

  mapFriend = (oneFriend) => {
    return (
      <React.Fragment key={`Friends-${oneFriend.id}`}>
        <div className="card col-md-3">
          <img
            src={oneFriend.primaryImage.imageUrl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{oneFriend.name}</h5>
            <p className="card-text">
              <strong>{oneFriend.bio}</strong>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button className="btn btn-primary link-button">
              Go somewhere
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  };

  // mapPresidentSimple = (onePresident) => {
  //   return <p key={`Presidents-${onePresident.id}`}>{onePresident.name}</p>;
  // };

  render() {
    return (
      <div className="col-md-12 p-5">
        <h1>Presidents</h1>
        <hr />
        <div className="row">
          {/* {this.state.presidents.map(this.mapPresident)} */}
          {this.state.mappedFriends}
        </div>
      </div>
    );
  }
}

export default Presidents;
