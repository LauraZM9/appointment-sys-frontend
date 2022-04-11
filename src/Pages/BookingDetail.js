import React, {useState} from "react"
import { InputField,Link } from 'govuk-react'
import { Button} from 'govuk-react'
import Header from "../component/header";
import axios from "axios";

const baseURL = " "
function BookingDetail() { 
  const [name, setName] = useState('');
  const [council, setCouncilName] = useState('');
  const [email, setEmail] = useState('');
  const [job, setJob] = useState('');
  const [phoneNum, setPhoneNumber] = useState('');
  
  const handleConfirm = (e) => {
      e.preventDefault();
      // const bookingData = {name,council,email,job,phoneNum};
      // console.log(bookingData);
      axios.get('https://localhost:7118/booking/3') 
        .then((response) => 
        { 
          console.log(response.data); 
          console.log(response.status); 
          console.log(response.statusText); 
          console.log(response.headers);
          console.log(response.config); 
        });

  };

    // const handleConfirm = (e) => {
  //     e.preventDefault();
  //     const bookingData = {name,council,email,job,phoneNum};
  //     console.log(bookingData);
  //     axios
  //     .post("https://localhost:5000/api/bookingdetail", bookingData)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       if (error.response) {
  //         console.log(error.response);
  //         console.log("server responded");
  //       } else if (error.request) {
  //         console.log("network error");
  //       } else {
  //         console.log(error);
  //       }
  //     });

  // };

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