import React from "react";
import { withRouter } from "react-router";
import jobsService from "../services/jobs";

class SearchResults extends React.Component {
  state = {
    searchedTerms: "",
    searchResults: [],
    filteredSearchResults: [],
  };

  componentDidMount() {
    this.setState({ searchedTerms: this.props.match.params.searchTerm });

    let newfiltered = this.state.searchResults.filter(this.filterKeywords);
    this.setState({ filteredSearchResults: newfiltered });

    jobsService
      .search(this.state.searchedTerms)
      .then(this.searchSuccess)
      .catch(this.searchError);
  }

  searchSuccess = (response) => {
    console.log(response.data.item.pagedItems);
    this.setState({ searchResults: response.data.item.pagedItems });
  };

  searchError = (response) => {
    console.log(response);
  };

  filterKeywords = (searchResults) => {
    //let keywords = this.state.searchedTerms;
    let results = [searchResults];

    if (searchResults.title === "software") {
      return results;
    }
  };

  mapSearchResults = (result) => {
    return (
      <React.Fragment key={`Friends-${result.id}`}>
        <div className="container">
          <h1>{result.title}</h1>
          <h1>{result.techCompany.name}</h1>
          <h1>{result.techCompany.summary}</h1>
        </div>
      </React.Fragment>
    );
  };

  render() {
    return (
      <div>{this.state.filteredSearchResults.map(this.mapSearchResults)}</div>
    );
  }
}

export default withRouter(SearchResults);
