import React from "react";

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

export default Card;