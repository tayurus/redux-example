import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {"field" : 1};
  }

  render(){

    return (
      <div className="App">
        <button onClick={this.props.decrement}>-</button>
        <span>{this.props.number}</span>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.returnInitial}>Вернуть начальное состояние</button>
      </div>
    );
  }


}

function mapStateToProps(state) {
  const { number } = state;

  return { number };
}

function mapDispatchToProps(dispatch) {

  function increment() {
    dispatch({type: 'INCREMENT'});
  }

  function decrement() {
    dispatch({type: 'DECREMENT'});
  }

  function returnInitial() {
    dispatch({type: 'RETURN_INITIAL'});
  }

  return {increment, decrement, returnInitial};
}

let connectedComponent = connect(mapStateToProps, mapDispatchToProps)(App);


export { connectedComponent as App };
