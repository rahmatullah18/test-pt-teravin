import React from 'react'

export default function AddExperience({ setShowModal, showModal }) {
  return (
    <div className='flex items-center justify-between'>
      <h2 className=''>Tambah Riwayat Pengalaman</h2>
      <button onClick={() => {
        setShowModal(!showModal)
      }} className='text-2xl text-white bg-indigo-600 hover:bg-indigo-800 p-1 rounded-full w-10 h-10'>+</button>
    </div>
  )
}
