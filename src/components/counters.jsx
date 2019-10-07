import React, { Component } from "react";
import Counter from "./counter";

// class Counter Component
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  //handleIncrement function
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  //handleReset arrow function
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  //handleDelete methed
  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };
  // render
  render() {
    return (
      // div start
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2 p-1"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter={counter}
          />
        ))}
      </div> // end div
    );
  }
} // end class Counter Component
// export
export default Counters;
