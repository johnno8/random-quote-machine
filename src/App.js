import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: Math.floor(Math.random() * 5)
    }
  }

  handleClick = () => {
    this.setState({
      index: Math.floor(Math.random() * 5)
    });
  }

  render() {
    const quotes = [{ quote: 'body of some quote', author: 'D. Writer' },
               { quote: 'second quote', author: 'e. Writer' },
               { quote: 'third quote', author: 'f. Writer' },
               { quote: 'fourth quote', author: 'g. Writer' },
               { quote: 'fifth quote', author: 'h. writer' }];

    return (
      <div className="App">
        <QuoteBox q={quotes[this.state.index]} getIndex={this.handleClick}/>    
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
          <div id="text">{this.props.q.quote}</div>
          <div id="author">{this.props.q.author}</div>
        </div>
        <div id="quote-box-footer">
          <button id="tweet-quote">tweet</button>
          <button id="new-quote" onClick={this.props.getIndex}>new quote</button>
        </div>
      </div>
    )
  }
} 

export default App;
