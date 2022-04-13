import { Button } from 'govuk-react';
import React from 'react';
import Header from '../component/header';
import axios from 'axios';

const Summary = ({name, council,  email,  job, phone,Date }) => {

    const handleConfirm =  async (e) => {

        e.preventDefault();
        const bookingData = JSON.stringify({ Name : name,
            Council: council,
            Email : email,
            Job : job,
            Phone: phone,
            Date : Date
         });
        console.log(bookingData);
        axios.post('https://appointment-sys-api.herokuapp.com/booking', bookingData, {
        headers: {
         // Overwrite Axios's automatically set Content-Type
        'Content-Type': 'application/json'
         }
        }).then((response) => {
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
        <div>
        <h1>Your Booking Summary</h1>
        <p>Name: {name}</p>
        <p>Council: {council}</p>
        <p>Job: {job}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Date : {Date}</p>
      
        </div>

        <Button onClick={handleConfirm}>
         Confirm
        </Button>
        </div>
    );
};

export default Summary;