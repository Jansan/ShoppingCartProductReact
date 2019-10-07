import React, { Component } from "react";
import Counter from "./counter";

// class Counter Component
class Counters extends Component {
  // render
  render() {
    return (
      // div start
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-sm m-2 p-1"
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          />
        ))}
      </div> // end div
    );
  }
} // end class Counter Component
// export
export default Counters;
