import React from 'react'
import PropTypes from 'prop-types'
import Navigation from '../components/Navigation/Navigation'

const Layout = props => {
  return (
    <div>
      <Navigation/>
      <main>{props.children}</main>
    </div>
  )
}

Layout.propTypes = {

}

export default Layout
