import React from "react";
import { Card, CardGroup, CardBody, CardText, CardHeader } from "reactstrap";

// an object that takes in properties || props
const FriendCard = (props) => {
  console.log(props.friends);
  return (
    <div className="col-4">
      <Card>
        <CardHeader>{props.friends.title}</CardHeader>
        <CardBody>
          <CardGroup>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{props.friends.imageTypeId}</h5>

                <CardText />
                {props.friends.bio}

                <CardText />
                {props.friends.summary}
              </div>
              <div className="d-grid gap-3 d-md-block">
                <button className="btn btn-warning" type="button">
                  Edit
                </button>
                <button className="btn btn-danger" type="button">
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
