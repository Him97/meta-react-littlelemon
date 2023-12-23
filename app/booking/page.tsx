import * as React from 'react';
import BookingForm from './BookingForm';

export default function BookingPage() {
	const initializeTimes = () => [
		'17:00',
		'18:00',
		'19:00',
		'20:00',
		'21:00',
		'22:00',
	];

	const updateTimes = () => {
		// Logic to update availableTimes based on selected date
		return initializeTimes(); // For now, just return initial times
	};

	const [availableTimes, dispatchTimes] = React.useReducer(
		updateTimes,
		initializeTimes()
	);

	return (
		<main className='vw-100 position-relative'>
			<BookingForm
				availableTimes={availableTimes}
				dispatchTimes={dispatchTimes}
			/>
		</main>
	);
}
