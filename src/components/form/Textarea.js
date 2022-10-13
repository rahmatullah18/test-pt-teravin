import React from 'react'

export default function Textarea({ value, hookFunction }) {
  return (
    <textarea value={value} onChange={(e) => hookFunction(e.target.value)} className='border h-28 w-full shadow-md p-2 rounded-sm text-lg focus:outline-none' required></textarea>
  )
}
