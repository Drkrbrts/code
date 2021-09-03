import React from "react"

class UserTechCompaniesPage extends React.Component{

    componentDidMount(){
        console.log("componentDidMount() -> UserTechCompaniesPage");
    }

    onAddTechCosClick = (e) => {
        e.preventDefault();
        this.props.history.push("/techco/add")
    }

    render(){
        return(
            <React.Fragment>
                <div className="container p-2 my-1 bg-success rounded-3" >
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start px-3">
                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li>
                            <button
                                className="btn btn-outline-light px-3 me-2 disabled"
                            >
                                Tech Companies
                            </button>
                            </li>
                            <li>
                            <button className="btn btn-outline-light px-2" onClick={this.onAddTechCosClick}>
                                + TechCos.
                            </button>
                            </li>
                            
                        </ul>

                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                            <input
                            type="search"
                            className="form-control form-control-dark"
                            placeholder="Search..."
                            name="searchTerms"
                            // onChange={this.searchField}
                            />
                        </form>

                        <div className="text-end">
                            <button type="button" className="btn btn-outline-light" 
                            // onClick={this.onSearchClick}
                            >
                            Search
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">

                </div>
            </React.Fragment>
        );
    }
}

export default UserTechCompaniesPage