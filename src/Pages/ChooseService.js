import { Button,ButtonArrow, Select,Link  } from 'govuk-react'
import React from 'react'
import Header from '../component/header';
import { useNavigate } from 'react-router-dom'

function ChooseService() {
    const navigate = useNavigate();
    navigate('/BookingDetail')
    
    return (    
      <div className= "govuk-header__container govuk-width-container">
        <Header/>
        <Select
  input={{
  name: 'group1',
  }}
  label="Choose from service"
>
  <option value="0">
    Strategy Advice Service
  </option>
  <option value="1">
    Test 1
  </option>
  <option value="2">
    Test 2
  </option>
</Select>

        <Button onClick = {navigate}>
        Continue
        </Button>
        <Link href="src/Pages/Home.js">
        Back
       </Link>
      </div>
    )
}

export default ChooseService; 