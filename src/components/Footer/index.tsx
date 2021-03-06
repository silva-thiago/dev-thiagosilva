import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({ siteAuthor }) => {
  return (
    <React.Fragment>
      <footer className='footer'>
        <div className='container'>
          <span className='text-muted'>
            © {new Date().getFullYear()} <a className='text-decoration-none' href='https://github.com/silva-thiago' target='_blank' rel='noopener noreferrer'>{siteAuthor}</a><br />
          </span>
          <span className='text-muted'>
            <small>
              This page was built with GatsbyJS. The source code can be found by clicking on the link below:<br />
              <a className='text-decoration-none' href='https://github.com/silva-thiago/dev-thiagosilva' target='_blank' rel='noopener noreferrer'>github.com/silva-thiago/dev-thiagosilva</a>
            </small>
          </span>
        </div>
      </footer>
    </React.Fragment>
  )
}

Footer.propTypes = {
  siteAuthor: PropTypes.string,
}

Footer.defaultProps = {
  siteAuthor: ``,
}

export default Footer
