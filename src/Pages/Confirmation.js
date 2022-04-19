import Header from '../component/header'
import { Button, Heading, Paragraph } from 'govuk-react'
import React from 'react'

function Confirmation() {
  return (
    <div>
      <div className='govuk-header__container govuk-width-container'>
        <Header />
        <div class='govuk-panel govuk-panel--confirmation'>
          <h1 class='govuk-panel__title'>Application complete</h1>
          <div class='govuk-panel__body'>
            Your reference number <br />
            <strong>HDJ2123F</strong>
          </div>
        </div>
        <Heading size='MEDIUM'>Here's what happens next</Heading>
        <br />
        <Paragraph>Thank you for your booking! We look forward to seeing you soon.</Paragraph>
        <Button>Home</Button>
      </div>
    </div>
  )
}

export default Confirmation
