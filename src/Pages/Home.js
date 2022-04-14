import React from "react"
import Header from "../component/header";
import { Button,ButtonArrow } from 'govuk-react'
import { useNavigate } from 'react-router-dom'
import ChooseService from "./ChooseService";


function Home() { 
 const navigate = useNavigate()
 const onClickHandler = () => navigate(`./ChooseService`)
  
return (
    <div className= "govuk-header__container govuk-width-container">
      <Header />
      <h1>Book an appointment with DHULC </h1>
      <p> Use this service to:</p>
      <ul>
      <li>get advice for your council</li>
      <li>get information from one of our specialist staff </li>
      <li>book an appointment</li>
      
      </ul>
      <p>Click below to book an appointment with our strategy staff</p>
      <Button onClick={onClickHandler} icon={<ButtonArrow /> } >
        Start now
      </Button>
      </div>
    );
  }
  
  export default Home;