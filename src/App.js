import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const colors = ['#96ABA7', '#719e35', '#52ad9a', '#3b3a36', '#7d4627', '#89bdd3','#bd222f', '#173e43', '#22264b', '#5a5c51', '#aa863a', '#283018', '#7baa71', '#3d5094', '#e05038', '#e6af4b'];

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quotes: [{ quote: 'fetching quotes...', author: ''}],
      index: 0,
      color: colors[0]
    }
  }

  handleClick = () => {
    this.setState({
      index: Math.floor(Math.random() * 102),
      color: colors[Math.floor(Math.random() * 16)]
    });
  }

  componentDidMount() {
    const quotesURL = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json" 
    fetch(quotesURL)
      .then(response => response.json())
      .then(r => {
        this.setState({
          quotes: r.quotes,
          index: Math.floor(Math.random() * 102),
          color: colors[Math.floor(Math.random() * 6)]
        });
      }).catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App" style={{backgroundColor: this.state.color}}>
        <QuoteBox 
          q={this.state.quotes[this.state.index]} 
          getIndex={this.handleClick}
          color={this.state.color}/>    
      </div>
    );
  } 
}


class QuoteBox extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let tweetURL = 'https://twitter.com/intent/tweet?text="' + this.props.q.quote + '"' + ' - ' + this.props.q.author + '&hashtags=freecodecamp,randomquote';
    return (
      <div id="quote-box">
        <div id="text-container" style={{color: this.props.color}}>
          <div id="text">'{this.props.q.quote}'</div>
          <div id="author">- {this.props.q.author}</div>
        </div>
        <div id="quote-box-footer">
          <a href={tweetURL} id="tweet-quote" target="_blank" rel="noopener noreferrer"><button className="tweet" style={{backgroundColor: this.props.color}}><i className="fa fa-twitter"/> Tweet</button></a>
          <button id="new-quote" onClick={this.props.getIndex} style={{backgroundColor: this.props.color}}>New quote</button>
        </div>
      </div>
    )
  }
} 

export default App;
