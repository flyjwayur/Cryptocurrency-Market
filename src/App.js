import React, { Component } from 'react';
import './App.css';
import CoinsInfo from './components/CoinsInfo/CoinsInfo'

class App extends Component {
  state = {
    coins: null
  }

  componentDidMount () {
    const url = 'https://api.coinmarketcap.com/v1/ticker/?limit=500';
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
      <CoinsInfo coins={this.state.coins}/>
      </div>
    );
  }
}

export default App;
