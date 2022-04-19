import { Button,ButtonArrow, Select,Link, BackLink  } from 'govuk-react'
import React from 'react'
import Header from '../component/header';
import { useNavigate } from 'react-router-dom'

function ChooseService() {
    const navigate = useNavigate();

    // const navigateBack = useNavigate()
    const onClickHandler = () => navigate(`/BookingDetail`)

    return (    
      <div className= "govuk-header__container govuk-width-container">
        <Header/>
        <h2>Choose service to book</h2>
        <div>
        <Select
        input={{
         name: 'group1',
         }}
  // label="Choose from service"
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
  </div>
        <p></p>
        <div>        <Button onClick = {onClickHandler} >
        Continue
        </Button>        
      </div>
<a href="http://localhost:3000/" class="govuk-back-link">Back</a>
        {/* <BackLink
          onClick={onClickHandler}>
  Back
</BackLink> */}
      </div>
      
    )
}

export default ChooseService; 