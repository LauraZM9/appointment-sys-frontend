import React from 'react'
import Header from '../component/header'
import { Button, ButtonArrow, Footer, TopNav } from 'govuk-react'
import { useNavigate } from 'react-router-dom'
import ChooseService from './ChooseService'

function Home() {
  const navigate = useNavigate()
  navigate('/ChooseService')
  return (
    <div>
      <TopNav
        company={
          <TopNav.Anchor href='https://example.com' target='new'>
            <TopNav.IconTitle icon={<img src={require('../assets/images/govuk-logotype-crown.png')} alt='test' />}>GOV.UK</TopNav.IconTitle>
          </TopNav.Anchor>
        }
      />
      <div className='govuk-header__container govuk-width-container'>
        <h1>Strategy and Advice </h1>
        <p> Use this service to:</p>
        <ul>
          <li>get strategic advice for your council</li>
          <li>get information from one of our strategy staff </li>
          <li>book an appoinment</li>
        </ul>
        <p>Click below to book an appointment with our strategy staff</p>
        <Button onClick={navigate} icon={<ButtonArrow />}>
          Start now
        </Button>
        {/* <Footer
          copyright={{
            image: {
              height: 102,
              src: 'static/media/govuk-crest.05968778.png',
              width: 125,
            },
            link: 'https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/',
            text: 'Crown copyright',
          }}
        /> */}
      </div>
    </div>
  )
}

export default Home
