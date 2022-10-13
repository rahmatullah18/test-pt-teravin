import React from 'react'
import { Link } from 'react-router-dom';

export default function LinkNext({ pathname }) {
  return (
    <div className='flex justify-end'>
      <Link to={pathname}>
        <span className=' text-end mt-5 text-lg uppercase text-blue-800 underline'>Lanjut</span>
      </Link>
    </div>
  )
}
