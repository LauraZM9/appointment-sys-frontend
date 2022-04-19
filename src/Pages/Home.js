import React from 'react'
import Header from '../component/header'
import { Button, ButtonArrow, Footer, TopNav, H2, Paragraph, UnorderedList, ListItem } from 'govuk-react'
import { useNavigate } from 'react-router-dom'
import ChooseService from './ChooseService'

function Home() {
  const navigate = useNavigate()
  const onClickHandler = () => navigate(`/BookingDetail`)
  return (
    <div>
      <div className='govuk-header__container govuk-width-container'>
        <Header />
        <H2>Strategy and Advice </H2>
        <Paragraph> Use this service to:</Paragraph>
        <UnorderedList>
          <ListItem>get strategic advice for your council</ListItem>
          <ListItem>get information from one of our strategy staff</ListItem>
          <ListItem>book an appointment </ListItem>
        </UnorderedList>

        <Button onClick={onClickHandler} icon={<ButtonArrow />}>
          Start now
        </Button>
        <p></p>
        <div>
          <a href='http://localhost:3000' class='govuk-back-link'>
            Back
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
