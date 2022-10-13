import React from 'react'

export default function Input({ value, hookFunction, type }) {
  return (
    <input type={type} value={value} onChange={(e) => hookFunction(e.target.value)} className='border w-full shadow-md p-2 rounded-sm text-lg focus:outline-none' required />
  )
}
