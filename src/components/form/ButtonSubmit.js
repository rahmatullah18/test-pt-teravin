import React from 'react'

export default function ButtonSubmit({ children }) {
  return (
    <button className='w-full mt-2 border p-2 rounded-md bg-indigo-600 text-white text-lg font-bold hover:bg-indigo-800' type='submit' name='button'>
      {children}
    </button>
  )
}
