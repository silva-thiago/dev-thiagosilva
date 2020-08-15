import React, { ReactNode } from 'react'

export interface IProps {
  children: ReactNode
}

const Section: React.FC<IProps> = ({ children }) => {
  return (
    <React.Fragment>
      <section className='h-center-alignment'>
        {children}
      </section>
    </React.Fragment>
  )
}

export default Section
