import React from "react";

function FormField(props) {
  return (
    <div className="form-group row pt-3">
      <label className="col-sm-2 col-form-label">{props.fieldName}</label>
      <div className="col-sm-10">
        <input
          onChange={props.onFormChange}
          type="text"
          className="form-control"
          name="title"
          placeholder="Dwight Schrute"
        />
      </div>
    </div>
  );
}

export default FormField;
