import React from "react";

function FormField(props) {
  return (
    <div className="form-group row pt-3">
      <label className="col-sm-2 col-form-label">
        {props.fieldName[0].toUpperCase() + props.fieldName.slice(1)}
      </label>
      <div className="col-sm-10">
        <input
          //value={props.} needs this so the form can change update the onForm change as well
          onChange={props.onFormChange}
          value={props.formValues}
          type="text"
          className="form-control"
          name={props.fieldName}
          placeholder={props.sampleValue}
        />
      </div>
    </div>
  );
}

export default FormField;
