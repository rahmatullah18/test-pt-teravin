import React from 'react'
import Label from './form/Label'

export default function ListItem({ label, text }) {
  return (
    <div className='flex items-center space-x-3 border-b-2'>
      <Label>{label}</Label>
      <div>{text}</div>
    </div>
  )
}
