import React from "react";

// class ViewMoreForm extends React.Component {
//   render() {
const ViewMoreForm = (props) => {
  return (
    <React.Fragment>
      <div className="container">
        <form className="overlay">
          <h3>
            <strong>
              <em>*Click the Same Button To Return*</em>
            </strong>
          </h3>
          <div className="mb-3">
            <h5>
              <strong>NAME</strong>
            </h5>
            <p>{props.eventData.name}</p>
          </div>
          <div className="mb-3">
            <h5>
              <strong>HEADLINE</strong>
            </h5>
            <p>{props.eventData.headline}</p>
          </div>
          <div className="mb-3">
            <h5>
              <strong>DESCRIPTION</strong>
            </h5>
            <p>{props.eventData.description}</p>
          </div>
          <div className="mb-3">
            <h5>
              <strong>IMAGE URL</strong>
            </h5>
            <p>{props.eventData.summary}</p>
          </div>
          <div className="mb-3">
            <h5>
              <strong>SLUG</strong>
            </h5>
            <p>{props.eventData.slug}</p>
          </div>
          <div className="mb-3">
            <h5>
              <strong>START DATE</strong>
            </h5>
            <p>{props.eventData.dateStart}</p>
          </div>
          <div className="mb-3">
            <h5>
              <strong>END DATE</strong>
            </h5>
            <p>{props.eventData.dateEnd}</p>
          </div>
          <div className="mb-3">
            <h5>
              <strong>ADDRESS</strong>
            </h5>
            <p>{props.eventData.address}</p>
          </div>
          <div className="mb-3">
            <h5>
              <strong>ZIP CODE</strong>
            </h5>
            <p>{props.eventData.zipCode}</p>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};
// }

export default ViewMoreForm;
