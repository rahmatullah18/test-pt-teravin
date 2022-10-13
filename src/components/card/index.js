import React from 'react'
import CardHeader from './CardHeader'

export default function Card({ children, title }) {
  return (
    <div className='relative shadow-md bg-indigo-600 p-2 text-white rounded-md'>
      {/* card header */}
      <CardHeader title={title} />
      <div>
        {children}
      </div>
    </div>
  )
}
