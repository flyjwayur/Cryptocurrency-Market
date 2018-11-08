import React, { Component } from 'react';
import './App.css';
import CoinsInfo from './components/CoinsInfo/CoinsInfo'
import SearchInput from './components/SearchInput/SearchInput'
import CoinsInfoTitle from './components/CoinsInfoTitle/CoinsInfoTitle'
import Layout from './Layout/Layout'

class App extends Component {
  state = {
    coins: null,
    searchWord : ""
  }

  handleInput = e => {
    this.setState({
      searchWord : e.target.value.toLowerCase()
    })
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
      <Layout>
      <SearchInput handleInput={this.handleInput} searchWord={this.searchWord}/>
        <CoinsInfoTitle/>
        <CoinsInfo coins={this.state.coins} searchWord={this.state.searchWord}/>
      </Layout>
      </div>
    );
  }
}

export default App;
