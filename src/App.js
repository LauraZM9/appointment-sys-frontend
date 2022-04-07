import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home";
import Council from "./Pages/Council"
import ChooseService from "./Pages/ChooseService";
import BookingDetail from "./Pages/BookingDetail";
function App() {
  return (
 
      <Router>
          <Routes>
              <Route path="/" element ={<Home />} />
              <Route path="/council" element ={<Council />} />
              <Route path="/ChooseService" element ={<ChooseService />} />
              <Route path="/BookingDetail" element ={<BookingDetail />} />
          </Routes>
      </Router>

  );
}

export default App;
