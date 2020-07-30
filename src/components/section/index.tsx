import React from 'react'

const Section = ({ children }) => {
  return (
    <React.Fragment>
      <section className='h-center-alignment'>
        {children}
      </section>
    </React.Fragment>
  )
}

export default Section
