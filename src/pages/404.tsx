import React from 'react'

import { Landing, SEO } from '../components'

const NotFoundPage = () => {
  return (
    <React.Fragment>
      <Landing>
        <SEO title='404: Not found' />
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Landing>
    </React.Fragment>
  )
}

export default NotFoundPage
