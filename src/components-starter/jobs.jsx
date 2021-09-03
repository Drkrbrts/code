import React from "react";
import { NavLink } from "react-router-dom";
import { getAllJobs, searchJobs } from "../services/jobsService";
import Pagination from 'rc-pagination';
import debug from "sabio-debug";
import Modal from 'react-modal';
const _logger = debug.extend("JobsForm");


class Card extends React.Component
{

    state = {
        mappedJobs: [],
        modal: {
            showModal: false
        }
    }


    openModal = () =>
    {
        this.setState(() =>
        {
            let modal = { ...this.state.modal };
            modal.showModal = true;
            return { modal };

        })
        _logger("openModal:", this.state.modal)
    }

    closeModal = () =>
    {
        this.setState(() =>
        {
            let modal = { ...this.state.modal };
            modal.showModal = false;
            return { modal: modal };

        })

    }


    onEditButtonClicked = (jobId) =>
    {
        _logger("editbuttonclicked:", jobId);

        this.props.history.push(`/jobsform/${jobId}`);

    }


    render()
    {
        const customStyles = {
            content: {
                // top: '50%',
                // left: '50%',
                // right: 'auto',
                // bottom: 'auto',
                // marginRight: '-50%',
                // transform: 'translate(-50%, -50%)',
            },
        };

        return (
            <React.Fragment>
                <div className="card text-center mx-auto" style={{ width: "18rem" }
                }>
                    <img className="card-img-top h-50" src="https://cdn.pixabay.com/photo/2019/10/24/19/50/sloth-4575121_960_720.png" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.job.title}</h5>
                        <p className="card-text">{this.props.job.pay}</p>
                        <div className="row">
                            <button className="btn btn-primary"
                                onClick={() => this.onEditButtonClicked(this.props.job.id)}     // <-- capturing array data during mapping
                            >
                                Edit Job
                            </button>
                            <button className="btn btn-info"
                                data-friendid={this.props.job.id}
                                onClick={this.openModal}>
                                View More
                            </button>
                            <div>
                                <Modal {...this.props}
                                    isOpen={this.state.modal.showModal}
                                    onRequestClose={this.closeModal}
                                    style={customStyles}
                                    contentLabel="Example Modal"
                                >
                                    <h2 >{this.props.job.title}</h2>
                                    <div className="float-right">
                                        <button onClick={this.closeModal}>&times;</button>
                                    </div>
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="title" className="form-label">Title:</label>
                                            <input type="text"
                                                className="form-control"
                                                name="title"
                                                value={this.props.job.title}
                                                readOnly
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="description" className="form-label">Description:</label>
                                            <input type="text"
                                                className="form-control"
                                                name="description"
                                                value={this.props.job.description}
                                                readOnly
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="summary" className="form-label">Summary:</label>
                                            <input type="text"
                                                className="form-control"
                                                name="summary"
                                                value={this.props.job.summary}
                                                readOnly
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="pay" className="form-label">Pay:</label>
                                            <input type="text"
                                                className="form-control"
                                                name="pay"
                                                value={this.props.job.pay}
                                                readOnly
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="slug" className="form-label">Slug:</label>
                                            <input type="text"
                                                className="form-control"
                                                name="slug"
                                                value={this.props.job.slug}
                                                readOnly
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="statusId" className="form-label">Status ID:</label>
                                            <input type="text"
                                                className="form-control"
                                                name="statusId"
                                                value={this.props.job.statusId}
                                                readOnly
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="techCompanyId" className="form-label">Tech Company ID:</label>
                                            <input type="text"
                                                className="form-control"
                                                name="techCompanyId"
                                                value={this.props.job.techCompany.id}
                                                readOnly
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="techCompskillsanyId" className="form-label">Skills:</label>
                                            <input type="text"
                                                className="form-control"
                                                name="skills"
                                                value={this.props.job.skills[0].name}
                                                readOnly
                                            />
                                        </div>
                                    </form>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

class JobsPage extends React.Component
{


    state = {
        mappedJobs: [],
        activePage: 0,
        searchQuery: ""
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
        getAllJobs(0, 2)
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
        _logger("onPageChange");
        getAllJobs(pageNumber - 1, 2)
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
                        defaultPageSize={2}
                        current={this.state.activePage}
                        onChange={this.onPageChange}
                    />
                </div>
            </div>
        )
    }
}

Modal.setAppElement(document.getElementById('main'));

export default JobsPage;