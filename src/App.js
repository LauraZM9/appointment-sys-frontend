import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home";
import Council from "./Pages/Council"
import ChooseService from "./Pages/ChooseService";
import BookingDetail from "./Pages/BookingDetail";
import Slot from "./Pages/Slot";
import Summary from "./Pages/Summary";
import React, {useState} from "react"

function App() {
    const [name, setName] = useState('');
    const [council, setCouncilName] = useState('');
    const [email, setEmail] = useState('');
    const [job, setJob] = useState('');
    const [phoneNum, setPhoneNumber] = useState('');
    const [Date, setDate] =useState('');
  return (
 
      <Router>
          <Routes>
              <Route path="/" element ={<Home />} />
              <Route path="/council" element ={<Council />} />
              <Route path="/ChooseService" element ={<ChooseService />} />
              <Route path="/BookingDetail" element ={<BookingDetail name={name} setName={setName} council={council} setCouncilName={setCouncilName} email={email} setEmail={setEmail} job={job} setJob={setJob}
              phone={phoneNum} setPhone={setPhoneNumber} Date={Date} setDate={setDate} />} />
              <Route path="/Summary" element ={<Summary  name={name} council={council} email={email} job={job}
              phone={phoneNum} Date={Date}/>} />
              <Route path="/Slot" element ={<Slot/>} />
          </Routes>
      </Router>

  );
}

export default App;
