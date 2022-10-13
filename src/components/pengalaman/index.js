import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonSubmit from '../form/ButtonSubmit'
import Input from '../form/Input'
import Label from '../form/Label'
import Select from '../form/Select'
import Textarea from '../form/Textarea'
import Header from '../Header'
import Modal from '../Modal'
import AddExperience from './AddExperience'
import { pekerjaanHeader, dataTypeWork } from './data'
import ViewPengalaman from './ViewPengalaman'

export default function PengalamanComponent() {
  const [position, setPosition] = useState('')
  const [workType, setWorkType] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [location, setLocation] = useState('')
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
      position,
      workType,
      companyName,
      location,
      startDate,
      endDate,
      desc
    }
    // cek data pengalaman jika ada maka ambil nilai jika tidak ada maka set jadi array kosong
    const pengalaman = profile.pengalaman ? profile.pengalaman : []
    // buat data profile baru 
    const newProfile = { ...profile, pengalaman: [...pengalaman] }
    // push formdata ke variabl new profile
    newProfile?.pengalaman.push(formData)

    // set data baru to localstorage
    localStorage.setItem('profile', JSON.stringify(newProfile))

    // clear value
    setPosition('')
    setWorkType('')
    setCompanyName()
    setLocation()
    setStartDate('')
    setEndDate('')
    setDesc('')
    // alert
    alert('Data Pengalaman Berhasil Di Tambahkan')
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
      <Header header={pekerjaanHeader} />
      <AddExperience showModal={showModal} setShowModal={setShowModal} />
      {profile?.pengalaman?.length > 0 ? <ViewPengalaman profile={profile} /> :
        <div>
          TIdak ada
        </div>
      }
      {
        showModal ?
          <Modal showModal={showModal} setShowModal={setShowModal}>
            <form id='form' className='space-y-2' onSubmit={onSubmit}>
              <div>
                <Label>Posisi</Label>
                <Input value={position} hookFunction={setPosition} type={'text'} />
              </div>
              <div>
                <Label>Jenis Pekerjaan</Label>
                <Select optionValue={dataTypeWork} value={workType} setValue={setWorkType} />
              </div>
              <div>
                <Label>Nama Perusahaan</Label>
                <Input value={companyName} hookFunction={setCompanyName} type={'text'} />
              </div>
              <div>
                <Label>Lokasi</Label>
                <Input value={location} hookFunction={setLocation} type={'text'} />
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
          </Modal> : null
      }
    </div>
  )
}
