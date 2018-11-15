import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const q = { body: 'body of some quote', author: 'D. Writer' }

    return (
      <div className="App">
        <QuoteBox quote={q}/>    
      </div>
    );
  } 
}

class QuoteBox extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="quote-box">
        <div id="text-container">
          <div id="text">{this.props.quote.body}</div>
          <div id="author">{this.props.quote.author}</div>
        </div>
        <div id="quote-box-footer">
          <button id="tweet-quote">tweet</button>
          <button id="new-quote">new quote</button>
        </div>
      </div>
    )
  }
}

export default App;
