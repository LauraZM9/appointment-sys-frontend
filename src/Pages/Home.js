import React from "react"
import Header from "../component/header";
import { Button,ButtonArrow } from 'govuk-react'
import { useNavigate } from 'react-router-dom'
import ChooseService from "./ChooseService";
function Home() { 
  const navigate = useNavigate();
  navigate('/ChooseService')
return (
    <div className= "govuk-header__container govuk-width-container">
      <Header />
      <h1>Strategy and Advice </h1>
      <p> Use this service to:</p>
      <ul>
      <li>get strategic advice for your council</li>
      <li>get information from one of our strategy staff </li>
      <li>book an appoinment</li>
      
      </ul>
      <p>Click below to book an appointment with our strategy staff</p>
      <Button onClick={navigate} icon={<ButtonArrow /> } >
        Start now
      </Button>
      </div>
    );
  }
  
  export default Home;