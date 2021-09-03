import React from "react";


class Presidents extends React.Component {

    state = {
        names : ["George Washington", "John Adams", "Thomas Jefferson"],
        presidents:[{
            id: 1,
            president: 1,
            nm: "George Washington",
            pp: "None, Federalist",
            tm: "1789-1797",
            avatar: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2NDcwODAyODk0NDk2OTI5/gilbert_stuart_williamstown_portrait_of_george_washington_promo.jpg"
          },
          {
            id: 2,
            president: 2,
            nm: "John Adams",
            pp: "Federalist",
            tm: "1797-1801",
            avatar: "https://9b16f79ca967fd0708d1-2713572fef44aa49ec323e813b06d2d9.ssl.cf2.rackcdn.com/1140x_a10-7_cTC/John-Adams-1606314332.jpg"
          },
          {
            id: 3,
            president: 3,
            nm: "Thomas Jefferson",
            pp: "Democratic-Republican",
            tm: "1801-1809",
            avatar: "https://bri-wp-images.s3.amazonaws.com/wp-content/uploads/20201029144528/858px-Thomas_Jefferson_by_Rembrandt_Peale_1800-1.jpg"
          }
        ]
    };

    componentDidMount() {

        this.setState((prevState)=>{

            return {mappedPresidents: prevState.presidents.map(this.mapPresident)}
        });
    }

    onPresClick = (e) => {
        console.log(e.currentTarget.dataset)
    };

    onPresClickFull = (pres) => {
        console.log(pres)
    };

    mapPresident = onePresident => {
        return <div key={`Pres-${onePresident.id}`} className="card col-md-3">
        <img src={onePresident.avatar} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{onePresident.nm}</h5>
          <p className="card-text">
              <strong>{onePresident.pp}</strong> 
              Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <button className="" onClick={this.onPresClickFull} data-pres-id={onePresident.id}>Go somewhere</button>
        </div>
      </div>;
    };

    mapPresidentSimple = onePresident => {
        return <p key={`Pres-${onePresident.id}`}>{onePresident.nm}</p>;
    };

    render() {
        return(
            <div className="col-md-12 p-5">
                <h1>Presidents</h1>
                <hr/>
                <div className="row">
                    {this.state.mappedPresidents}
                </div>
            </div>

        );
    }
}

export default Presidents;