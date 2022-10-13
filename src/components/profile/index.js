import React, { useEffect, useRef, useState } from 'react'
import Header from '../Header'
import Input from '../form/Input'
import { profilHeader } from './data'
import Label from '../form/Label'
import Textarea from '../form/Textarea'
import RadioButton from '../form/RadioButton'
import ButtonSubmit from '../form/ButtonSubmit'
import { useNavigate } from 'react-router-dom'
import ListItem from '../ListItem'

export default function Profil() {
  const [nama, setNama] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [gender, setGender] = useState('')
  const [profile, setProfile] = useState('')
  const router = useNavigate()
  const onSubmit = async (e) => {
    e.preventDefault()
    // tampung semua nilai di variable data
    let formData = {
      nama,
      email,
      address,
      gender,
    }

    // set data ke localstorage
    localStorage.setItem('profile', JSON.stringify(formData))

    // alert
    alert(`Data ${formData.nama} Berhasil di Input`)

    // clear form
    setNama('')
    setEmail('')
    setAddress('')
    setGender('')
    const form = document.querySelector('#form')
    form.reset()
    router('/pendidikan')
  }

  useEffect(() => {
    // ambil data profile dari localstorage
    const getProfile = JSON.parse(localStorage.getItem('profile'))
    setProfile(getProfile)
  }, [])

  return (
    <div className='space-y-3'>
      {/* header */}
      <Header header={profilHeader} />
      <form id='form' className='space-y-2' onSubmit={onSubmit}>
        <div>
          <Label>Nama</Label>
          <Input value={nama} hookFunction={setNama} type={'text'} />
        </div>
        <div>
          <Label>Email</Label>
          <Input value={email} hookFunction={setEmail} type={'email'} />
        </div>
        <div>
          <Label>Alamat</Label>
          <Textarea value={address} hookFunction={setAddress} />
        </div>
        <div>
          <Label>Jenis Kelamin</Label>
          <div className='flex space-x-4'>
            <RadioButton value={'Laki-laki'} title={'Laki-laki'} name={'gender'} hookFunction={setGender} />
            <RadioButton value={'Perempuan'} title={'Perempuan'} name={'gender'} hookFunction={setGender} />
          </div>
        </div>
        <div>
          <ButtonSubmit>Next</ButtonSubmit>
        </div>
      </form>
      {
        profile !== '' && profile !== null ?
          <div className='space-y-4'>
            <ListItem label={'Nama'} text={profile.nama} />
            <ListItem label={'Email'} text={profile.email} />
            <ListItem label={'Alamat'} text={profile.address} />
            <ListItem label={'Jenis Kelamin'} text={profile.gender} />
          </div>
          :
          null
      }
    </div>
  )
}
