import React from "react";
import * as techCosService from "../services/techCosService";
import TechCoCard from "./TechCoCard";
import TechCoForm from "./TechCoForm";

export default class TechCos extends React.Component {
  state = {
    formData: null,
  };
  componentDidMount() {
    techCosService
      .getPaginated()
      .then(this.onGetSuccess)
      .catch(this.onGetError);
  }
  onGetSuccess = (response) => {
    console.log(response);
    this.setState(() => {
      return {
        mappedTechCos: response.data.item.pagedItems.map(this.mapTechCo),
      };
    });
  };
  onGetError = (error) => {
    console.log(error);
  };

  onEditTechCoClick = (techCo) => {
    console.log(techCo);
    this.setState(() => {
      const derivedFormDataFromTechCo = {
        name: "",
        profile: "",
        summary: "",
        headline: "",
        contactInformation: "",
        slug: "",
        statusId: "Active",
        images: null,
        urls: null,
        tags: null,
        friends: null,
      };
      return {
        formData: derivedFormDataFromTechCo,
      };
    });
  };

  mapTechCo = (techCo) => {
    return (
      <TechCoCard
        key={techCo.id}
        techCo={techCo}
        onClick={this.onEditTechCoClick}
      />
    );
  };
  render() {
    return (
      <>
        <h3>Tech Companies</h3>
        <hr />

        <div className="row">
          <div className="col-6 row border border-dark">
            {this.state.mappedTechCos}
          </div>
          <div className="col-6 border border-dark">
            <TechCoForm />
          </div>
        </div>
      </>
    );
  }
}
