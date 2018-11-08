import React from 'react'
import classes from './navigation.module.css'

const Navigation = ({sortOrder, handleSortInput}) => {
  return (
    <div className={classes.navWrapper}>
      <h1 className={classes.mainTitle}>CryptoMarket</h1>
    </div>
  )
}

export default Navigation
