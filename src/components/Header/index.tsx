import React from 'react'
import PropTypes from 'prop-types'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

interface IProps {
  siteTitle: string,
}

const links = [
  { href: 'https://github.com/silva-thiago', label: 'GitHub', target: '_blank' },
  { href: 'https://www.linkedin.com/in/tjlsilva/', label: 'LinkedIn', target: '_blank' },
]

const Header:React.FC<IProps> = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logotype.png"}) {
        childImageSharp {
          fluid(maxWidth: 30) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <header>
        {/* Fixed navbar */}
        <nav className='nav navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm'>
          <div className='d-flex justify-content-between items-center mb-0'>
            <Link className='navbar-brand' to='/'>
              <Img className='logo' fluid={data.placeholderImage.childImageSharp.fluid} alt='Logotipo' loading='auto' />
              <span className='text-dark'>{siteTitle} Developer_</span>
            </Link>
          </div>
          <ul className='list-unstyled mb-0'>
            {links.map(({ href, label, target }) => (
              <li className='btn-group mx-2' key={`${href}${label}${target}`}>
                <a className='btn btn-outline-dark rounded-pill' href={href} target={target} rel='noopener noreferrer' role='button'>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </React.Fragment>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
