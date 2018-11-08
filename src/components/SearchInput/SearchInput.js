import React from 'react'
import classes from './searchInput.module.css'

const SearchInput = ({ handleInput, searchWord }) => {

  return (
    <div>
      <label htmlFor="searchWord"></label>
      <input className={classes.searchInput}
        type="text"
        id="description"
        name="description"
        placeholder="ex) Bitcoin"
        onChange={handleInput}
        value={searchWord}
        required/>
    </div>
  )
}

export default SearchInput
