import React from "react";
import {Route} from "react-router-dom";
import HomeButton from "./HomeButton";
import FriendsButton from "./FriendsButton";
import AddJobsButton from "./AddJobsButton";
import Logout from "./Logout";
import * as jobService from "../services/jobService";
import Pagination from "rc-pagination";
import {toast} from "react-toastify";
import 'rc-pagination/assets/index.css'
import TechButton from "./TechButton";
import EventsButton from "./EventsButton";


class Jobs extends React.Component {

    state = {
        jobs: [],
        page: 1,
        formData: "",
        modalStyle: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: '9999',
          background: '#fff'
        },
        backdropStyle: {
           position: 'absolute',
           width: '100%',
           height: '100%',
           top: '0px',
           left: '0px',
           zIndex: '9998',
           background: 'rgba(0, 0, 0, 0.3)'
        },
        modals: {
          modal1: false,
          modal2: false,
          modal3: false
        }
    }

    componentDidMount() {      

        jobService.jobs().then(response => {
            let pages = response.data.item.pagedItems;
            console.log(pages, "onGetJobsSuccess");
            
            this.setState(() => {
                let jobs = {...this.state.jobs};
                jobs = pages;

                return {jobs};
            })
        }).catch(error => {
            console.warn(error, "onGetJobsFailure");
        })
        

    }

    
    

    
    onFormFieldChanged = (e) => {
      let currentTarget = e.currentTarget;
      let newValue = currentTarget.value;

      this.setState(() => {
        let formData = {...this.state.formData};
        formData = newValue;

        return {formData};
      })
    }

    enterJobs = (e) => {
      if (e.key === "Enter") {
        return this.jobSearch();
      }
    }

    viewModal = (e) => {
      let currentTarget = e.currentTarget;
      let name = currentTarget.name;
      
      this.setState(() => {
        
        let modals = {...this.state.modals}
        modals[name] = true;
        
        return {modals};
      })
    }

    modalVanish = (e) => {
      let currentTarget = e.currentTarget;
      let name = currentTarget.id;

      this.setState(() => {
        let modals = {...this.state.modals};
        modals[name] = false;
        return {modals};
      })
      
    }

    jobSearch = () => {
      this.state.formData === "" || this.state.formData === " " ? 
      this.componentDidMount() :
      jobService.searchJob(this.state.formData).then(response => {
        console.log(response, "onSearchJobSuccess");
        let pages = response.data.item.pagedItems;
        toast.success(`${pages.length} jobs found!`)
        this.setState(() => {
          let jobs = {...this.state.jobs};
          jobs = pages;
          return {jobs};
        })
      

      }).catch(error => {
        console.warn(error, "onSearchJobFailure");
        toast.error("No jobs found!");
      });
    }

    jobSlice = (array) => {

      return array.slice((this.state.page * 3) - 3, this.state.page * 3);

    }
    
    jobMap = (job, index) => {                                                           
        
        return ( <React.Fragment key={`Friends-${job.slug}`}>
            <div  id={job.slug} className="card shadow" style={{width:  "18rem", float: "left", marginRight: "20px", marginLeft: "20px", marginTop: "20px", justifyContent: "center"}}>
                <img src={job.techCompany.images[0].imageUrl} className="card-img-top" alt="..." style={{borderRadius: "50%", maxHeight: "150px", width: "60%", alignSelf: "center", marginTop: "5px", left: "50%", }} />
                <div className="card-body" style={{alignSelf: "center"}}>
                  <h5 className="card-title" style={{ textAlign: "center"}} >{job.pay}</h5>
                  <p className="card-text"style={{textAlign: "center"}} >{job.title}</p>
                  <p className="card-text"style={{textAlign: "center"}} >{job.techCompany.contactInformation.data}</p>

                  
                  <button id={job.id} onClick={this.props.action}   type="button" className="btn btn-info shadow" style={{marginLeft: "3px", bottom: "0"}}>Edit</button>
                  <button onClick={this.viewModal}  name={`modal${index + 1}`}   type="button" className="btn btn-light shadow" style={{ margin: "5px"}}>View More</button>
                </div>
                </div>

               <div onClick={this.modalVanish} id={`modal${index + 1}`} className={this.state.modals[`modal${index + 1}`] ? "shadow-lg" : "d-none"} style={this.state.modalStyle}>
               <img src={job.techCompany.images[0].imageUrl} className="card-img-top" alt="..." style={{borderRadius: "50%", maxHeight: "150px", width: "60%", marginTop: "5px", marginLeft: "20%"}} />
               <div className="card-body" style={{alignSelf: "center"}}>
                 <h5 className="card-title" style={{ textAlign: "center"}} >{job.pay}</h5>
                 <p className="card-text"style={{textAlign: "center"}} >{job.title}</p>
                 <p className="card-text"style={{textAlign: "center"}} >{job.description}</p>
                 <p className="card-text"style={{textAlign: "center"}} >{job.summary}</p>
                 <p className="card-text"style={{textAlign: "center"}} >{job.techCompany.contactInformation.data}</p>
               </div>
               </div>
               <div  onClick={this.modalVanish} style={this.state.backdropStyle} className={this.state.modals[`modal${index + 1}`] ? "cool" : "d-none"}></div>
               </React.Fragment>
        )



    }  
    
    onChange = (number) => {
      console.log(number);
      this.setState(() => {
        let page = {...this.state.page};
        page = number;
        return {page};
      })
      
    };

    


    render() {

      

        return <React.Fragment>

<header style={{backgroundColor: "sienna"}} className="p-3  text-white">
          
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
             <Route path="/" >
                 <HomeButton {...this.props} ></HomeButton>
             </Route>
             
              

              <Route path="/jobs"  >
                  <AddJobsButton {...this.props} />
              </Route>

              <li>
                <button className="nav-link px-2 text-white link-button">
                  Blogs
                </button>
              </li>

              <Route path="/" component={TechButton} />
              
             <Route path="/" component={FriendsButton} />     
              <Route path="/" component={EventsButton} />
              <Logout {...this.props} />
            </ul> 

           
            <input onKeyPress={this.enterJobs} onChange={this.onFormFieldChanged} type="text" className="form-control" aria-label="Text input with segmented dropdown button" style={{width: "15%"}} />
            <button onClick={this.jobSearch} type="button" className="btn btn-outline-secondary" style={{color: "white", borderColor: "white"}}>Search</button>
  


          </div>     

         
        
      </header>                

      <span className="align-items-center" style={{display: "inline"}}>
                {this.jobSlice(this.state.jobs).map(this.jobMap)}
                </span>

        <div onClick={this.clickHandler} style={{position: "fixed", bottom: "20%", float: "right", padding: "20px"}}>
        <Pagination 
        defaultCurrent={this.state.page}
        current={this.state.page}
        total={this.state.jobs.length}
        pageSize={3}
        nextIcon={">"}
        prevIcon={"<"} 
        onChange={this.onChange}
        
        />
        </div>  
        

        </React.Fragment>                    
    }        
}              
  



export default Jobs;