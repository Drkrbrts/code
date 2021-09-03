import React from "react";
import {Route} from "react-router-dom";
import HomeButton from "./HomeButton";
import FriendsButton from "./FriendsButton";
import * as techService from "../services/techService";
import JobsButton from "./JobsButton";
import Logout from "./Logout";
import Pagination from "rc-pagination";
import 'rc-pagination/assets/index.css'
import EventsButton from "./EventsButton";


class TechCo extends React.Component {

    state = {
        companies: [],
        page: 1,
        company: {}
    }

    companySlice = (companies) => {
        return companies.slice((this.state.page * 3) - 3, this.state.page * 3);
    }

    onChange = (number) => {
        console.log(number);
        this.setState(() => {
            let page = {...this.state.page};
            page = number;
            return {page};
        })
    }

    componentDidMount() {
        techService.getCompanies().then(response => {
            let pages = response.data.item.pagedItems;
            console.log(pages, "onGetCompaniesSuccess");
            this.setState(() => {
                let companies = {...this.state.companies};
                companies = pages.filter(page => page.contactInformation !== null);
                let name = {};
                let filter = [];
                for (let i of companies) {
                    console.log(i);
                    if (name[i.name] === undefined) {
                        name[i.name] = 1;
                        filter.push(i);
                    }
                }
                companies = filter;    
                return {companies};
            })
        }).catch(error => {
            console.warn(error, "onGetCompaniesFailure");
        })               
    }

addTech = () => {            
    this.props.history.push("/addTech");
}

companyMap = (company, index) => {
    return ( <React.Fragment key={company.id}>

<div   className="card shadow" style={{width:  "18rem", float: "left", marginRight: "20px", marginLeft: "20px", marginTop: "20px", justifyContent: "center"}}>
        <img src={company.images[0].imageUrl} className="card-img-top" alt="..." style={{borderRadius: "50%", maxHeight: "150px", width: "60%", alignSelf: "center", marginTop: "5px", left: "50%", }} />
        <div  className="card-body" style={{alignSelf: "center"}}>
            <h5 className="card-title" style={{ textAlign: "center"}} >{company.name}</h5>
             <p className="card-text"style={{textAlign: "center"}} >{company.contactInformation.data}</p>
            

                  
            <button id={company.id} onClick={this.props.action}   type="button" className="btn btn-info shadow" style={{marginLeft: "3px", bottom: "0"}}>Edit</button>
            <button onClick={this.viewModal}  name={`modal${index + 1}`}   type="button" className="btn btn-light shadow" style={{ margin: "5px"}}>View More</button>
         </div>
         </div>

    </React.Fragment>

    )
}

    render() {      

        return <React.Fragment>                                             


<header className="p-3 bg-secondary bg-gradient text-white">
          
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <Route path="/" >
                <HomeButton {...this.props} ></HomeButton>
              </Route>
              <li>
                <button onClick={this.addTech} className="nav-link px-2 text-white link-button">
                  <strong>Tech+</strong>
                </button>
              </li>
             <Route path="/" component={FriendsButton} />
              <li>
                <button                                                               
                  href="#"          
                  className="nav-link px-2 text-white link-button"
                >
                  Blogs
                </button>
              </li>
              
              <Route path="/" component={JobsButton} />   
              <Route path="/" component={EventsButton} />
                <Route path="/"  component={Logout} />

            </ul>                                              
          </div>  

      </header>    

      <span style={{float: "left"}}>
            {this.companySlice(this.state.companies).map(this.companyMap)}
              </span>
                <div style={{float: "left", bottom: "20%", position: "fixed"}}>
              <Pagination
              current={this.state.page}
              onChange={this.onChange}
              total={this.state.companies.length}
              pageSize={3}
              prevIcon={"<"}
              nextIcon={">"}
               /> 
               </div> 
        </React.Fragment>
    }
}





export default TechCo;