import React from "react";
import * as techCoService from "../services/techCoService";
import SingleTechCo from "./SingleTechCo";
import TechCoNav from "./TechCoNav";

class TechCo extends React.Component {
  state = {
    mappedTechCo: [],
  };

  componentDidMount() {
    techCoService
      .getTechCo()
      .then(this.onGetTechCoSuccess)
      .catch(this.onGetTechCoError);
  }

  onGetTechCoSuccess = (response) => {
    console.log(response, "get techCo success");
    let techCoData = response.data.item.pagedItems;
    console.log(techCoData);

    this.setState(() => {
      return {
        mappedTechCo: techCoData.map(this.mapSingleTechCo),
      };
    });
  };

  mapSingleTechCo = (techCo) => (
    <SingleTechCo {...this.props} singleTechCo={techCo} key={techCo.id} />
  );

  onGetTechCoError = (error) => {
    console.log(error, "get techCo error");
  };

  render() {
    return (
      <>
        <TechCoNav />
        <div className="container">
          <div className="row row-cols-md-4 g-4">{this.state.mappedTechCo}</div>
        </div>
      </>
    );
  }
}

export default TechCo;
