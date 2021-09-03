import React from "react";
import { NavLink } from "react-router-dom";
import { getAllCompanies } from "../services/techService";
import debug from "sabio-debug";
const _logger = debug.extend("TechCo");

class Card extends React.Component
{

    render()
    {
        return (
            <div className="card text-center mx-auto" style={{ width: "18rem" }}>
                <img className="card-img-top h-50" src="https://cdn.pixabay.com/photo/2019/10/24/19/50/sloth-4575121_960_720.png" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.company.name}</h5>
                    <p className="card-text">{this.props.company.summary}</p>
                </div>
            </div>
        )
    }
}


class TechCo extends React.Component
{

    state = {
        mappedCompanies: []
    }

    mapThisCo = (oneCo) =>
    {
        return <Card {...this.props} key={`CoId:${oneCo.id}`} company={oneCo} />
    }

    onGetAllCompaniesSuccess = (response) =>
    {
        _logger("onGetAllCompaniesSuccess!", response);
        let coArray = response.data.item.pagedItems;
        let totalCount = response.data.item.totalCount;

        this.setState(() =>
        {
            return {
                mappedCompanies: coArray.map(this.mapThisCo),
                totalCount
            };
        })
    }

    onShowCompaniesClicked = () =>
    {
        _logger("onShowCompaniesClicked");
        getAllCompanies(0, 10)
            .then(this.onGetAllCompaniesSuccess)
            .catch(this.onGetAllCompaniesFail)

    }

    render()
    {
        return (
            <div className="main p-5">
                <div className="btn-container">
                    <button type="button" className="btn btn-success me-2" onClick={this.onShowCompaniesClicked}>
                        Show Companies
                    </button>
                    <NavLink to="/techForm">
                        <button type="button"
                            className="btn btn-success me-2"
                        >
                            + Create Tech Company
                        </button>
                    </NavLink>
                </div>
                <div className="row m-5">
                    {this.state.mappedCompanies}
                </div>
            </div>
        )
    }
}

export default TechCo;