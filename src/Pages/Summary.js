import { Button, Heading, Table, CellHeader } from 'govuk-react'
import React from 'react'
import Header from '../component/header'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Summary = ({ name, council, email, job, phone, Date }) => {
  const navigate = useNavigate()

  const handleConfirm = async (e) => {
    e.preventDefault()
    navigate('/Confirmation')
    const bookingData = JSON.stringify({ Name: name, Council: council, Email: email, Job: job, Phone: phone, Date: Date })
    console.log(bookingData)
    axios
      .post('https://appointment-sys-api.herokuapp.com/booking', bookingData, {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response)
          console.log('server responded')
        } else if (error.request) {
          console.log('network error')
        } else {
          console.log(error)
        }
      })
  }

  return (
    <div className='govuk-header__container govuk-width-container'>
      <Header />
      <div>
        <Heading size='MEDIUM'>Your Booking Summary</Heading>

        <Table>
          <Table.Row>
            <Table.Cell>Name</Table.Cell>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>
              <a class='govuk-link' href='#'>
                change
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Council: </Table.Cell>
            <Table.Cell>{council}</Table.Cell>
            <Table.Cell>
              <a class='govuk-link' href='#'>
                change
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Job: </Table.Cell>
            <Table.Cell>{job}</Table.Cell>
            <Table.Cell>
              <a class='govuk-link' href='#'>
                change
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Email: </Table.Cell>
            <Table.Cell>{email}</Table.Cell>
            <Table.Cell>
              <a class='govuk-link' href='#'>
                change
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Phone: </Table.Cell>
            <Table.Cell>{phone}</Table.Cell>
            <Table.Cell>
              <a class='govuk-link' href='#'>
                change
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell> Date: </Table.Cell>
            <Table.Cell>{Date}</Table.Cell>
            <Table.Cell>
              <a class='govuk-link' href='#'>
                change
              </a>
            </Table.Cell>
          </Table.Row>
        </Table>
      </div>

      <Button onClick={handleConfirm}>Confirm</Button>
      <div>
        <a href='http://localhost:3000/BookingDetail' class='govuk-back-link'>
          Back
        </a>
      </div>
    </div>
  )
}

export default Summary
