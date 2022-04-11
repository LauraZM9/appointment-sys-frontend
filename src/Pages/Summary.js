import React from 'react';

const Summary = ({name, setName, council, setCouncilName, email, setEmail, job, setJob, phoneNum, setPhoneNumber}) => {


    return (
        <div>
        <p>name here: {name}</p>
        <p>council: {council}</p>
        <p>job: {job}</p>
        <p>email: {email}</p>
        <p>phone: {phoneNum}</p>
      
        </div>
    );
};

export default Summary;