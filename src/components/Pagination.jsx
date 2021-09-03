import "rc-pagination/assets/index.css";
import Pagination from "rc-pagination";
import React from "react";

class Page extends React.Component {
  state = {
    current: 1,
  };

  onChange = (page) => {
    console.log(page);
    this.setState({
      current: page,
    });
  };

  render() {
    return (
      <Pagination
        onChange={this.onChange}
        current={this.state.current}
        total={20}
      />
    );
  }
}

export default Page;
