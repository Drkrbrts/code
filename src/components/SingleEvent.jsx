import React from "react";

function SingleEvent(props) {
  var time = new Date(props.event.metaData.dateStart);
  var day = time.getDay();
  var date = time.getDate();
  var month = time.getMonth();
  var year = time.getFullYear();
  var daysOfWeek = ["Sun", "M", "T", "W", "Th", "F", "Sat"];
  var monthWord = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  day = daysOfWeek[day];
  month = monthWord[month];

  function editClicked() {
    props.edit(props.event.slug);
  }

  function viewMoreClicked() {
    props.viewMore(props.event.slug);
  }

  return (
    <React.Fragment>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.event.headline}</h5>
          <p className="card-text">{`${day} ${month} ${date} ${year}`}</p>
          <p>{props.event.description.slice(0, 80) + "..."}</p>
          <button className="btn btn-dark mr-2" onClick={viewMoreClicked}>
            View More
          </button>
          <button className="btn btn-primary mx-2" onClick={editClicked}>
            Edit
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SingleEvent;
