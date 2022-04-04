import React from "react"

function Council() { 
return (
    <div>
      <h1>Booking Details </h1>
      <form>
      <label>Full name:
        <input type="text" />
      </label> <br></br>
      <label>Council:
        <input type="text" />
      </label> <br></br>
      <label>Email Address:
        <input type="text" />
      </label> <br></br>
      </form>

      <button> Continue </button>
      <button> Back</button>
      </div>
    );
  }
  
  export default Council;