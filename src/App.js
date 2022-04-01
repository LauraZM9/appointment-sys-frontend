import './App.css';
import './styles.scss'
import { Button } from 'govuk-react'
function App() {
  return (
    <div className="App">
      <div class="govuk-form-group">
          <h1 class="govuk-label-wrapper"><label class="govuk-label govuk-label--l" for="event-name">
            This is a test to check the style.
            </label>
          </h1>   
      </div>   
      <input class="govuk-input" id="event-name" name="event-name" type="text"/>
      <Button>Click Me!</Button> 
</div>
  );
}

export default App;
