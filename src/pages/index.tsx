import React, { useRef } from 'react'
import { Link } from 'gatsby'

import { Layout, Section, Image, SEO, Repos } from '../components'

const links = [
  { href: 'https://t.me/silvathiago', label: 't.me/silvathiago', target: '_blank' },
]

const IndexPage = () => {
  const ref = useRef('noopener noreferrer')

  return (
    <React.Fragment>
      <Layout>
        <SEO title='Home' />
        <Section>
          <div className='text-center'>
            <h2>Hi, I am learning fullstack development</h2>
            <p>I design and code beautifully simple things.</p>
            <p>thiago.silva@imd.ufrn.br</p>
            <ul className='list-unstyled'>
              {links.map(({ href, label, target }) => (
                <li key={`${href}${label}${target}`}>
                  <a className='font-weight-bold text-decoration-none' href={href} target={target} ref={ref}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='text-center'>
            <p className='my-4'>Living, learning &amp; leveling up one day at a time.</p>
          </div>
        </Section>
        <div style={{ maxWidth: `300px`, margin: `auto` }}>
          <Image />
        </div>
        <Section>
          <div className='text-center'>
            <Link className='text-decoration-none' to='/page-2'>Go to page 2</Link><br />
            <Link className='text-decoration-none' to='/using-typescript'>Go to Using TypeScript</Link>
          </div>
        </Section>
        <Section>
          <Repos />
        </Section>
      </Layout>
    </React.Fragment>
  )
}

export default IndexPage
