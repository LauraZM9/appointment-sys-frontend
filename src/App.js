import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home";
import Council from "./Pages/Council"

function App() {
  return (
 
      <Router>
          <Routes>
              <Route path="/" element ={<Home />} />
              <Route path="/council" element ={<Council />} />
              
          </Routes>
      </Router>

  );
}

export default App;
