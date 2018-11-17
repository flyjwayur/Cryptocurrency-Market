import React from 'react';
import classes from './spinner.module.css';

const Spinner = props => {
  return (
    <div className={classes.loader}>
      loading...
    </div>
  )
}


export default Spinner
