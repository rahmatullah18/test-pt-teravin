import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Container from '../components/Container'
import ListItem from '../components/ListItem'

export default function DetailPendidikan() {
  const [pendidikan, setPendidikan] = useState({})
  const { id } = useParams()
  useEffect(() => {
    // ambil data profile dari localstorage
    const getProfile = JSON.parse(localStorage.getItem('profile'))
    const arrPendidikan = getProfile?.pendidikan
    // ambil nilai berdasarkan id yg di tentukan
    const newValue = arrPendidikan.find(item => item.id.toString() === id)
    setPendidikan(newValue)
  }, [])
  return (
    <Container>
      <div className='space-y-4'>
        <ListItem label={'Universitas'} text={pendidikan.university} />
        <ListItem label={'Gelar'} text={pendidikan.major} />
        <ListItem label={'Jurusan'} text={pendidikan.degree} />
        <ListItem label={'Tanggal Mulai'} text={pendidikan.startDate} />
        <ListItem label={'Tanggal Akhir'} text={pendidikan.endDate} />
        <ListItem label={'Desc'} text={pendidikan.desc} />
        <div className='text-blue-600 underline'>
          <Link to={'/pendidikan'}>Kembali</Link>
        </div>
      </div>
    </Container>
  )
}
