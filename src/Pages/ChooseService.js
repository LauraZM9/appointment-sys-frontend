import { Button, ButtonArrow, Select, Link, BackLink, Heading } from 'govuk-react'
import React from 'react'
import Header from '../component/header'
import { useNavigate } from 'react-router-dom'

function ChooseService() {
  const navigate = useNavigate()

  // const navigateBack = useNavigate()
  const onClickHandler = () => navigate(`/BookingDetail`)

  return (
    <div className='govuk-header__container govuk-width-container'>
      <Header />
      <div>
        <Heading size='MEDIUM'>Choose service to book</Heading>
        <Select
          input={{
            name: 'group1',
          }}
        >
          <option value='0'>Strategy Advice Service</option>
          <option value='1'>Test 1</option>
          <option value='2'>Test 2</option>
        </Select>
      </div>
      <p></p>
      <div>
        <Button onClick={onClickHandler}>Continue</Button>
      </div>
      <a href='http://localhost:3000/' class='govuk-back-link'>
        Back
      </a>
    </div>
  )
}

export default ChooseService
