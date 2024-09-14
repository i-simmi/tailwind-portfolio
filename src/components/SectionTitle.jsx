import React from 'react'

const SectionTitle = ({text}) => {
  return (
    <div className='border-b border-grey-200 pb-5'>
      <h2 className="capitalize tracking-wide text-3xl font-medium">{text}</h2>
    </div>
  )
}

export default SectionTitle;
