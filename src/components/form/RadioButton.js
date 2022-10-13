import React from 'react'

export default function RadioButton({ title, value, name, hookFunction }) {
  return (
    <div className='flex items-center space-x-2' id={'radio'}>
      <input name={name} type="radio" value={value} className='w-5 h-5 ' onChange={(e) => hookFunction(e.target.value)} required /> <span>{title}</span>
    </div>
  )
}
