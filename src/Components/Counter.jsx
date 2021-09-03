import React from "react";

class Counter extends React.Component {
  state = {
    count: this.props.value,
    tags: ["tag1", "tag2", "tag3"],
  };

  //what happens when state changes?
  //setState calls an asyncrhonous call to render because something will change
  //keys in objects need to be unique so react can identify them immediately

  styles = {
    fonrSize: 10,
    fontWeight: "bold",
  };

  //we dont modify the state directly
  incrementCount = () => {
    // console.log("button is firing: ", this.state.count);
    this.setState({ count: this.state.count + 1 });
  };

  decrementCount = () => {
    this.setState({ count: this.state.count > 0 ? this.state.count - 1 : 0 });
  };

  render() {
    return (
      <div className="container">
        <h2 style={{ fontSize: 20 }}> {this.props.id}</h2>
        <span style={this.styles} className={this.setBadgeClasses()}>
          {this.state.count}
        </span>
        <button
          className="btn btn-secondary btn-sm"
          type="submit"
          onClick={this.incrementCount}
        >
          Increment
        </button>
        <button
          className="btn btn-secondary btn-sm m-2"
          type="submit"
          onClick={this.decrementCount}
        >
          decrement
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          type="submit"
          onClick={() => {
            this.props.delete(this.props.id);
          }}
        >
          decrement
        </button>
        {/*So in JAvascript you can use && because if the first value is true then js will retunr the second condition
        if its a string number or anything else*/}
        {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()}
      </div>
    );
  }

  renderTags() {
    //conditional rendering
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {" "}
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  setBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
