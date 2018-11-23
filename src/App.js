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
    let sameQuote = true;
    let sameColour = true;
    let newIndex;
    let newColour;
    //guard against displaying same quote twice in a row
    while(sameQuote) {   
      newIndex = Math.floor(Math.random() * 25);
      sameQuote = (newIndex == this.state.index) ? true : false;     
    }
    //guard against displaying same colour twice in a row
    while(sameColour) {
      newColour = Math.floor(Math.random() * 16);
      sameColour = (newColour == colors.indexOf(this.state.color)) ? true : false;
    }

    console.log('newIndex: ' + newIndex + ', newColour: ' + newColour);
    this.setState({
      index: newIndex,
      color: colors[newColour]
    });
  }

  componentDidMount() {
    const quotesURL = "https://gist.githubusercontent.com/johnno8/455be897f86a71a8fbdbbd49855ba83b/raw/ce5d6322e414ad6ce02620b7d42331be57bbc528/quotes.json" 
    fetch(quotesURL)
      .then(response => response.json())
      .then(r => {
        this.setState({
          quotes: r.quotes,
          index: Math.floor(Math.random() * 25),
          color: colors[Math.floor(Math.random() * 16)]
        });
      }).catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App" style={{background: this.state.color}}>
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
