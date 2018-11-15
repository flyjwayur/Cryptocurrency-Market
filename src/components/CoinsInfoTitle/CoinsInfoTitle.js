import React from "react";
import classes from "./coinsInfoTitle.module.css";
import {
  faSort,
  faSortUp,
  faSortDown
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CoinsInfoTitle = ({ sortOrder, sortType, handleClickTypeSort }) => {

  let sortIcon = sortOrder ? faSortUp : faSortDown
 
  return (
    <div className={classes.coinTitleDiv}>
      <button 
        onClick={() => handleClickTypeSort("rank", !sortOrder)}
        className={[classes.titleBtnStyle, classes.infoRank].join(" ")}
      >
        Rank
      {(sortType === "rank") ? 
      <FontAwesomeIcon className={classes.iconStyle} icon = {sortIcon} /> :
      <FontAwesomeIcon className={classes.iconStyle} icon = {faSort} />}
      </button>
      <span>|</span>
      <button
        onClick={() => handleClickTypeSort("name", !sortOrder)}
        className={[classes.titleBtnStyle, classes.infoName].join(" ")}
      >
        Name
        {(sortType === "name") ? 
        <FontAwesomeIcon className={classes.iconStyle} icon = {sortIcon} /> :
        <FontAwesomeIcon className={classes.iconStyle} icon = {faSort} />}
      </button>
      <span>|</span>
      <button
        onClick={() => handleClickTypeSort("price", !sortOrder)}
        className={[classes.titleBtnStyle, classes.infoPrice].join(" ")}
      >
        Price
        {(sortType === "price") ? 
        <FontAwesomeIcon className={classes.iconStyle} icon = {sortIcon} /> :
        <FontAwesomeIcon className={classes.iconStyle} icon = {faSort} />}
      </button>
      <span>|</span>
      <p className={classes.infoSymbol}>Symbol</p>
      <span>|</span>
      <p className={classes.infoMarketCap}>Market Cap</p>
      <span>|</span>
      <p className={classes.infoChange}>Change % (24h)</p>
      <span>|</span>
      <p className={classes.infoChange}>Change % (7d)</p>
    </div>
  );
};

export default CoinsInfoTitle;
