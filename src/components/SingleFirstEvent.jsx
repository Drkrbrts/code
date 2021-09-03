import React from "react";

function singleFirstEvent(props) {
  const oneFirstEvent = props.firstEvent;

  return (
    <React.Fragment>
      <div className="card">
        <h3 className="card-title my-3 mx-4">{oneFirstEvent.name}</h3>
        <img
          src={oneFirstEvent.slug}
          className="card m-1 main-card-img"
          alt="..."
        />
        <div className="card-body">
          <h5>{oneFirstEvent.headline}</h5>
          <p>{oneFirstEvent.description}</p>
          <p>{oneFirstEvent.summary}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default React.memo(singleFirstEvent);
