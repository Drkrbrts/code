import React from 'react'

class FriendsPage extends React.Component {
  state = {
    names: ["George Washington", "John Adams", "Thomas Jefferson"],
    presidents: [
      {
        nm: "George Washington",
        president: 1,
        id: 1,
        pp: "None, Federalist",
        tm: "1789-1797",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/1200px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg"
      },
      {
        nm: "John Adams",
        id: 2,
        president: 2,
        pp: "Federalist",
        tm: "1797-1801",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Gilbert_Stuart%2C_John_Adams%2C_c._1800-1815%2C_NGA_42933.jpg/800px-Gilbert_Stuart%2C_John_Adams%2C_c._1800-1815%2C_NGA_42933.jpg"
    },
      {
        nm: "Thomas Jefferson",
        id: 3,
        president: 3,
        pp: "Democratic-Republican",
        tm: "1801-1809",
        avatar: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Official_Presidential_portrait_of_Thomas_Jefferson_%28by_Rembrandt_Peale%2C_1800%29%28cropped%29.jpg"
    }
    ]
  }

  componentDidMount() {
    this.setState(prevState => {
      return {mappedPresidents: prevState.presidents.map(this.mapPresident)}
    })
  }

  mapPresident = (onePres) => {
    return (
      <div className="card col-md-3" key={`President-${onePres.id}`}>
        <img className="card-img-top" src={`${onePres.avatar}`} alt={`President - ${onePres.nm}`} />
        <div className="card-body">
          <h5 className="card-title">{onePres.nm}</h5>
          <p className="card-text"><strong>{onePres.pp}</strong></p>
          <a href="/" className="btn btn-primary link-button">Go Home</a>
        </div>
      </div>
    )
  }

    mapPresidentSimple = (onePres) => {
    var result = <p key={`President-${onePres.id}`}>{onePres.name}</p>;

    return result;
  }

  render() {
  return(
    <div className="col-md-12 p-5">
      <h1>Presidents</h1>
      <hr />
      <div className="row">
        {this.state.presidents.map(this.mapPresident)}
      </div>
    </div>
  )
}
}

export default FriendsPage