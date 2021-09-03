import React from "react";
import techService from "./techService";
import { toast } from "react-toastify";
import TechCard from "./CloneTech";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
import TechEditModal from "./TechEdit";

class TechDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchData: "",
      currentPage: 0,
      mappedCompanies: [],
      isOpen: false,
      currentCompany: "",
      currentId: "",
    };
  }
  componentDidMount() {
    techService
      .getAllCompanies(this.state.currentPage)
      .then(this.onGetAllSuccess)
      .catch(this.onFailure);
  }
  onGetAllSuccess = (data) => {
    console.log(data);
    let companiesArray = data.data.item.pagedItems;
    this.setState((prevState) => {
      return {
        ...prevState,
        totalPages: data.data.item.totalPages,
        mappedCompanies: companiesArray.map(this.mapCompanies),
      };
    });
  };
  mapCompanies = (company) => (
    <TechCard
      key={company.id}
      companyData={company}
      onEdit={this.onEditClick}
      onDelete={this.onDeleteClick}
    />
  );
  handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    this.setState((prevState) => {
      return {
        ...prevState,
        currentPage: pageNumber,
      };
    });
    techService
      .getAllCompanies(pageNumber - 1)
      .then(this.onGetAllSuccess)
      .catch(this.onFailure);
  };
  onDeleteClick = (company) => {
    this.setState((prevState) => {
      return { ...prevState, currentId: company.id };
    });
    techService
      .deleteCompany(company.id)
      .then(this.onDeleteSuccess)
      .catch(this.onFailure);
  };
  onDeleteSuccess = (data) => {
    console.log(data);
    toast.success("Company Deleted succesfully");
    this.setState((prevState) => {
      const indexOfCompany = prevState.mappedCompanies.findIndex(
        (company) => company.props.companyData.id === this.state.currentId
      );
      const updatedCompany = [...prevState.mappedCompanies];
      debugger;
      if (indexOfCompany >= 0) {
        updatedCompany.splice(indexOfCompany, 1);
      }
      return {
        mappedCompanies: updatedCompany,
      };
    });
  };
  onEditClick = (company) => {
    if (Array.isArray(company.images)) {
      company.images = company.images[0].imageUrl;
      company.contactInformation = company.contactInformation.data;
    }
    this.setState((prevState) => {
      return {
        ...prevState,
        currentCompany: company,
        isOpen: !prevState.isOpen,
        currentId: company.id,
      };
    });
  };
  toggleModal = () => {
    this.setState((prevState) => {
      return { isOpen: !prevState.isOpen };
    });
  };
  onFormChange = (e) => {
    let target = e.target;
    if (target.type === "checkbox") {
      if (target.checked === true) {
        target.value = "NotSet";
      } else if (target.checked === false) {
        target.value = "Active";
      }
    }
    let name = target.name;
    let val = target.value;
    this.setState((prevState) => {
      const currentCompany = { ...prevState.currentCompany, [name]: val };
      return { currentCompany: currentCompany };
    });
  };
  onUpdateClick = () => {
    const baseData = this.state.currentCompany;
    const img = baseData.images;
    baseData.images = [{ imageTypeId: 2, imageUrl: img }];
    techService
      .changeCompany(baseData, baseData.id)
      .then(this.onUpdateSuccess)
      .catch(this.onFailure);
  };
  onUpdateSuccess = (data) => {
    console.log(data);
    toast.success("Company Updated!");
    const idForArray = this.state.currentId;
    this.setState((prevState) => {
      const indexOfCompany = prevState.mappedCompanies.findIndex(
        (singleArrayMember) =>
          singleArrayMember.props.companyData.id === idForArray
      );
      const newCard = this.mapCompanies(this.state.currentCompany);
      const updatedCompany = [...prevState.mappedCompanies];
      if (indexOfCompany >= 0) {
        updatedCompany.splice(indexOfCompany, 1, newCard);
      }
      return {
        mappedCompanies: updatedCompany,
        isOpen: !prevState.isOpen,
      };
    });
  };
  onAddClick = () => {
    this.props.history.push("/techCompaniesAdd");
  };
  onSearchType = (e) => {
    let target = e.target;
    let val = target.value;
    this.setState({ searchData: val });
  };
  onSearchClick = () => {
    techService
      .searchForCompanies(this.state.searchData)
      .then(this.onSearchSuccess)
      .catch(this.onFailure);
  };
  onSearchSuccess = (data) => {
    console.log(data);
    let searchArray = data.data.item.pagedItems;
    const companyIdArray = searchArray.map((company) => company.id);
    for (let i = 0; i < companyIdArray.length; i++) {
      const company = companyIdArray[i];
      techService
        .getCompanyById(company)
        .then(this.onGetByIdSuccessForMap)
        .catch(this.onFailure);
    }
  };
  onGetByIdSuccessForMap = (data) => {
    const currCompany = data.data.item;
    this.setState((prevState) => {
      return {
        ...prevState,
        mappedCompanies: [this.displaySearchItem(currCompany)],
      };
    });
  };
  displaySearchItem = (company) => (
    <TechCard
      key={company.id}
      companyData={company}
      onEdit={this.onEditClick}
      onDelete={this.onDeleteClick}
    />
  );
  onFailure = (data) => {
    console.warn(data);
    toast.error("There was an error");
  };
  render() {
    return (
      <React.Fragment>
        <TechEditModal
          isOpen={this.state.isOpen}
          toggleModal={this.toggleModal}
          company={this.state.currentCompany}
          changeFormData={this.onFormChange}
          onUpdate={this.onUpdateClick}
        />
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search Here"
            aria-label="Search Here"
            aria-describedby="button-addon2"
            onChange={this.onSearchType}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={this.onSearchClick}
          >
            Search
          </button>
          <button
            className="btn btn-success"
            type="button"
            onClick={this.onAddClick}
          >
            + Add Company
          </button>
        </div>
        <div className="container" id="cloneTemplate">
          {this.state.mappedCompanies}
          <Pagination
            className="mt-5
            "
            defaultCurrent
            onChange={this.handlePageChange}
            current={this.state.currentPage}
            pageSize={1}
            total={this.state.totalPages}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default TechDisplay;
