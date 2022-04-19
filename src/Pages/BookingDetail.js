import React from 'react'
import { Input, InputField, Link, Heading } from 'govuk-react'
import { Button } from 'govuk-react'
import Header from '../component/header'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import DatePicker from 'sassy-datepicker'
import { Calendar } from 'react-calendar'

function BookingDetail({ name, setName, council, setCouncilName, email, setEmail, job, setJob, phone, setPhoneNumber, Date, setDate }) {
  const navigate = useNavigate()
  const onChange = (date) => {
    console.log(date.toString())
    const time = ', 14:00 pm '
    setDate(date.toString().substring(0, 16).concat(time))
  }

  const handleConfirm = async (e) => {
    e.preventDefault()

    const bookingData = { name, council, email, job, phone, Date }
    navigate('/Summary', bookingData)
  }

  return (
    <div className='govuk-header__container govuk-width-container'>
      <Header />
      <Heading size='MEDIUM'>Booking Details </Heading>
      <InputField value={name} onChange={(e) => setName(e.target.value)}>
        Full name
      </InputField>
      <InputField value={council} onChange={(e) => setCouncilName(e.target.value)}>
        Council
      </InputField>
      <InputField value={email} onChange={(e) => setEmail(e.target.value)}>
        Email
      </InputField>
      <InputField value={job} onChange={(e) => setJob(e.target.value)}>
        Job title
      </InputField>
      <InputField value={phone} onChange={(e) => setPhoneNumber(e.target.value)}>
        Phone number
      </InputField>

      <Heading size='SMALL'> Select a date </Heading>
      <DatePicker onChange={onChange} />
      <p></p>
      <Input value={Date} />
      <p></p>

      <Button onClick={handleConfirm}>Continue</Button>
      <p></p>
      <div>
        <a href='http://localhost:3000/ChooseService' class='govuk-back-link'>
          Back
        </a>
      </div>
    </div>
  )
}

export default BookingDetail
