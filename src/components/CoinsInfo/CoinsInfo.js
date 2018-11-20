import React from "react";
import classes from "./coinsInfo.module.css";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  searchIncludes,
  sortCoinbyNameWithOrder,
  sortCoinbyPriceWithOrder,
  sortCoinbyRankWithOrder,
  giveCommaEverythreeDigits
} from "../../Libraries/methods";
import CryptoIcon from "react-webfont-cryptocoins";
import Spinner from "../UI/Spinner/Spinner";
import CoinsInfoTitle from "../CoinsInfoTitle/CoinsInfoTitle";

const CoinsInfo = ({ coins, searchWord, sortOrder, sortType, handleClickTypeSort }) => {
  const displayPlusOrMinusStyle = dataValue => {
    return dataValue > 0 ? classes.plusStyle : classes.miusStyle;
  };

  const displayPlusOrMinusIcon = dataValue => {
    return dataValue > 0 ? (
      <FontAwesomeIcon className={classes.upDownIcon} icon={faCaretUp} />
    ) : (
      <FontAwesomeIcon className={classes.upDownIcon} icon={faCaretDown} />
    );
  };

  const filteredCoins = coinsForFilterSort => {
    //If there is a search word, return the searched coins
    if (searchWord) {
      return searchIncludes(coinsForFilterSort, searchWord);
      // Otherwise return all the coins
    } else {
      return coinsForFilterSort;
    }
  };

  const sortCoins = filteredCoinData => {
    switch (sortType) {
      case "rank":
        return sortCoinbyRankWithOrder(filteredCoinData, sortOrder);
      case "name":
        return sortCoinbyNameWithOrder(filteredCoinData, sortOrder);
      case "price":
        return sortCoinbyPriceWithOrder(filteredCoinData, sortOrder);
      default:
        sortCoinbyRankWithOrder(filteredCoinData, sortOrder);
    }
  };

  const displayCoins = () => {
    if (coins !== null) {
      let coinsForFilterSort = coins.slice();
      console.log("copy of coin", coinsForFilterSort);
      const filteredOrSortedcoins = sortCoins(
        filteredCoins(coinsForFilterSort)
      );
      console.log("filteredOrSorted coin", filteredOrSortedcoins);

      if (filteredOrSortedcoins.length > 0) {
        let coinsDisplay = filteredOrSortedcoins.map(coin => {
          return (
            <div className={classes.coinContainer} key={coin.id}>
              <div className={classes.rank}>{coin.rank}</div>
              <div
                className={[
                  classes.fromRankToCap,
                  classes.iconNameContainer
                ].join(" ")}
              >
                <CryptoIcon className={classes.cryptoIcon} coin={coin.symbol} />
                <p className={classes.coinName}>{coin.name}</p>
              </div>
              <div
                className={[classes.fromRankToCap, classes.highlightPrice].join(
                  " "
                )}
              >
                $ {parseFloat(coin.price_usd).toFixed(3)}
              </div>
              <div className={classes.fromRankToCap}>{coin.symbol}</div>
              <div className={classes.fromRankToCap}>
                {giveCommaEverythreeDigits(coin.market_cap_usd)}
              </div>
              <div
                className={[
                  displayPlusOrMinusStyle(parseFloat(coin.percent_change_24h)),
                  classes.changes
                ].join(" ")}
              >
                {displayPlusOrMinusIcon(parseFloat(coin.percent_change_24h))}{" "}
                {coin.percent_change_24h}
              </div>
              <div
                className={[
                  displayPlusOrMinusStyle(parseFloat(coin.percent_change_7d)),
                  classes.changes
                ].join(" ")}
              >
                {displayPlusOrMinusIcon(parseFloat(coin.percent_change_7d))}
                {coin.percent_change_7d}
              </div>
            </div>
          );
        });
        return (
          <div>
            <CoinsInfoTitle
              handleClickTypeSort={handleClickTypeSort}
              sortOrder={sortOrder}
              sortType={sortType}
            />
            <div className={classes.coinOuterWrapper}>
            {coinsDisplay}
            </div>
          </div>
        );
      } else {
        return <div className={classes.noResult}>No results *^-^*</div>;
      }
    } else {
      return <Spinner />;
    }
  };
  return <div>{displayCoins()}</div>;
};

export default CoinsInfo;
