import React from 'react'
import { getAllCompanies } from '../ajax'

class TechCompany extends React.Component{
    
    state = {
        companies : null
    }

    goToCompanyFormPage = (e) =>{
        let theId = e.currentTarget.parentElement.parentElement.id
        theId = theId.toString()
        this.props.history.push("/TechCompanies/Edit/" + theId)
    }
    deleteMe = (e) =>{
        e.currentTarget.parentElement.parentElement.remove();
    }

    mappedCompany = (company) =>{
        return (
            <div className="col-3" id={company.id} key={company.id} style={{height:400,width:300}}>
                <div className="card">
                    <img src={company.img} className="card-img-top img-fluid img-thumbnail" alt="Not Here"></img>
                    <div className="card-body">
                        <h5 className="card-title">{company.name}</h5>
                        <h5 className="card-title">{company.homePage}</h5>
                        <p className="card-text">{company.summary}</p>
                    </div>
                    <button 
                    className="btn btn-danger"
                    onClick={this.deleteMe}
                    >Delete</button>

                    <button 
                    className="btn btn-info"
                    onClick={this.goToCompanyFormPage}
                    >Edit</button>
                </div>
            </div>
        )
    }

    companyForm = () =>{
        this.props.history.push("/TechCompanies/Add")
    }

    findCompanies = () =>{
        getAllCompanies()
            .then((res)=>{
                let companies = res.data.item.pagedItems.map((company)=>{
                   return {
                       location : company.contactInformation.data
                       ,id : company.id
                       ,img : company.images[0].imageUrl
                       ,name : company.name
                       ,summary : company.summary
                       ,homePage : company.urls[0].url
                   }
                })
                this.setState({companies})
            })
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
                                >Tech Companies</h5>
                            </li>
                        </ul>
                        <button
                        className="addFriend btn"
                        onClick={this.companyForm}
                        >+Add
                        </button>
                    </div>                    

                        <button 
                        className="btn btn-outline-info"
                        style={{marginRight: 10,color: 'whitesmoke'}}
                        onClick={this.findCompanies}
                        >Find</button>
                   
                </nav>

                {this.state.companies &&
                    (
                        <div className="row align-items-start card-deck">
                            {this.state.companies.map(this.mappedCompany)}
                        </div>
                    )}

            </div>
        )
    }
}

export default TechCompany