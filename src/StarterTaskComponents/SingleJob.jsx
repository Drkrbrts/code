import React from "react";

function SingleJob(props) {
  const job = props.job;

  function onSelectedJobChange() {
    props.onClick(job);
  }
  return (
    <React.Fragment>
      <div
        className="row"
        style={{ margin: "0 0 15px 5px" }}
        onClick={onSelectedJobChange}
      >
        <div className="card col-6">
          <h3 className="card-header">{job.title}</h3>
          <div className="card-body">
            <div className="blockquote mb-0">
              <p>{job.summary}</p>
              {job.techCompany && (
                <div className="blockquote-footer">
                  {job.techCompany.headline}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SingleJob;
