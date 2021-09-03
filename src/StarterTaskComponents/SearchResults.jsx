import React from "react";
import SingleFriend from "./SingleFriend";

class SearchResults extends React.Component {
  state = {
    id: "",
    title: "",
    bio: "",
    summary: "",
    headline: "",
    slug: "",
    statusId: "",
    primaryImage: "",
  };

  componentDidMount() {}

  render() {
    return <SingleFriend></SingleFriend>;
  }
}

export default SearchResults;
