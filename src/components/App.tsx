import React, { ReactNode } from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
// import PropTypes from 'prop-types'

import Navbar from './Navbar'
import Header from './Header'
import SEO from './SEO'
import Section from './Section'
import Repos from './Repos'
import Footer from './Footer'

export interface IProps {
  children: ReactNode
}

const links = [
  { href: 'https://t.me/silvathiago', label: 't.me/silvathiago', target: '_blank' },
]

const App: React.FC<IProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitle {
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
      <SEO title='Home' />
      <Navbar siteTitle={data.site.siteMetadata.title} />
      <Header />
      {/* Begin page content */}
      <main role='main'>
        <div className='container'>
          {/* <div style={{ maxWidth: `300px`, margin: `auto` }}>
            <Image />
          </div> */}
          {/* <Section>
            <div className='text-center'>
              <Link to='/page-2'>Go to page 2</Link><br />
              <Link to='/using-typescript'>Go to Using TypeScript</Link>
            </div>
          </Section> */}
          <Repos />
        </div>
      </main>
      <Footer siteAuthor={data.site.siteMetadata.author} />
    </React.Fragment>
  )
}

/* App.propTypes = {
  children: PropTypes.node.isRequired,
} */

export default App
