import React from 'react'

export default function Header({ header }) {
  return (
    <div className='border-b border-gray-700 py-5'>
      <div className='flex flex-col place-content-center justify-center'>
        <h1 className='text-xl font-bold text-gray-700'>{header?.title}</h1>
        <p>{header?.desc}</p>
        <div></div>
      </div>
    </div>
  )
}
