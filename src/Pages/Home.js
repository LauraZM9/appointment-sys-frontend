import React from 'react'
import Header from '../component/header'
import { Button, ButtonArrow, Footer, TopNav, H2, Paragraph, UnorderedList, ListItem } from 'govuk-react'
import { useNavigate } from 'react-router-dom'
import ChooseService from './ChooseService'

function Home() {
  const navigate = useNavigate()
  navigate('/ChooseService')
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

        <Button onClick={navigate} icon={<ButtonArrow />}>
          Start now
        </Button>
      </div>
    </div>
  )
}

export default Home
