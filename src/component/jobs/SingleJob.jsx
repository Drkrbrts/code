import React from "react";

function SingleJob(props) {
  const aJob = props.jobs;

  //   function onJobEdit() {}

  //   function onFriendDelete() {}

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 my-3">
      <div className="card shadow text-center p-4 h-100">
        <img
          // style={{ height: "200px" }}
          src={aJob.techCompany.images.imageUrl}
          className="round-card-img center"
          alt="..."
        />
        <h3 className="card-title">{aJob.title}</h3>
        <p className="card-text">{aJob.summary}</p>
        <div>
          <button
            // onClick={onJobEdit}
            data-frd-id={aJob.id}
            className="mx-1 col-4 my-1 btn btn-secondary"
          >
            Edit
          </button>
          <button
            // onClick={onFriendDelete}
            data-frd-id={aJob.id}
            className="mx-1 col-4 my-1 btn btn-danger"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(SingleJob);
