import React from 'react';

class Card extends React.Component {

    render() { 
        return ( 
            <React.Fragment>
                    <div className="card" style={{width: "20rem", padding: "20px"}}>
                        <img src={this.props.primaryImage} className="card-img-top" alt="..."></img>
                        <div className="card-body">
                            <h5 className="card-title">Title: {this.props.title}</h5>
                            <p className="card-text">Headline: {this.props.headline}</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Bio: {this.props.bio}</li>
                            <li className="list-group-item">Summary: {this.props.summary}</li>
                            <li className="list-group-item">Slug: {this.props.slug}</li>
                            <li className="list-group-item">StatusId: {this.props.statusId}</li>
                            <li className="list-group-item">Skills: {this.props.skills}</li>
                        </ul>
                        <button className="btn btn-warning" onClick={this.props.edit}>Edit</button>
                        <button className="btn btn-danger" onClick={this.props.delete}>Delete</button>
                    </div>
            </React.Fragment>
         );
    }
}
 
export default Card;