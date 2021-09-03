import React from "react";
import Counter from "./Counter";

class Counters extends React.Component {
  state = {
    counters: [
      { id: 1, value: 9 },
      { id: 2, value: 5 },
      { id: 3, value: 0 },
      { id: 4, value: 2 },
    ],
  };

  handleIncrement = (counter) => {
    console.log(counter, "increment is firing");
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  onDelete = (counterId) => {
    console.log("delete is firing!", counterId);
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters });
    console.log("button deleted");
  };
  render() {
    return (
      /**so key thingy is mandatory or else the console will complain */
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            value={counter.value}
            delete={this.onDelete}
            id={counter.id}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
