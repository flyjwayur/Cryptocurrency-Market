import React from "react";
import classes from "./coinsInfo.module.css";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CoinsInfo = ({ coins }) => {

  const displayPlusOrMinusStyle = (dataValue) => {
    return (dataValue > 0) ? classes.plusStyle : classes.miusStyle
  }

  const displayPlusOrMinusIcon = (dataValue) => {
    return (dataValue > 0) ? 
    <FontAwesomeIcon className={classes.iconStyle} icon={faCaretUp}/> 
    : <FontAwesomeIcon className={classes.iconStyle} icon={faCaretDown}/>
  }

  const displayCoins =
    coins != null
      ? coins.map(coin => {
          return (
            <div className={classes.coinDiv} key={coin.id}>
              <p>
                <span className={classes.infoTitle}>Rank</span>
                <span>{coin.rank}</span>
              </p>
              <p>
                <span className={classes.coinName}>{coin.name}</span>
              </p>
              <div className={classes.infoFromPriceTilChange}>
                <p>
                  <span className={classes.infoTitle}>Price</span>
                  <span className={classes.highlightText}>
                    $ {parseFloat(coin.price_usd).toFixed(3)}
                  </span>
                </p>
                <p>
                  <span className={classes.infoTitle}>Symbol</span>
                  <span>{coin.symbol}</span>
                </p>
                <p>
                  <span className={classes.infoTitle}>Market Cap</span>
                  <span>{coin.market_cap_usd}</span>
                </p>
                <p>
                  <span className={classes.infoTitle}>Change % (24h)</span>
                  <span className={displayPlusOrMinusStyle(parseFloat(coin.percent_change_24h))}>
                  {displayPlusOrMinusIcon(parseFloat(coin.percent_change_24h))} {coin.percent_change_24h}
                  </span>
                </p>
                <p>
                  <span className={classes.infoTitle}>Change % (7d)</span>
                  <span className={displayPlusOrMinusStyle(parseFloat(coin.percent_change_7d))}>
                  {displayPlusOrMinusIcon(parseFloat(coin.percent_change_7d))}{coin.percent_change_7d}
                  </span>
                </p>
              </div>
            </div>
          );
        })
      : null;
   
  return <div className={classes.coinOuterWrapper}>{displayCoins}</div>;
};

export default CoinsInfo;
