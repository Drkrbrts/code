import React from "react"; 

const Friend = (props) => {


  const editButtonClicked = () => {
    console.log("editClicked", "button firing Friend.jsx");
    props.editClicked(props.friend); 
  }

    const deleteButtonClicked = () => {
      console.log("deleteClicked", "button firing from Friend.jsx");
      props.deleteClicked(props.friend); 
  }

  return (

    <div className="card" 
         style={{
            marginTop: "100px",
            marginBotton: "100px", 
            marginLeft: "100px",
            marginRight: "100px",}}
    >
      <img src={props.friend.primaryImage} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{props.friend.title}</h5>
            <p className="card-text">{props.friend.bio}</p>
              <button type="submit" className="btn btn-danger" onClick={deleteButtonClicked}>Delete</button>
              <button type="submit" className="btn btn-warning" onClick={editButtonClicked}>Edit</button>
        </div>
    </div>

    );     
  }; 

export default Friend;  