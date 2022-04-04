import React from "react"
import { InputField,Link } from 'govuk-react'
import { Button} from 'govuk-react'
import Header from "../component/header";
function Council() { 
return (
  <div className= "govuk-header__container govuk-width-container">
  <Header />
      <h1>Booking Details </h1>
      <InputField>
       Full name
      </InputField>
      <InputField>
       Council
      </InputField> 
      <InputField >
        Email
      </InputField> 
<Button>
        Continue
</Button>  
<Link href="test">
  Back
</Link>
</div>
  );

}
  
  export default Council;