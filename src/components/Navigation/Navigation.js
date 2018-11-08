import React from 'react'
import SortButton from '../SortButton/SortButton'
import classes from './navigation.module.css'

const Navigation = props => {
  return (
    <div className={classes.navWrapper}>
      <h1 className={classes.mainTitle}>CryptoMarket</h1>
      <SortButton/>
    </div>
  )
}

export default Navigation
