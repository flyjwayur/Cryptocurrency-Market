import React, { Component } from 'react';
import './App.css';
import CoinsInfo from './components/CoinsInfo/CoinsInfo'
import SearchInput from './components/SearchInput/SearchInput'
import CoinsInfoTitle from './components/CoinsInfoTitle/CoinsInfoTitle'
import Layout from './Layout/Layout'


class App extends Component {
  state = {
    coins: null,
    searchWord : "",
    sortOrder : true,
    sortType : "rank"
  }

  handleInput = e => {
    this.setState({
      searchWord : e.target.value.toLowerCase()
    })
  }

  
  handleClickTypeSort = (sortType, sortOrder) => {

    console.log(sortType);
    console.log(sortOrder);
    this.setState({
      sortType
    })

    this.setState({
      sortOrder
    })
  }

  componentDidMount () {
    const url = 'https://api.coinmarketcap.com/v1/ticker/?limit=500';
    fetch (url).then (response => response.json()).then (coins => {

      setTimeout(()=>{
        this.setState({
          coins
        });
      },2000)
    
    });
  }
  
  componentDidUpdate(){
    console.log(this.state.sortType);
    console.log(this.state.sortOrder);
  }

  render() {
    const coins = (this.state.coins !== null) ? this.state.coins.slice() : [];
  

    return (
      <div className="App">
      <Layout>
     <SearchInput handleInput={this.handleInput} searchWord={this.searchWord}/>
        <CoinsInfoTitle handleClickTypeSort={this.handleClickTypeSort} sortOrder={this.state.sortOrder} sortType={this.state.sortType}/>
        <CoinsInfo coins={coins} searchWord={this.state.searchWord} handleClickTypeSort={this.handleClickTypeSort} sortOrder={this.state.sortOrder} sortType={this.state.sortType}/>
      </Layout>
      </div>
    );
  }
}

export default App;
