import React, { ReactNode } from 'react'
// import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import { Header, Footer } from '../index'

export interface IProps {
  children: ReactNode
}

const Landing: React.FC<IProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <Header siteTitle={data.site.siteMetadata.title} />
      {/* Begin page content */}
      <main role='main'>
        <div className='container'>
          {children}
        </div>
      </main>
      <Footer siteAuthor={data.site.siteMetadata.author} />
    </React.Fragment>
  )
}

/* Landing.propTypes = {
  children: PropTypes.node.isRequired,
} */

export default Landing
