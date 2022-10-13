import React from 'react'

export default function Select({ optionValue, value, setValue }) {
  return (
    <select defaultValue={'default'} onChange={(e) => setValue(e.target.value)} className='border w-full shadow-md p-2 rounded-sm text-sm focus:outline-none'>
      <option value='default' disabled>Silahkan Pilih</option>
      {
        optionValue.map((item, idx) => (
          <option key={idx} value={item.value}>{item.title}</option>
        ))
      }
    </select>
  )
}
