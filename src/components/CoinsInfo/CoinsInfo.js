import React from "react";
import classes from "./coinsInfo.module.css";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { searchIncludes, sortCoinbyNameWithOrder, sortCoinbyPriceWithOrder, sortCoinbyRankWithOrder } from "../../Libraries/methods";
import CryptoIcon from "react-webfont-cryptocoins";

const CoinsInfo = ({ coins, searchWord, sortOrder, sortType }) => {
  const displayPlusOrMinusStyle = dataValue => {
    return dataValue > 0 ? classes.plusStyle : classes.miusStyle;
  };

  const displayPlusOrMinusIcon = dataValue => {
    return dataValue > 0 ? (
      <FontAwesomeIcon className={classes.iconStyle} icon={faCaretUp} />
    ) : (
      <FontAwesomeIcon className={classes.iconStyle} icon={faCaretDown} />
    );
  };

  const filteredCoins = () => {
    //If there is a search word, return the searched coins
    if (searchWord) {
      return searchIncludes(coins, searchWord);
    // Otherwise return all the coins 
    } else {
      return coins;
    }
  };

  const sortCoins = () => {
    const filteredCoinData = filteredCoins();
    if(sortType === "name"){
      sortCoinbyNameWithOrder(filteredCoinData, sortOrder);
    }
    
    if(sortType === "price"){
      sortCoinbyPriceWithOrder(filteredCoinData, sortOrder);
    }

    if(sortType === "rank"){
      sortCoinbyRankWithOrder(filteredCoinData, sortOrder);
    }
    return filteredCoinData;
  }

  //const coinsData = filteredCoins();
  const coinsData = sortCoins();

  const displayCoins = () => {
    if (coinsData !== null && coinsData.length === 0) {
      return <div>No results!</div>
    } else if (coinsData !== null) {
      return (
        coinsData.map(coin => {
          return (
            <div className={classes.coinDiv} key={coin.id}>
              <div>{coin.rank}</div>
              <div className={[classes.contentStyle, classes.iconNameWrapper].join(' ')}>
                <p className={classes.cryptoIcon}>
                  <CryptoIcon coin={coin.symbol} />
                </p>
                <p className={classes.coinName}>
                  {coin.name}
                </p>
              </div>
              <div
                className={[classes.contentStyle, classes.highlightPrice].join(
                  " "
                )}
              >
                $ {parseFloat(coin.price_usd).toFixed(3)}
              </div>
              <div className={classes.contentStyle}>{coin.symbol}</div>
              <div className={classes.contentStyle}>{coin.market_cap_usd}</div>
              <div
                className={[
                  displayPlusOrMinusStyle(parseFloat(coin.percent_change_24h)),
                  classes.changeStyle
                ].join(" ")}
              >
                {displayPlusOrMinusIcon(parseFloat(coin.percent_change_24h))}{" "}
                {coin.percent_change_24h}
              </div>
              <div
                className={[
                  displayPlusOrMinusStyle(parseFloat(coin.percent_change_7d)),
                  classes.changeStyle
                ].join(" ")}
              >
                {displayPlusOrMinusIcon(parseFloat(coin.percent_change_7d))}
                {coin.percent_change_7d}
              </div>
            </div>
          );
        })
      );
    } else {
      return (
        <div>Loading ...</div>
      );
    }
  }
    

  return <div className={classes.coinOuterWrapper}>{displayCoins()}</div>;
};

export default CoinsInfo;
