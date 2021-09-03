<form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">
      First Name
    </label>
    <input
      type="text"
      className="form-control"
      id="firstName"
      aria-describedby="emailHelp"
      value={this.state.formData.firstName}
    />
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">
      Password
    </label>
    <input
      type="password"
      className="form-control"
      id="exampleInputPassword1"
    />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" for="exampleCheck1">
      Check me out
    </label>
  </div>
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>;
state = {
  formData: { firstName: "Gregorio" },
};
onFormFieldChanged = (e) => {
  let currentTarget = e.currentTarget;
  let newValue = currentTarget.value;
  let inputName = currentTarget.name;
  console.log({ newValue, currentTarget });

  this.setState(() => {
    let newState = { ...this.state.formData };
    newState[inputName] = newValue;

    return newState;
  });
};
