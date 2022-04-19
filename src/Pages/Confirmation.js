import Header from '../component/header'
import React from 'react'

function Confirmation() {
  return (
    <div>
      <div className='govuk-header__container govuk-width-container'>
        <Header />
        <div class='govuk-panel govuk-panel--confirmation'>
          <h1 class='govuk-panel__title'>Application complete</h1>
          <div class='govuk-panel__body'>
            Your reference number <br />
            <strong>HDJ2123F</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Confirmation
