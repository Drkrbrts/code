import React from "react";

const PersonCard = (props) => {
    console.log(props)
    const deletePerson = () => {
        props.handleDelete(props.person.id)
    }


    return (
        <div className="card" style={{ width: "18rem" }}>
        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapersdsc.net%2Fwp-content%2Fuploads%2F2016%2F10%2FClown-Fish-full-HD.jpg&f=1&nofb=1" 
        className="card-img-top" 
        alt="..." 
       
        />
        <div className="card-body">
          <h5 className="card-title">{`${props.person.first_name}  ${props.person.last_name}`}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </p>
            <button type="button"
            className="btn btn-sm btn-danger"
            onClick={deletePerson}>Delete</button>
        </div>
      </div>    )
}

export default PersonCard