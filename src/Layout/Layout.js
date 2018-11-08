import React from 'react'
import Navigation from '../components/Navigation/Navigation'

const Layout = props => {
  return (
    <div>
      <Navigation sortOrder={props.sortOrder} handleSortInput={props.handleSortInput}/>
      <main>{props.children}</main>
    </div>
  )
}

export default Layout
