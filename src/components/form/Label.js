import React from 'react'

export default function Label({ children }) {
  return (
    <h3 className='font-semibold text-gray-600 text-lg'>
      {children}:
    </h3>
  )
}
