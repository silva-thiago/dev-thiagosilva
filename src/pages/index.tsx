import React from 'react'
import { Link } from 'gatsby'

import { Layout, Image, SEO } from '../components'

const links = [
  { href: 'https://t.me/silvathiago', label: 't.me/silvathiago', target: '_blank' },
]

const IndexPage = () => {
  return (
    <React.Fragment>
      <Layout>
        <SEO title='Home' />
        <section className='text-center h-center-alignment'>
          <div className=''>
            <h2>Hi, I am learning fullstack development</h2>
            <p>I design and code beautifully simple things.</p>
            <p>thiago.silva@imd.ufrn.br</p>
            <ul className='list-unstyled'>
              {links.map(({ href, label, target }) => (
                <li key={`${href}${label}${target}`}>
                  <a className='text-decoration-none' href={href} target={target}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className=''>
            <p className=''>Living, learning &amp; leveling up one day at a time.</p>
          </div>
        </section>
        <div style={{ maxWidth: `300px`, margin: `auto` }}>
          <Image />
        </div>
        <section className='text-center h-center-alignment'>
          <div>
            <Link to='/page-2'>Go to page 2</Link><br />
            <Link to='/using-typescript'>Go to Using TypeScript</Link>
          </div>
        </section>
      </Layout>
    </React.Fragment>
  )
}

export default IndexPage
