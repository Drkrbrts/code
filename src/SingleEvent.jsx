import React from "react";

const SingleEvent = (props) => {
  const event = props.event;

  let sDate = new Date(event.metaData.dateStart).toString().split("00")[0];
  let eDate = new Date(event.metaData.dateEnd).toString().split("00")[0];
  console.log(sDate, eDate);

  event.metaData.dateStart = sDate;
  event.metaData.dateEnd = eDate;

  const onEditBtn = (e) => {
    props.onEditBtn(event);
  };

  const onViewMoreBtn = (e) => {
    props.onViewMoreBtn(event);
  };

  return (
    <div className="p-2">
      <div>
        <div id="growth">
          <h4>{event.name}</h4>
          <h5>{event.metaData.dateStart}</h5>
          <h6>{event.headline}</h6>
          <p>{event.summary}</p>
          <button
            type="button"
            className="btn btn-info"
            onClick={onViewMoreBtn}
          >
            View More
          </button>
          <button
            type="button"
            className="btn btn-light"
            style={{ float: "right" }}
            onClick={onEditBtn}
            key={event.id}
          >
            Edit
          </button>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default React.memo(SingleEvent);
