import React from 'react';

import CurrentCounter from "./CurrentCounter";

class Counter extends React.Component {
  state = {
    counter: 0
  }

  increment() {
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  }

  decrement() {
    this.setState((prevState) => ({
      counter: prevState.counter === 0 ?
        prevState.counter :
        prevState.counter - 1
    }));
  }

  reset() {
    this.setState({ counter: 0 });
  }

  render() {
    return(
      <div>
        <button
          className="btn btn-sm btn-primary"
          onClick={this.increment.bind(this)}
        >
          Increment
        </button>&nbsp;
        <button
          className="btn btn-sm btn-primary"
          onClick={this.decrement.bind(this)}
        >
          Decrement
        </button>&nbsp;
        <button
          className="btn btn-sm btn-primary"
          onClick={this.reset.bind(this)}
        >
          Reset
        </button>
        <CurrentCounter counter={this.state.counter} />
      </div>
    );
  }
}

export default Counter;