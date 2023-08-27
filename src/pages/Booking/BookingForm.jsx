import { Card, Form, Button, FloatingLabel } from 'react-bootstrap';
import React, { useState } from 'react';

export default function BookingForm({ availableTimes, dispatchTimes }) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');

    const handleDateChange = (e) => {
        // Update availableTimes using the dispatch function
        dispatchTimes();
        // Other logic...
    };

    const handleSubmit = () => {
        console.log('Form.Selected date:', date);
    };

    return (
        <Card className='d-flex flex-row rounded w-100 p-4 my-2' >
            <Card.Img src='../../src/assets/restauranfood.jpg' className='object-fit-cover' style={{ maxHeight: '75vh', maxWidth: '35vw' }} />
            <Card.Body>
                <Card.Title as='h1'>Make a Reservation</Card.Title>
                <Form className='d-flex flex-column justify-content-between position-relative'>
                    <FloatingLabel htmlFor='date' label='Choose date' className='m-2'>
                        <Form.Control type='date' id='date' placeholder='Choose date' onChange={(e) => setDate(e.target.value)} />
                    </FloatingLabel>
                    <FloatingLabel htmlFor='time' label='Choose time' className='m-2'>
                        <Form.Select id='res-time' onChange={(e) => setTime(e.target.value)}>
                            <option disabled>Choose time</option>
                            {availableTimes.map((availableTime, index) => (
                                <option key={index}>{availableTime}</option>
                            ))}
                        </Form.Select>
                    </FloatingLabel>
                    <FloatingLabel htmlFor='guests' label='Number of guests' className='m-2'>
                        <Form.Control type="number" placeholder="Number of guests" />
                    </FloatingLabel>
                    <FloatingLabel htmlFor='occasion' label='Occasion' className='m-2'>
                        <Form.Select id='occasion' onChange={(e) => setOccasion(e.target.value)}>
                            <option disabled>Occasion</option>
                            <option>None</option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </Form.Select>
                    </FloatingLabel>
                    <Button variant='warning' type='submit' className='m-2' onClick={handleSubmit}>Make Your reservation</Button>
                </Form>
            </Card.Body>
        </Card>
    )
}