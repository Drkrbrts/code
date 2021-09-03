import React, { Component } from "react";

export default class JobForm extends Component {
  state = {
    fieldNames: [
      { name: "title", placeholder: "Dwight Schrute" },
      { name: "bio", placeholder: "This is a bio." },
      { name: "summary", placeholder: "lorem ipsum dolor sit amet etc" },
      { name: "headline", placeholder: "This is a headline." },
      { name: "slug", placeholder: "www.schrutefarms.com" },
      { name: "statusId", placeholder: "Active" },
      { name: "skills", placeholder: "salesman of the year" },
      { name: "primaryImage", placeholder: "Image Url here" },
    ],
  };
  render() {
    return <div></div>;
  }
}
