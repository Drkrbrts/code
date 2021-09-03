import React from "react";
import service from "../services/userService";

class Presidents extends React.Component {
  state = {
    names: ["George Washington", "John Adams", "Thomas Jefferson"],
    // presidents: [
    //   {
    //     id: 1,
    //     president: 1,
    //     nm: "George Washington",
    //     pp: "None, Federalist",
    //     tm: "1789-1797",
    //     avatar:
    //       "https://www.history.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTU3OTIzNjc4MTIxMzcxNTk4/the-things-george-washington-worried-about-are-happening-todays-featured-photo.jpg",
    //   },
    //   {
    //     id: 2,
    //     president: 2,
    //     nm: "John Adams",
    //     pp: "Federalist",
    //     tm: "1797-1801",
    //     avatar:
    //       "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Gilbert_Stuart%2C_John_Adams%2C_c._1800-1815%2C_NGA_42933.jpg/220px-Gilbert_Stuart%2C_John_Adams%2C_c._1800-1815%2C_NGA_42933.jpg",
    //   },
    //   {
    //     id: 3,
    //     president: 3,
    //     nm: "Thomas Jefferson",
    //     pp: "Democratic-Republican",
    //     tm: "1801-1809",
    //     avatar:
    //       "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Official_Presidential_portrait_of_Thomas_Jefferson_%28by_Rembrandt_Peale%2C_1800%29%28cropped%29.jpg/220px-Official_Presidential_portrait_of_Thomas_Jefferson_%28by_Rembrandt_Peale%2C_1800%29%28cropped%29.jpg",
    //   },
    // ],
  };

  componentDidMount() {
    // this.setState((preState) => {
    //   return { mappedPresidents: preState.presidents.map(this.mapPresident) };
    // });
    service.getPresidents().then(this.onGetSuccess).catch(this.onGetError);
  }

  onGetSuccess = (response) => {
    console.log(response);
  };

  onGetError = (err) => {
    console.error(err);
  };

  mapPresident = (onePresident) => {
    return (
      <React.Fragment key={`Presidents-${onePresident.id}`}>
        <div className="card col-md-3">
          <img src={onePresident.avatar} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{onePresident.nm}</h5>
            <p className="card-text">
              <strong>{onePresident.pp}</strong>
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

  mapPresidentSimple = (onePresident) => {
    return <p key={`Presidents-${onePresident.id}`}>{onePresident.nm}</p>;
  };

  render() {
    return (
      <div className="col-md-12 p-5">
        <h1>Presidents</h1>
        <hr />
        <div className="row">
          {/* {this.state.presidents.map(this.mapPresident)} */}
          {this.state.mappedPresidents}
        </div>
      </div>
    );
  }
}

export default Presidents;
