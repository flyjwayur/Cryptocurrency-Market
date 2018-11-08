import React from "react";
import classes from "./coinsInfo.module.css";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { searchIncludes } from "../../Libraries/methods";

const CoinsInfo = ({ coins, searchWord }) => {
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
    if (searchWord) {
      return searchIncludes(coins, searchWord);
    } else {
      return coins;
    }
  };

  const coinsData = filteredCoins();
  const displayCoins =
    coinsData != null ? (
      coinsData.map(coin => {
        return (
          <div className={classes.coinDiv} key={coin.id}>
            <p>{coin.rank}</p>
            <p className={[classes.contentStyle, classes.coinName].join(' ')}>{coin.name}</p>
            <p className={[classes.contentStyle, classes.highlightPrice].join(' ')}>
              $ {parseFloat(coin.price_usd).toFixed(3)}
            </p>
            <p className={classes.contentStyle}>{coin.symbol}</p>
            <p className={classes.contentStyle}>{coin.market_cap_usd}</p>
            <p
              className={[
                displayPlusOrMinusStyle(parseFloat(coin.percent_change_24h)),
                classes.changeStyle
              ].join(" ")}
            >
              {displayPlusOrMinusIcon(parseFloat(coin.percent_change_24h))}{" "}
              {coin.percent_change_24h}
            </p>
            <p
              className={[
                displayPlusOrMinusStyle(parseFloat(coin.percent_change_7d)),
                classes.changeStyle
              ].join(" ")}
            >
              {displayPlusOrMinusIcon(parseFloat(coin.percent_change_7d))}
              {coin.percent_change_7d}
            </p>
          </div>
        );
      })
    ) : (
      <div>Loading ...</div>
    );

  return <div className={classes.coinOuterWrapper}>{displayCoins}</div>;
};

export default CoinsInfo;
