import Header from '../component/header'
import { Button, Heading, Paragraph, Panel } from 'govuk-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Confirmation() {
  const navigate = useNavigate()
  navigate('/')
  return (
    <div>
      <div className='govuk-header__container govuk-width-container'>
        <Header />
        <Panel title='Application complete'>
          Your reference number
          <br />
          <strong>DHLUC2123F</strong>
        </Panel>
        <Heading size='MEDIUM'>Here's what happens next</Heading>
        <br />
        <Paragraph>Thank you for your booking! We look forward to seeing you soon.</Paragraph>
        <Button onClick={navigate}>Home</Button>
      </div>
    </div>
  )
}

export default Confirmation
