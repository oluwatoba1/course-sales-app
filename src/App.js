import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

class App extends Component {
  render() {
    var courses = [
      {name: 'Complete iOS dev course', price: 199},
      {name: 'Complete Pentesting course', price: 299},
      {name: 'Complete Frontend Developer course', price: 180},
      {name: 'Bug Bounty and Web App Pentesting', price: 190}
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Course Sales App using React.js
            <br />
          </a>
        </header>
        <Coursesales items={courses} />
      </div>
    );
  }
}

export default App;