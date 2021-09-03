import React from "react";
import { withRouter } from "react-router-dom";
import "./compStyle.css";
import TechCoModal from "./TechCoModal";
import { toast } from "react-toastify";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import techCoService from "../services/techCoService";
import SingleTechCo from "./SingleTechCo";
import { Formik, Form, Field } from "formik";

class TechCo extends React.Component {
  state = {
    currentTechCos: [],
    mappedTechCos: [],
    totalNumberOfCompanies: 0,
    firstPage: 1,
    pageSize: 3,
    isOpen: false,
    modalTitle: "",
    modalBody: {},
    formData: { search: "" },
  };

  componentDidMount = () => {
    techCoService
      .getByPagination(this.state.firstPage, this.state.pageSize)
      .then(this.onGetPaginatedSuccess)
      .catch(this.onGetPaginatedError);
  };

  onAddTechCoClick = () => {
    this.props.history.push("/techcoform");
  };

  onPagChange = (currentPage, size) => {
    techCoService
      .getByPagination(currentPage, size)
      .then(this.onGetPaginatedSuccess)
      .catch(this.onGetPaginatedError);
  };

  onGetPaginatedSuccess = (response) => {
    console.log(response);
    this.setState((prevState) => {
      let currentTechCos = { ...prevState.currentTechCos };
      let mappedTechCos = { ...prevState.mappedTechCos };
      let totalNumberOfCompanies = { ...prevState.totalNumberOfCompanies };
      currentTechCos = response.data.item.pagedItems;
      mappedTechCos = currentTechCos.map(this.mapTechCos);
      totalNumberOfCompanies = response.data.item.totalCount;
      return { currentTechCos, mappedTechCos, totalNumberOfCompanies };
    });
  };
  onGetPaginatedError = (response) => {
    console.log(response);
  };

  toggleModal = () => {
    this.setState((prevState) => {
      return { isOpen: !prevState.isOpen };
    });
  };

  onDeleteorModalClick = (e) => {
    if (typeof e === "number") {
      techCoService.deleteById(e).then(this.onDeleteByIdSuccess);
    } else {
      console.log("open modal");
      console.log(e);
      this.setState((prevState) => {
        let modalTitle = { ...prevState.modalTitle };
        let modalBody = { ...prevState.modalBody };
        let isOpen = !prevState.isOpen;
        modalTitle = e.name;
        modalBody.id = e.id;
        modalBody.contactInformation = e.contactInformation.data;
        modalBody.friends = e.friends.map(this.mapFriend);
        modalBody.headline = e.headline;
        modalBody.images = e.images.map(this.mapImg);
        modalBody.profile = e.profile;
        modalBody.slug = e.slug;
        modalBody.statusId = e.statusId;
        modalBody.tags = e.tags.map(this.mapTag);
        modalBody.urls = e.urls.map(this.mapUrl);
        return { modalTitle, modalBody, isOpen };
      });
    }
  };

  mapFriend = (friend) => {
    return ` ${friend.title},`;
  };

  mapImg = (img) => {
    return ` ${img.imageUrl},`;
  };

  mapTag = (tag) => {
    return ` ${tag.tagName},`;
  };
  mapUrl = (urlObj) => {
    return ` ${urlObj.url},`;
  };

  onDeleteByIdSuccess = (id) => {
    console.log(id);
    this.setState((prevState) => {
      const updatedMappedTechCos = prevState.mappedTechCos.filter(
        (singleTechCo) => {
          return singleTechCo.key !== `techCo-${id}`;
        }
      );
      return { mappedTechCos: updatedMappedTechCos };
    }, this.stateChanged);
    toast.success("Tech Co Successfully Deleted", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  handleSubmit = (values) => {
    console.log(values);
    techCoService
      .getByPagSearch(this.state.firstPage, this.state.pageSize, values.search)
      .then(this.onGetByPagSearchSuccess)
      .catch(this.onGetByPagSearchError);
  };

  onGetByPagSearchSuccess = (response) => {
    console.log(response);
    this.setState((prevState) => {
      let currentTechCos = { ...prevState.currentTechCos };
      let mappedTechCos = { ...prevState.mappedTechCos };
      let totalNumberOfCompanies = { ...prevState.totalNumberOfCompanies };
      currentTechCos = response.data.item.pagedItems;
      mappedTechCos = currentTechCos.map(this.mapTechCos);
      totalNumberOfCompanies = response.data.item.totalCount;
      return { currentTechCos, mappedTechCos, totalNumberOfCompanies };
    });
  };

  onGetByPagSearchError = (response) => {
    console.log({ response });
  };

  mapTechCos = (techCo) => {
    return (
      <SingleTechCo
        key={`techCo-${techCo.id}`}
        techCo={techCo}
        onClick={this.onDeleteorModalClick}
        {...this.props}
      ></SingleTechCo>
    );
  };

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <strong className="navbar-brand" href="#">
              Tech Companies
            </strong>
            <button
              className="btn btn-outline-light me-auto"
              onClick={this.onAddTechCoClick}
            >
              +Tech Co.
            </button>
            <Formik
              enableReinitialize={true}
              initialValues={this.state.formData}
              onSubmit={this.handleSubmit}
            >
              <Form>
                <div className="row">
                  <div className="col">
                    <Field
                      type="text"
                      className="form-control"
                      name="search"
                      placeholder="Search"
                    ></Field>
                  </div>
                  <div className="col">
                    <button type="Submit" className="btn btn-outline-light">
                      Submit
                    </button>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        </nav>
        <div className="col-md-12 p-5">
          <Pagination
            pageSize={this.state.pageSize}
            total={this.state.totalNumberOfCompanies}
            onChange={this.onPagChange}
          />
          <TechCoModal
            {...this.props}
            isOpen={this.state.isOpen}
            toggleModal={this.toggleModal}
            title={this.state.modalTitle}
            content={this.state.modalBody}
          />
          <div className="row">{this.state.mappedTechCos}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(TechCo);
