import React from "react"
import { Input, InputField,Link } from 'govuk-react'
import { Button} from 'govuk-react'
import Header from "../component/header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DatePicker from 'sassy-datepicker';
import { Calendar } from "react-calendar";

function BookingDetail({name, setName, council, setCouncilName, email, setEmail, job, setJob, phone, setPhoneNumber,Date,setDate}) { 

  const navigate = useNavigate();
  const onChange = (date) => {
    console.log(date.toString());
    const time = ", 14:00 pm "
    setDate(date.toString().substring(0,16).concat(time));
  };
  
 
  
  const handleConfirm =  async (e) => {
      e.preventDefault();
   
      const bookingData = {name,council,email,job,phone,Date};
      navigate('/Summary', bookingData)
  };

return (
  <div className= "govuk-header__container govuk-width-container">
  <Header />
      <h1>Booking Details </h1>
      <InputField
      value={name}
      onChange={(e) => setName(e.target.value)}
      >
       Full name
      </InputField>
      <InputField
      value={Council}
      onChange={(e) => setCouncilName(e.target.value)}
      >
       Council
      </InputField> 
      <InputField
      value={Email}
      onChange={(e) => setEmail(e.target.value)}
      >
        Email
      </InputField> 
      <InputField 
      value={JobTitle}
      onChange={(e) => setJob(e.target.value)}
      >
        Job title
      </InputField> 
      <InputField
      value={phone}
      onChange={(e) => setPhoneNumber(e.target.value)}
      >
        Phone number
      </InputField> 

     <h2> Select a date </h2>
     <DatePicker onChange={onChange}/>
    <Input value={Date} />
    
 
   <Button onClick={handleConfirm} >
        Continue
  </Button>  
 <Link to="/">
  Back
</Link>
</div>
  );

}
  
  export default BookingDetail;