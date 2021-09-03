import React from 'react'
import { getAllJobs } from '../ajax'


class Jobs extends React.Component{

    state ={
        moreDetail : null
        ,searchField : null
        ,jobAds : null

    }


    goToJobFormPage = (e) =>{
        let theId = e.currentTarget.parentElement.parentElement.id
        theId = theId.toString()
        this.props.history.push("/Jobs/Create/" + theId)
    }

    deleteMe = (e) =>{
        e.currentTarget.parentElement.parentElement.remove();
    }

    findJobs = () => {
        getAllJobs(this.state.searchField)
            .then((res)=>{
                let jobAds = res.data.item.pagedItems.map((job)=>{
                    return {
                        img : job.techCompany.images[0].imageUrl
                        ,pay : job.pay
                        ,title : job.title
                        ,location : job.techCompany.contactInformation.data
                        ,id  : job.id
                         ,companyName : job.techCompany.name
                         ,motto : job.techCompany.headline
                         ,summary : job.techCompany.summary
                    }
                })
                this.setState({jobAds})
            })
    }
    onChangeState = (e) =>{
        let target = e.currentTarget
        let newValue = target.value;
        this.setState(()=>{
          let newState = {...this.state.searchField}
          newState = newValue;
          
          return {searchField: newState}
        })
      }

    lookAtMoreDetailTrue = () =>{
        this.setState(()=>{
            let newState = {...this.state.moreDetail}
            newState = true
            return ({moreDetail : newState})
        })
    }

    lookAtMoreDetailNull = () =>{
        this.setState(()=>{
            let newState = {...this.state.moreDetail}
            newState = null
            return ({moreDetail : newState})
        })
    }

    mapJobs = (job) =>{
        return (
            <div className="col-3" id={job.id} key={job.id} style={{height:400,width:300}}>
                <div className="card">
                    <img src={job.img} className="card-img-top img-fluid img-thumbnail" alt="Not Here"></img>
                    <div className="card-body">
                        <h5 className="card-title">${job.pay}</h5>
                        <h5 className="card-title">{job.title}</h5>
                        <p className="card-text">{job.location}</p>
                    </div>
                    <button 
                    className="btn btn-danger"
                    onClick={this.deleteMe}
                    >Delete</button>

                    <button 
                    className="btn btn-info"
                    onClick={this.goToJobFormPage}
                    >Edit</button>
                    <button 
                    className="btn btn-secondary"
                    onClick={this.lookAtMoreDetailTrue}
                    >More info</button>
                    {this.state.moreDetail &&
                        (
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{this.state.jobAds.companyName}</h5>
                                <h5 className="card-title">{this.state.jobAds.motto}</h5>
                                <p className="card-text">{this.state.jobAds.summary}</p>
                                <button 
                                className="btn btn-secondary"
                                onClick={this.lookAtMoreDetailNull}
                                >Close</button>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
        )
    }


    render(){
        return(
            <div className="container">
                <nav className="navbar navbar-expand-sm bg-primary navbar-primary py-3 friend-nav">
                    <div className="container">
                    <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <h5 className="usernameTitle" 
                                style={{color: "whitesmoke"}}
                                >Jobs</h5>
                            </li>
                        </ul>
                        <button
                        className="addFriend btn"
                        onClick={this.goToJobFormPage}>
                            + Jobs
                        </button>
                    </div>
                    
                        <input 
                        className="form-control me-2" 
                        type="search" 
                        placeholder="Search" 
                        aria-label="Search"
                        onChange={this.onChangeState}
                        ></input>


                        <button 
                        className="btn btn-outline-info"
                        style={{marginRight: 10,color: 'whitesmoke'}}
                        onClick={this.findJobs}
                        >Search</button>
                   
                </nav>

                {this.state.jobAds &&
                    (
                        <div className="row align-items-start card-deck">
                            {this.state.jobAds.map(this.mapJobs)}
                        </div>
                    )}

            </div>
        )
    }
}

export default Jobs