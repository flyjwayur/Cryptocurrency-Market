import React from 'react'
import Navigation from '../components/Navigation/Navigation'

const Layout = props => {
  return (
    <div>
      <Navigation/>
      <main>{props.children}</main>
    </div>
  )
}

export default Layout
