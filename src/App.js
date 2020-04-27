import React, { Component } from 'react';
import './App.css';
import ChildComponent from './ChildComponent';

class App extends Component {
  
  constructor() {
    super();

    this.state = {
      renderChild: true,
    }
  }

  componentDidUpdate() {
    console.log('My App Component did update')
  }

  clickHandler = () => {
    this.setState({
      renderChild: !this.state.renderChild
    })
  }

  render( ){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Let's learn LifeCycle</h1>
          <button onClick={this.clickHandler}>Make the child component toggle</button>
          {this.state.renderChild ? <ChildComponent /> : null}
        </header>
      </div>
    );
  }
}

export default App;
