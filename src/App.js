import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { number, increment, decrement } = this.props;
    return (
      <div className="App">
        <span>{number}</span>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { number } = state;
  return { number };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "decrement" })
  };
};

const connectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export { connectedComponent as App };
