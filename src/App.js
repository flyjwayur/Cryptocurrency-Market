import React, { Component } from 'react';
import './App.css';
import CoinsInfo from './components/CoinsInfo/CoinsInfo'
import SearchInput from './components/SearchInput/SearchInput'
import CoinsInfoTitle from './components/CoinsInfoTitle/CoinsInfoTitle'
import Layout from './Layout/Layout'
import SortInput from './components/SortInput/SortInput'


class App extends Component {
  state = {
    coins: null,
    searchWord : "",
    sortOrder : "ascending",
    sortType : "name"
  }

  handleInput = e => {
    this.setState({
      searchWord : e.target.value.toLowerCase()
    })
  }

  handleSortOrder = e =>{
    this.setState({
      sortOrder : e.target.value
    })
  }

  handleSortType = e => {
    this.setState({
      sortType : e.target.value
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
    console.log(this.state.sortType);
    console.log(this.state.sortOrder);
  }

  render() {
    
    return (
      <div className="App">
      <Layout>
      <SortInput sortType={this.state.sortType} sortOrder={this.state.sortOrder} handleSortType={this.handleSortType} handleSortOrder={this.handleSortOrder}/>
     <SearchInput handleInput={this.handleInput} searchWord={this.searchWord}/>
        <CoinsInfoTitle/>
        <CoinsInfo coins={this.state.coins} searchWord={this.state.searchWord} sortOrder={this.state.sortOrder}/>
      </Layout>
      </div>
    );
  }
}

export default App;
