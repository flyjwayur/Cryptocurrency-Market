import React from 'react'
import PropTypes from 'prop-types'

const SearchInput = ({ handleInput, searchWord }) => {

  return (
    <div>
      <label htmlFor="searchWord"></label>
      <input
        type="text"
        id="description"
        name="description"
        placeholder="ex)part time job"
        onChange={handleInput}
        value={searchWord}
        required/>
    </div>
  )
}

SearchInput.propTypes = {

}

export default SearchInput
