import React from "react";
import classes from "./coinsInfoTitle.module.css";
import {
  faSortUp,
  faSortDown
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CoinsInfoTitle = ({ sortOrder, sortType, handleClickTypeSort }) => {

  let sortIconUp = (sortOrder === true) ? classes.clicked : "" ;
  let sortIconDown = (sortOrder === false) ? classes.clicked : "" ;
 
  return (
    <div className={classes.coinTitleDiv}>
      <button 
        onClick={() => handleClickTypeSort("rank", !sortOrder)}
        className={[classes.titleBtnStyle, classes.infoRank].join(" ")}
      > <span>Rank</span>
      {(sortType === "rank") ? 
      (<div className={classes.upDownIcon}><FontAwesomeIcon className={[classes.iconStyle, sortIconUp].join(' ')} icon = {faSortUp} /><FontAwesomeIcon className={[classes.iconStyle, sortIconDown].join(' ')} icon = {faSortDown} /></div>):
      (<div className={classes.upDownIcon}><FontAwesomeIcon className={classes.iconStyle} icon = {faSortUp} /> <FontAwesomeIcon className={classes.iconStyle} icon = {faSortDown} /></div>)}
      </button>
      <span>|</span>
      <button
        onClick={() => handleClickTypeSort("name", !sortOrder)}
        className={[classes.titleBtnStyle, classes.infoName].join(" ")}
      >
        <span>Name</span>
        {(sortType === "name") ? 
        (<div className={classes.upDownIcon}><FontAwesomeIcon className={[classes.iconStyle, sortIconUp].join(' ')} icon = {faSortUp} /><FontAwesomeIcon className={[classes.iconStyle, sortIconDown].join(' ')} icon = {faSortDown} /></div>):
        (<div className={classes.upDownIcon}><FontAwesomeIcon className={classes.iconStyle} icon = {faSortUp} /> <FontAwesomeIcon className={classes.iconStyle} icon = {faSortDown} /></div>)}
      </button>
      <span>|</span>
      <button
        onClick={() => handleClickTypeSort("price", !sortOrder)}
        className={[classes.titleBtnStyle, classes.infoPrice].join(" ")}
      >
        <span>Price</span>
        {(sortType === "price") ? 
        (<div className={classes.upDownIcon}><FontAwesomeIcon className={[classes.iconStyle, sortIconUp].join(' ')} icon = {faSortUp} /><FontAwesomeIcon className={[classes.iconStyle, sortIconDown].join(' ')} icon = {faSortDown} /></div>):
        (<div className={classes.upDownIcon}><FontAwesomeIcon className={classes.iconStyle} icon = {faSortUp} /> <FontAwesomeIcon className={classes.iconStyle} icon = {faSortDown} /></div>)}
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
