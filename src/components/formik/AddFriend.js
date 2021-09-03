import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  title: "",
  bio: "",
  summary: "",
  headline: "",
  slug: "",
  statusId: "",
  skills: "",
  primaryImage: "",
};

const onSubmit = (values) => {
  console.log("Form data", values);
  console.log("Title: " + values.title);
  console.log("Bio: " + values.bio);
  console.log("Summary: " + values.summary);
  console.log("Headline: " + values.headline);
  console.log("Slug: " + values.slug);
  console.log("StatusId: " + values.statusId);
  console.log("Skills: " + values.skills);
  console.log("PrimaryImage: " + values.primaryImage);
};

const validationSchema = Yup.object({
  title: Yup.string().required("Required").min(5),
  bio: Yup.string().required("Required").min(1),
  summary: Yup.string().required("Required").min(1),
  headline: Yup.string().required("Required").min(1),
  slug: Yup.string().required("Required").min(1),
  statusId: Yup.string().required("Required").min(1),
  skills: Yup.string().required("Required").min(1),
  primaryImage: Yup.string().required("Required").min(1),
});

function AddFriend() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  console.log("Visited fields", formik.touched);
  console.log("Visited values: ", formik.values);

  return (
    <div className="p-2 mb-4 bg-light rounded-3">
      <h4
        style={{
          textAlign: "center",
        }}
      >
        Add a friend
      </h4>
      <div className="container-fluid py-1">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
              onChange={formik.handleChange}
              value={formik.values.title}
            ></input>
            <div>
              {formik.touched.title && formik.errors.title ? (
                <div
                  className="error"
                  style={{ marginLeft: "5px", color: "red" }}
                >
                  {formik.errors.title}
                </div>
              ) : null}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputBio">Bio:</label>
            <input
              type="text"
              className="form-control"
              name="bio"
              id="bio"
              onChange={formik.handleChange}
              value={formik.values.bio}
              onBlur={formik.handleBlur}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="summary">Summary:</label>
            <input
              type="text"
              className="form-control"
              name="summary"
              id="summary"
              onChange={formik.handleChange}
              value={formik.values.summary}
              onBlur={formik.handleBlur}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="headline">Headline:</label>
            <input
              type="text"
              className="form-control"
              name="headline"
              id="headline"
              onChange={formik.handleChange}
              value={formik.values.headline}
              onBlur={formik.handleBlur}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="slug">Slug:</label>
            <input
              type="text"
              className="form-control"
              name="slug"
              id="slug"
              onChange={formik.handleChange}
              value={formik.values.slug}
              onBlur={formik.handleBlur}
            ></input>
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="statusId">Status Id</label>
            <select
              type="text"
              name="statusId"
              id="statusId"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.statusId}
              onBlur={formik.handleBlur}
            >
              <option value="">Select Id Status...</option>
              <option value="NotSet">NotSet</option>
              <option value="Active">Active</option>
              <option value="Deleted">Deleted</option>
              <option value="Flagged">Flagged</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="skills">Skills</label>
            <input
              type="text"
              className="form-control"
              name="skills"
              id="skills"
              onChange={formik.handleChange}
              value={formik.values.skills}
              onBlur={formik.handleBlur}
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="primaryImage">Primary Image:</label>
            <input
              type="text"
              className="form-control"
              name="primaryImage"
              id="primaryImage"
              onChange={formik.handleChange}
              value={formik.values.primaryImage}
              onBlur={formik.handleBlur}
            ></input>
          </div>
          <button
            type="submit"
            name="submit"
            id="submit"
            className="btn btn-primary mr-3 m-3 mb-1"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddFriend;
