import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonSubmit from '../form/ButtonSubmit'
import Input from '../form/Input'
import Label from '../form/Label'
import Textarea from '../form/Textarea'
import Header from '../Header'
import Modal from '../Modal'
import AddEducation from './AddEducation'
import { pendidikanHeader } from './data'
import ViewEducation from './ViewEducation'

export default function PendidikanComponent() {
  const [university, setUniversity] = useState('')
  const [degree, setDegree] = useState('')
  const [major, setMajor] = useState('')
  const [finalScore, setFinalScore] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [desc, setDesc] = useState('')
  const [profile, setProfile] = useState({})

  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const onSubmit = (e) => {
    setLoading(true)
    e.preventDefault()
    // tampung semua nilai form ke variable formdata
    const id = Math.random()
    const formData = {
      id: id,
      university,
      degree,
      major,
      finalScore,
      startDate,
      endDate,
      desc
    }
    // cek data pendidikan jika ada maka ambil nilai jika tidak ada maka set jadi array kosong
    const pendidikan = profile.pendidikan ? profile.pendidikan : []
    // buat data profile baru 
    const newProfile = { ...profile, pendidikan: [...pendidikan] }
    // push formdata ke variabl new profile
    newProfile?.pendidikan.push(formData)

    // set data baru to localstorage
    localStorage.setItem('profile', JSON.stringify(newProfile))

    // clear value
    setUniversity('')
    setDegree('')
    setMajor('')
    setFinalScore('')
    setStartDate('')
    setEndDate('')
    setDesc('')
    // alert
    alert('Data Pendidikan Berhasil Di Tambahkan')
    setShowModal(false)
  }

  useEffect(() => {
    setLoading(true)
    // ambil data profile dari localstorage
    const getProfile = JSON.parse(localStorage.getItem('profile'))
    // set Ke Profile
    setProfile(getProfile)
    setLoading(false)
  }, [loading])

  const redirectBack = () => {
    const profile = localStorage.getItem('profile')
    if (profile === null) {
      navigate('/')
      alert('Harap lengkapi personal info terlebih dahulu')
    }
  }

  useEffect(() => {
    redirectBack()
  }, [profile])

  return (
    <div className='space-y-3'>
      <Header header={pendidikanHeader} />
      <AddEducation showModal={showModal} setShowModal={setShowModal} />
      {profile?.pendidikan?.length > 0 ?
        <ViewEducation profile={profile} />
        :
        <div className='text-center'>Tidak Ada Data</div>}
      {showModal ?
        <Modal showModal={showModal} setShowModal={setShowModal} >
          <form id='form' className='space-y-2' onSubmit={onSubmit}>
            <div>
              <Label>Universitas</Label>
              <Input value={university} hookFunction={setUniversity} type={'text'} />
            </div>
            <div>
              <Label>Gelar</Label>
              <Input value={degree} hookFunction={setDegree} type={'text'} />
            </div>
            <div>
              <Label>Jurusan</Label>
              <Input value={major} hookFunction={setMajor} type={'text'} />
            </div>
            <div>
              <Label>Nilai Akhir</Label>
              <Input value={finalScore} hookFunction={setFinalScore} type={'number'} />
            </div>
            <div>
              <Label>Tanggal Mulai</Label>
              <Input value={startDate} hookFunction={setStartDate} type={'date'} />
            </div>
            <div>
              <Label>Tanggal Akhir</Label>
              <Input value={endDate} hookFunction={setEndDate} type={'date'} />
            </div>
            <div>
              <Label>Deskripsi</Label>
              <Textarea value={desc} hookFunction={setDesc} />
            </div>
            <div>
              <ButtonSubmit>Save</ButtonSubmit>
            </div>
          </form>
        </Modal>
        :
        null
      }
    </div>
  )
}
