import React from "react";
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
};

export default Card;