import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quotes: [{ quote: 'fetching quotes...', author: ''}],
      index: 0
    }
  }

  handleClick = () => {
    this.setState({
      index: Math.floor(Math.random() * 102)
    });
  }

  componentDidMount() {
    const quotesURL = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json" 
    fetch(quotesURL)
      .then(response => response.json())
      .then(r => {
        this.setState({
          quotes: r.quotes,
          index: Math.floor(Math.random() * 102)
        });
      }).catch(err => console.log(err))
  }

  render() {

    return (
      <div className="App">
        <QuoteBox q={this.state.quotes[this.state.index]} getIndex={this.handleClick}/>    
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
