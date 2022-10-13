import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../card'
import CardDetail from '../card/CardDetail'
import LinkNext from '../Link'

export default function ViewEducation({ profile }) {
  const navigate = useNavigate()
  const educations = profile?.pendidikan
  const handleDelete = (e, item) => {
    const edu = educations.filter(element => element === item)[0]
    const index = educations.indexOf(edu)
    // jika array ditemukan
    if (index > -1) {
      educations.splice(index, 1);
    }
    // tampung nilai pada array newProfile
    const newProfile = { ...profile, pendidikan: [...educations] }
    // tambahkn nilai baru ke localstorage
    localStorage.setItem('profile', JSON.stringify(newProfile))
    // dom menghapus element card yang terpilih
    e.parentElement.parentElement.remove()
  }
  const handleDetail = (id) => {
    navigate(`/pendidikan/${id}`)
  }


  return (
    <div className='space-y-2 flex flex-col'>
      {educations.map((item, idx) => (
        <div key={idx} onClick={(e) => handleDetail(item.id)} className='cursor-pointer'>
          <Card title={item.university}>
            <div>{item.startDate} - {item.endDate}</div>
            <button onClick={(e) => handleDelete(e.target, item)} className='absolute font-bold top-2 right-2 rounded-full text-white w-7 h-7 shadow-xl bg-red-600 hover:bg-red-400'>X</button>
          </Card>
        </div>
      ))}
      <LinkNext pathname={'/pengalaman'} />
    </div>
  )
}
