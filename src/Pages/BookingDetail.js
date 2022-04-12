import React, {useState} from "react"
import { InputField,Link } from 'govuk-react'
import { Button} from 'govuk-react'
import Header from "../component/header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DatePicker from 'sassy-datepicker';

// const baseURL = " "
function BookingDetail({name, setName, council, setCouncilName, email, setEmail, job, setJob,phoneNum, setPhoneNumber,Date,setDate}) { 
  // const [name, setName] = useState('');
  // const [council, setCouncilName] = useState('');
  // const [email, setEmail] = useState('');
  // const [job, setJob] = useState('');
  // const [phoneNum, setPhoneNumber] = useState('');

  const navigate = useNavigate();
  const onChange = (date) => {
    console.log(date.toString());
    setDate(date.toString());
  };
 
  
  const handleConfirm =  async (e) => {
      e.preventDefault();
   
      const bookingData = {name,council,email,job,phoneNum,Date};
      navigate('/Summary', bookingData)
      console.log(bookingData);
      axios
      .post("https://localhost:5000/api/bookingdetail", bookingData)
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
      value={name}
      onChange={(e) => setName(e.target.value)}
      >
       Full name
      </InputField>
      <InputField
      value={council}
      onChange={(e) => setCouncilName(e.target.value)}
      >
       Council
      </InputField> 
      <InputField
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      >
        Email
      </InputField> 
      <InputField 
      value={job}
      onChange={(e) => setJob(e.target.value)}
      >
        Job title
      </InputField> 
      <InputField
      value={phoneNum}
      onChange={(e) => setPhoneNumber(e.target.value)}
      >
        Phone number
      </InputField> 

     <h2> Select a date </h2>
     <DatePicker onChange={onChange} />
     <h3>{Date}</h3> 
     

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