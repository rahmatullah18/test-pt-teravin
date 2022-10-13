import React, { useEffect, useState } from 'react'
import ButtonSubmit from '../form/ButtonSubmit'
import Label from '../form/Label'
import Header from '../Header'
import { keahlianHeader } from './data'

export default function KeahlianComponent() {
  const [value, setValue] = useState('')
  const [profile, setProfile] = useState({})
  const [loading, setLoading] = useState(false)

  const onSubmit = (e) => {
    setLoading(true)
    e.preventDefault()
    // jika keahlian tidak ada maka buat empty array
    const keahlian = profile?.keahlian ? profile.keahlian : []
    const newProfile = { ...profile, keahlian: [...keahlian] }

    // push value ke newprofile
    newProfile?.keahlian.push(value)
    // set ke localstorage
    localStorage.setItem('profile', JSON.stringify(newProfile))
    setValue('')
  }

  const handleDelete = (e, item) => {
    setLoading(true)
    const keahlian = profile?.keahlian
    // cari index dari keahlian yg telah di tentukan
    const index = keahlian.indexOf(item)
    // jika index lebih dari -1 maka splice 
    if (index > -1) {
      keahlian.splice(index, 1)
    }
    const newProfile = { ...profile, keahlian: [...keahlian] }
    // set ke  localstorage
    localStorage.setItem('profile', JSON.stringify(newProfile))
  }

  useEffect(() => {
    setLoading(true)
    // ambil data profile dari localstorage
    const getProfile = JSON.parse(localStorage.getItem('profile'))
    // set Ke Profile
    setProfile(getProfile)
    setLoading(false)
  }, [loading])
  return (
    <div className='space-y-3'>
      <Header header={keahlianHeader} />
      {/* multiple select skill */}
      <div className='space-y-2'>
        <form onSubmit={onSubmit}>
          <div className=''>
            <Label>Masukan Keahlian</Label>
            <div className='flex items-center justify-between'>
              <input required value={value} onChange={(e) => setValue(e.target.value)} placeholder='mis:developer' type="text" className='border mt-2 w-full shadow-md p-2 rounded-sm text-lg focus:outline-none' />
              <div>
                <ButtonSubmit>Tambah</ButtonSubmit>
              </div>
            </div>
          </div>
        </form>
        <div className='shadow-lg border p-2 w-full'>
          <div className='flex gap-3 flex-wrap items-center'>
            {profile?.keahlian?.map((item, idx) => (
              <button onClick={(e) => handleDelete(e.target, item)} key={idx} className='relative border-2 border-gray-700 py-1 px-4 rounded-md'>
                <span>{item}</span>
                <div className='absolute bg-red-500 w-5 h-5 -top-1 -right-2 rounded-full text-white text-sm'>x</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
