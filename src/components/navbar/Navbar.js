import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { dataNavbar } from './data'

export default function Navbar() {
  const location = useLocation();
  const pathname = location.pathname
  return (
    <div className='w-full  bg-white'>
      <div className='mx-2 py-2 flex justify-between items-center md:justify-evenly'>
        {dataNavbar.map((item) => (
          <Link to={item.url} className={`text-gray-500 text-lg px-1`} key={item.id}>
            <div className={`${pathname === item.url ? 'ease-in duration-300 border-b-2 border-indigo-600 py-1 text-indigo-500 font-semibold' : ''}`}>
              {item.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
