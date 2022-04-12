import React from 'react';
import Header from '../component/header';

const Summary = ({name, council,  email,  job, phoneNum,Date }) => {


    return (
      
        <div className= "govuk-header__container govuk-width-container">
        <Header />
        <div>
        <h1>Your Booking Summary</h1>
        <p>Name: {name}</p>
        <p>Council: {council}</p>
        <p>Job: {job}</p>
        <p>Email: {email}</p>
        <p>Phone: {phoneNum}</p>
        <p>Date : {Date}</p>
      
        </div>
        </div>
    );
};

export default Summary;