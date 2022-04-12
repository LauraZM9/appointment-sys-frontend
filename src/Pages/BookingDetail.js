import React, {useState} from "react"
import { InputField,Link } from 'govuk-react'
import { Button} from 'govuk-react'
import Header from "../component/header";
import axios from "axios";

const baseURL = " "
function BookingDetail() { 
  const [Name, setName] = useState('');
  const [Council, setCouncilName] = useState('');
  const [Email, setEmail] = useState('');
  const [JobTitle, setJob] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  
  const handleConfirm = (e) => {
      e.preventDefault();
      const bookingData = {Name, Council, Email, JobTitle, PhoneNumber};
      console.log(bookingData);
      axios
      .post("https://appointment-sys-api.herokuapp.com/booking", bookingData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log("server responded");
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });

  };

return (
  <div className= "govuk-header__container govuk-width-container">
  <Header />
      <h1>Booking Details </h1>
      <InputField
       value={Name}
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
      value={PhoneNumber}
      onChange={(e) => setPhoneNumber(e.target.value)}
      >
        Phone number
      </InputField> 
<Button onClick={handleConfirm}>
        Continue
</Button>  
<Link href="test">
  Back
</Link>
</div>
  );

}
  
  export default BookingDetail;