import React from "react";
import {Link} from "react-router-dom";
import Card from "../components/Card";
import * as JobService from "../services/JobService";
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css'

class Jobs extends React.Component {
    
    state = {
        current: 0,
        total: 2,
        pageIndex: 0,
        pageSize: 10
    };

    componentDidMount() {
        
        JobService.getPaginated(this.state.pageIndex, this.state.pageSize)
            .then(this.onGetSuccess)
            .catch(this.onGetError);
      };

      onGetSuccess = (response) => {
        console.log(response);
        let myJobs = response.data.item.pagedItems;
        let trueTotal = response.data.item.totalCount;
        this.setState({total: trueTotal},(preState) => {
            return {mappedJobs: myJobs.map(this.mapJobs) };
        });
    };
    
    onGetError = (err) => {
        console.error(err)
    };

    onEditJobClicked = (job) => {
        console.log(job.id);
        this.props.history.push("/AddFriend/" + job.id);
    };

    onDeleteJobClicked(job) {
        JobService.deleteJob(job.id)
            .then(this.onDeleteJobSuccess)
            .catch(this.onDeleteJobError);
    };

    onDeleteJobSuccess(response) {
        console.log(response);
    };

    onDeleteJobError(err) {
        console.log(err);
    };

    onAddJobClicked = () => {
        console.log("onAddJob was clicked");
        this.props.history.push("/jobs/addJob");
    };

    //Remember that calls to setState are asynchronous which means the lines of 
    //code immediately following setState are actually executed before setState 
    //is called so to handle this issue we make the second parameter of setState
    //a callback function

    onChange = (page) => {

        console.log(page);
        
        this.setState({
            current: page,
            pageIndex: page - 1, 
        },
            (preState) => {this.getJobPaginated()}

        );

      };

    getJobPaginated = () => {
        this.componentDidMount();
    };

    mapJobs = (oneJob) => {
        return(
            <React.Fragment key={oneJob.id}>
                <Card 
                    primaryImage={oneJob.primaryImage.imageUrl} 
                    title={oneJob.title}
                    headline={oneJob.headline}
                    bio={oneJob.bio}
                    summary={oneJob.summary}
                    slug={oneJob.slug}
                    statusId={oneJob.statusId} 
                    skills={oneJob.skills}
                    edit={() => this.onEditJobClicked(oneJob)}
                    delete={() => this.onDeleteJobClicked(oneJob)}
                    />
            </React.Fragment>
        );
    };

    render() {
        return(
            <React.Fragment>
                <header className="p-1 bg-dark text-white">
                <div className="container p-1">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <Link to="/jobs/addJob">
                        <button type="button" className="btn btn-info me-2" onClick={this.onAddJobClicked}>
                        + Job
                        </button>
                    </Link>
                    </div>
                </div>
            </header>
            <div className="card-container p-5">
                <div className="row card-deck" style={{height: "675px"}}>
                    <div className="col-3">
                        {this.state.mappedJobs}
                    </div>
                </div>
            </div>
            <Pagination 
            style={{
                position: 'absolute',
                bottom: '0',
                width: '100%',
                marginBottom: "-200px",
                marginLeft: `550px`
            }} 
            onChange={this.onChange}
            current={this.state.current}
            total={this.state.total} />
            </React.Fragment>
        );
    }
}

export default Jobs;