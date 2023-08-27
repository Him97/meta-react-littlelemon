import React, { useReducer } from 'react';
import { Container } from "react-bootstrap";
import NavBar from "../../components/NavBar";
import BookingForm from "./BookingForm";
import Footer from "../../components/Footer";

export default function BookingPage() {
    const initializeTimes = () => [
        "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
    ];

    const updateTimes = () => {
        // Logic to update availableTimes based on selected date
        return initializeTimes(); // For now, just return initial times
    };

    const [availableTimes, dispatchTimes] = useReducer(updateTimes, initializeTimes());

    return (
        <Container className='vw-100 position-relative'>
            <NavBar />
            <BookingForm availableTimes={availableTimes} dispatchTimes={dispatchTimes} />
            <Footer />
        </Container>
    )
}