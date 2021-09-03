import React from "react";
import { NavLink } from "react-router-dom";
import { getAllJobs, searchJobs } from "../../services/jobsService";
import Pagination from 'rc-pagination';
import debug from "sabio-debug";
import Modal from 'react-modal';
import Card from "./Card";
const _logger = debug.extend("JobsForm");

class JobsPage extends React.Component
{

    state = {
        mappedJobs: [],
        activePage: 0,
        searchQuery: "",
        defaultPageSize: 3
    }

    mapThisJob = (oneJob) =>
    {
        return <Card {...this.props} key={`JobId:${oneJob.id}`} job={oneJob} />
    }

    onGetAllJobsSuccess = (response) =>
    {
        _logger("getAllJobsSuccess!", response);
        let jobsArray = response.data.item.pagedItems;
        let totalCount = response.data.item.totalCount;

        this.setState(() =>
        {
            return {
                mappedJobs: jobsArray.map(this.mapThisJob),
                totalCount
            };
        })
    }

    onGetAllJobsFail = (response) =>
    {
        _logger("getAllJobsFail", response)
    }

    onShowJobsClicked = () =>
    {
        _logger("onShowJobsClicked");
        getAllJobs(this.state.activePage, this.state.defaultPageSize)
            .then(this.onGetAllJobsSuccess)
            .catch(this.onGetAllJobsFail)

    }

    onSearchJobsSuccess = (response) =>
    {
        let searchResults = response.data.item.pagedItems;
        _logger(searchResults);
        this.setState(() =>
        {
            return { mappedJobs: searchResults.map(this.mapThisJob) }
        })
    }

    onSearchJobsFail = (response) =>
    {
        _logger(response);
    }

    onSearchButtonClicked = () =>
    {
        searchJobs(0, 10, this.state.searchQuery)
            .then(this.onSearchJobsSuccess)
            .catch(this.onSearchJobsFail)
    }

    onSearchChange = (e) =>
    {
        let searchQuery = e.currentTarget.value;
        this.setState(() =>
        {
            let stateQueryCopy = { ...this.state.searchQuery };
            stateQueryCopy = searchQuery;
            return { searchQuery: stateQueryCopy };
        })
    }

    onPageChange = (pageNumber) =>
    {
        let pageSize = this.state.defaultPageSize;
        _logger("onPageChange");
        getAllJobs(pageNumber - 1, pageSize)
            .then(this.onGetAllJobsSuccess)
            .catch(this.onGetAllJobsFail);
    }

    render()
    {


        return (
            <div id="main" className="main-container p-5 ">

                <div className="btn-and-search d-flex">
                    <button type="button" className="btn btn-success me-2" onClick={this.onShowJobsClicked}>
                        Show Jobs
                    </button>
                    <NavLink to="/jobsform">
                        <button type="button" className="btn btn-success me-2" >
                            + Add Job
                        </button>
                    </NavLink>
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                        <input
                            type="search"
                            className="form-control form-control-dark"
                            placeholder="Search..."
                            aria-label="Search"
                            onChange={this.onSearchChange}
                        />
                    </form>
                    <button type="button" className="btn btn-outline-primary" onClick={this.onSearchButtonClicked}>search</button>
                </div>

                <div className="row m-5">
                    {this.state.mappedJobs}
                </div>
                <div className="m-5">
                    <Pagination
                        total={this.state.totalCount}
                        defaultPageSize={this.state.defaultPageSize}
                        // current={this.state.activePage}
                        onChange={this.onPageChange}
                    />
                </div>
            </div>
        )
    }
}

Modal.setAppElement(document.getElementById('main'));

export default JobsPage;