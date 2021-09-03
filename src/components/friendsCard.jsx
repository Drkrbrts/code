import React from "react";
import {
  Card,
  CardGroup,
  CardBody,
  CardText,
  CardHeader,
  CardImg,
} from "reactstrap";


// an object that takes in properties || props
const FriendCard = (friends) => {
  return (
    <div className="col-4">
      <Card>
        <CardHeader>Friends</CardHeader>
        <CardBody>
          <CardGroup>
            <div className="card">
              <div className="card-body">
                <CardImg />
                {/*{friends.item.map({item:pagedItems.primaryImage})}*/}

                <h5 className="card-title">{}</h5>

                <CardText />
               {}

                <CardText />
                {}
              </div>
              <div className="d-grid gap-2 d-md-block">
                <button
                  className="btn btn-warning"
                  type="button"
                  
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  type="button"
                  
                >
                  Delete
                </button>
              </div>
            </div>
          </CardGroup>
        </CardBody>
      </Card>
    </div>
  );
};
export default FriendCard;
