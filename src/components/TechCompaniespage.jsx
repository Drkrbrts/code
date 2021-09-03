import React from "react";
import techcoService from "../services/techcoService";
import TechCoCard from "./TechCoCard";
import Pagination from "rc-pagination";
import TechCoModal from "./TechCoModal";

class TechCompaniespage extends React.Component {
  state = {
    currentContact: "",
    isOpen: false,
    formData: {
      name: "",
      profile: "",
      summary: "",
      headline: "",
      contactInformation: "",
      slug: "",
      statusId: "",
      images: "",
      urls: "",
      tags: "",
      friendIds: 0,
    },
    current: 1,
    pageSize: 2,
    total: 0,
    mappedTechCo: [],
  };

  componentDidMount() {
    techcoService
      .getAll(this.state.current - 1, this.state.pageSize)
      .then(this.ongetAllSuccess)
      .catch(this.ongetAllError);
  }
  ongetAllSuccess = (allTechCo) => {
    console.log({ getAllSuccess: allTechCo });
    let techcoData = allTechCo.data.item.pagedItems;
    console.log(techcoData);

    this.setState(() => {
      return {
        total: allTechCo.data.item.totalCount,
        mappedTechCo: techcoData.map(this.mapCo),
      };
    });
  };

  mapCo = (oneCo) => {
    return (
      <TechCoCard
        company={oneCo}
        onEditClick={this.onEditClick}
        key={`TechCo=${oneCo.id}`}
        toggleModal={this.toggleModal}
        isOpen={this.state.isOpen}
      ></TechCoCard>
    );
  };
  toggleModal = (press) => {
    console.log("companiesPage toggle running");
    if (press.contactInformation) {
      console.log("open with info Button");
      this.setState((prevState) => {
        let newState = { ...prevState };
        newState.isOpen = !prevState.isOpen;
        newState.currentContact = press.contactInformation;
        return newState;
      });
    } else {
      console.log("No info/close button");
      this.setState((prevState) => {
        let newState = { ...prevState };
        newState.isOpen = !prevState.isOpen;
        newState.currentContact = null;
        return newState;
      });
    }

    // this.props.history.push({
    //   type: "EDIT_TOGGLE",
    //   contactInformation: press.contactInformation,
    // });

    // this.setState((prevState) => {
    //   return {
    //     isOpen: !prevState.isOpen,
    //   };
    // });
  };

  onEditClick = (press) => {
    console.log(press);

    this.props.history.push(`/techcompanies/form?techCoId=${press.id}`, {
      type: "EDIT_TECHCO",
      currentCard: press,
    });
  };

  ongetAllError = (response) => {
    console.log({ getAllError: response });
  };

  onAddClick = (e) => {
    e.preventDefault();
    this.props.history.push(`/techcompanies/add`);
  };

  onChange = (page) => {
    console.log(page);
    this.setState({ current: page }, () =>
      techcoService
        .getAll(page - 1, this.state.pageSize)
        .then(this.ongetAllSuccess)
        .catch(this.ongetAllError)
    );
  };

  render() {
    return (
      <>
        <header className="py-3 mb-4 border-bottom">
          <div className="container d-flex flex-wrap justify-content-center">
            <div
              className="
        d-flex
        align-items-center
        mb-3 mb-lg-0
        me-lg-auto
        text-dark text-decoration-none
      "
            >
              <svg className="bi me-2" width={40} height={32}>
                <use xlinkHref="#bootstrap" />
              </svg>
              <button
                type="button"
                className="btn btn-primary addJobButton"
                onClick={this.onAddClick}
              >
                +Add Tech Company
              </button>
            </div>
          </div>
        </header>
        <div className="row">{this.state.mappedTechCo}</div>
        {/* <div>{this.state.modal}</div> */}
        <Pagination
          key={`TechCoPagination=${this.state.id}`}
          pageSize={this.state.pageSize}
          onChange={this.onChange}
          current={this.state.current}
          total={this.state.total}
        />
        <TechCoModal
          key={`TechCoModal=${this.state.id}`}
          isOpen={this.state.isOpen}
          toggleModal={this.toggleModal}
          contactInformation={
            this.state.currentContact === null
              ? "no info"
              : this.state.currentContact.data
          }
        />
      </>
    );
  }
}
export default TechCompaniespage;
