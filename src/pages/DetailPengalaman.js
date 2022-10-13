import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Container from '../components/Container'
import ListItem from '../components/ListItem'

export default function DetailPengalaman() {
  const [pengalaman, setPengalaman] = useState({})
  const { id } = useParams()
  useEffect(() => {
    // ambil data profile dari localstorage
    const getProfile = JSON.parse(localStorage.getItem('profile'))
    const arrPengalaman = getProfile?.pengalaman
    // ambil nilai berdasarkan dari id yg di tentukan
    const newValue = arrPengalaman.find(item => item.id.toString() === id)
    setPengalaman(newValue)
  }, [])
  return (
    <Container>
      <div className='space-y-4'>
        <ListItem label={'Posisi'} text={pengalaman.position} />
        <ListItem label={'Jenis Pekarjaan'} text={pengalaman.workType} />
        <ListItem label={'Nama Perusahaan'} text={pengalaman.companyName} />
        <ListItem label={'Lokasi'} text={pengalaman.location} />
        <ListItem label={'Tanggal Mulai'} text={pengalaman.startDate} />
        <ListItem label={'Tanggal Akhir'} text={pengalaman.endDate} />
        <div className='text-blue-600 underline'>
          <Link to={'/pengalaman'}>Kembali</Link>
        </div>
      </div>
    </Container>
  )
}
