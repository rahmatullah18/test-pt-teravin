import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../card'
import LinkNext from '../Link'

export default function ViewPengalaman({ profile }) {
  const navigate = useNavigate()
  const experiences = profile?.pengalaman
  const handleDelete = (e, item) => {
    const exp = experiences.filter(element => element === item)[0]
    const index = experiences.indexOf(exp)
    // jika array ditemukan
    if (index > -1) {
      experiences.splice(index, 1);
    }
    // tampung nilai pada array newProfile
    const newProfile = { ...profile, pengalaman: [...experiences] }
    // tambahkn nilai baru ke localstorage
    localStorage.setItem('profile', JSON.stringify(newProfile))
    // dom menghapus element card yang terpilih
    e.parentElement.parentElement.remove()
  }

  const handleDetail = (id) => {
    navigate(`/pengalaman/${id}`)
  }

  return (
    <div className='space-y-2 flex flex-col'>
      {experiences.map((item, idx) => (
        <div key={idx} onClick={(e) => handleDetail(item.id)} className='cursor-pointer'>
          <Card key={idx} title={item.position}>
            <div>{item.startDate} - {item.endDate}</div>
            <div className='flex items-center justify-between'>
              <span>{item.companyName}</span>
              <span>{item.location}</span>
            </div>
            <button onClick={(e) => handleDelete(e.target, item)} className='absolute font-bold top-2 right-2 rounded-full text-white w-7 h-7 shadow-xl bg-red-600 hover:bg-red-400'>X</button>
          </Card>
        </div>
      ))}
      <LinkNext pathname={'/keahlian'} />
    </div>
  )
}
