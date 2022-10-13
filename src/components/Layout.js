import React from 'react'
import Navbar from './navbar/Navbar'

export default function Layout({ children }) {
  return (
    // Pembungkus setiap halaman
    <div className='space-y-3 font-poppins h-screen bg-white md:mx-40'>
      <Navbar />
      <div>
        {children}
      </div>
    </div>
  )
}
