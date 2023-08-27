import { Card, Form, Button, FloatingLabel } from 'react-bootstrap';
import React, { useState } from 'react';
import ConfirmedBooking from './ConfirmedBooking';

export default function BookingForm({ availableTimes, dispatchTimes }) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');
    const [modalShow, setModalShow] = useState(false);

    const handleDateChange = (e) => {
        dispatchTimes();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setModalShow(true);
    };

    return (
        <Card className='d-flex flex-row rounded w-100 p-4 my-2' >
            <Card.Img src='../../src/assets/restauranfood.jpg' className='object-fit-cover' style={{ maxHeight: '75vh', maxWidth: '35vw' }} />
            <Card.Body>
                <Card.Title as='h1'>Make a Reservation</Card.Title>
                <Form className='d-flex flex-column justify-content-between position-relative font-karla'>
                    <FloatingLabel htmlFor='date' label='Choose date' className='m-2'>
                        <Form.Control type='date' id='date' placeholder='Choose date' value={date} onChange={(e) => setDate(e.target.value)} />
                    </FloatingLabel>
                    <FloatingLabel htmlFor='time' label='Choose time' className='m-2'>
                        <Form.Select id='res-time' value={time} onChange={(e) => setTime(e.target.value)}>
                            <option disabled>Choose time</option>
                            {availableTimes.map((availableTime, index) => (
                                <option key={index}>{availableTime}</option>
                            ))}
                        </Form.Select>
                    </FloatingLabel>
                    <FloatingLabel htmlFor='guests' label='Number of guests' className='m-2'>
                        <Form.Control type='number' placeholder='Number of guests' value={guests} onChange={(e) => setGuests(e.target.value)} />
                    </FloatingLabel>
                    <FloatingLabel htmlFor='occasion' label='occasion' className='m-2'>
                        <Form.Select id='occasion' value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                            <option disabled>occasion</option>
                            <option>None</option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </Form.Select>
                    </FloatingLabel>
                    <Button variant='warning' type='submit' className='m-2' onClick={handleSubmit}>Make Your Reservation</Button>
                </Form>
            </Card.Body>
            <ConfirmedBooking show={modalShow} onHide={() => setModalShow(false)} date={date} time={time} guests={guests} occasion={occasion} />
        </Card>
    )
}