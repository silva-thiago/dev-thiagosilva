import React from 'react'

const links = [
  { href: 'https://github.com/silva-thiago', label: 'GitHub', target: '_blank' },
  { href: 'https://www.linkedin.com/in/tjlsilva/', label: 'LinkedIn', target: '_blank' },
]

const Header = () => {
  return (
    <React.Fragment>
      <header>
        <div className='container'>
          <h1>Hi, I am learning fullstack development</h1>
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
          <p>Living, learning &amp; leveling up one day at a time.</p>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Header
