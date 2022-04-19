import { Button, ButtonArrow, Select, Link, BackLink, Heading } from 'govuk-react'
import React from 'react'
import Header from '../component/header'
import { useNavigate } from 'react-router-dom'

function ChooseService() {
  const navigate = useNavigate()

  // const navigateBack = useNavigate()
  const onClickHandler = () => navigate(`/Home`)

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
        </Select>
      </div>
      <p></p>
      <div>
        <Button onClick={onClickHandler}>Continue</Button>
      </div>
    </div>
  )
}

export default ChooseService
