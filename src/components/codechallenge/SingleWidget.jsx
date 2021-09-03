import React from "react";

function SingleWidget(props) {
  const oneWidget = props.SingleWidget;
  return (
    <div className="col card-temp">
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">{oneWidget.Name}</h5>
          <p className="card-text">{oneWidget.Manufacturer}</p>
          <p className="card-text">{oneWidget.Description}</p>
          <p className="card-text">{oneWidget.Cost}</p>
        </div>
      </div>
    </div>
  );
}

export default React.memo(SingleWidget);
