import React from "react";

export default function Child(props) {
  return (
    <div className="form-group row pt-3">
      <label className="col-sm-2 col-form-label">
        {props.fieldName[0].toUpperCase() + props.fieldName.slice(1)}
      </label>
      <div className="col-sm-10">
        <input
          //value={props.} needs this so the form can change update the onForm change as well
          onChange={props.handleFormChange}
          type="text"
          className="form-control"
          name={props.fieldName[0].toLowerCase() + props.fieldName.slice(1)}
          placeholder={props.sampleValue}
        />
      </div>
    </div>
  );
}
