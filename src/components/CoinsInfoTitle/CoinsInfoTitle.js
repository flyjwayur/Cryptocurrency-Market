import React from 'react'
import classes from './coinsInfoTitle.module.css'

const CoinsInfoTitle = props => {
  return (
    <div className={classes.coinTitleDiv}>
      <p className={classes.infoRank}>Rank</p>
      <span>|</span>
      <p className={classes.infoName}>Name</p>
      <span>|</span>
      <p className={classes.infoPrice}>Price</p>
      <span>|</span>
      <p className={classes.infoSymbol}>Symbol</p>
      <span>|</span>
      <p className={classes.infoMarketCap}>Market Cap</p>
      <span>|</span>
      <p className={classes.infoChange}>Change % (24h)</p>
      <span>|</span>
      <p className={classes.infoChange}>Change % (7d)</p>
    </div>
  )
}

export default CoinsInfoTitle
