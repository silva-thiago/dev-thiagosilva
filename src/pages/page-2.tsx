import React from 'react'
import { Link } from 'gatsby'

import { Landing, SEO } from '../components'

const SecondPage = () => {
  return (
    <React.Fragment>
      <Landing>
        <SEO title='Page two' />
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to='/'>Go back to the homepage</Link>
      </Landing>
    </React.Fragment>
  )
}

export default SecondPage
