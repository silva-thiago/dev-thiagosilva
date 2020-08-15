import React from 'react'
import { Link } from 'gatsby'

import { Landing, Section, Image, SEO, Repos } from '../components'

const links = [
  { href: 'https://t.me/silvathiago', label: 't.me/silvathiago', target: '_blank' },
]

const IndexPage = () => {
  return (
    <React.Fragment>
      <Landing>
        <SEO title='Home' />
        <Section>
          <div className='text-center'>
            <h2>Hi, I am learning fullstack development</h2>
            <p>I design and code beautifully simple things.</p>
            <p>thiago.silva@imd.ufrn.br</p>
            <ul>
              {links.map(({ href, label, target }) => (
                <li key={`${href}${label}${target}`}>
                  <a href={href} target={target} rel='noopener noreferrer'>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='text-center'>
            <p>Living, learning &amp; leveling up one day at a time.</p>
          </div>
        </Section>
        {/* <div style={{ maxWidth: `300px`, margin: `auto` }}>
          <Image />
        </div> */}
        {/* <Section>
          <div className='text-center'>
            <Link to='/page-2'>Go to page 2</Link><br />
            <Link to='/using-typescript'>Go to Using TypeScript</Link>
          </div>
        </Section> */}
        <Section>
          <Repos />
        </Section>
      </Landing>
    </React.Fragment>
  )
}

export default IndexPage
