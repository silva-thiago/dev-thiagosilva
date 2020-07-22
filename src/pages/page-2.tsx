import React from 'react'
import { Link } from 'gatsby'

import { Layout, SEO } from '../components'

const SecondPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <SEO title='Page two' />
        <h1>Hi from the second page</h1>
        <p>Welcome to page 2</p>
        <Link to='/'>Go back to the homepage</Link>
      </Layout>
    </React.Fragment>
  )
}

export default SecondPage
