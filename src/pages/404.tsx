import React from 'react'

import { Layout, SEO } from '../components'

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <SEO title='404: Not found' />
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    </React.Fragment>
  )
}

export default NotFoundPage
