import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    coins: null
  }

  componentDidMount () {
    const url = 'https://api.coinmarketcap.com/v1/ticker/?limit=2000';
    fetch (url).then (response => response.json()).then (coins => {
      this.setState({
        coins
      });
    });
  }
  
  componentDidUpdate(){
    console.log('coins', this.state.coins);
  }

  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
