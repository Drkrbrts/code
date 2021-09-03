import React from "react";
import { NavLink } from "react-router-dom";
import { getAllCompanies } from "../../services/techService";
import debug from "sabio-debug";
import Card from "./Card";
const _logger = debug.extend("TechCo");


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