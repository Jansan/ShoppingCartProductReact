import React, { Component } from "react";
import Counter from "./counter";

// class Counter Component
class Counters extends Component {
  // render
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      // div start
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2 p-1">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div> // end div
    );
  }
} // end class Counter Component
// export
export default Counters;
