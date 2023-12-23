import * as React from 'react';
import Image from 'next/image';
import ConfirmedBooking from './ConfirmedBooking';

export default function BookingForm({ availableTimes, dispatchTimes }) {
	const [date, setDate] = React.useState('');
	const [time, setTime] = React.useState('');
	const [guests, setGuests] = React.useState(1);
	const [occasion, setOccasion] = React.useState('');
	const [modalShow, setModalShow] = React.useState(false);

	const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatchTimes();
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setModalShow(true);
	};

	return (
		<main className='d-flex flex-row rounded w-100 p-4 my-2'>
			<Image
				alt='food'
				src='../../src/assets/restauranfood.jpg'
				className='object-fit-cover'
				style={{ maxHeight: '75vh', maxWidth: '35vw' }}
			/>
			<div>
				<h1>Make a Reservation</h1>
				<form className='d-flex flex-column justify-content-between position-relative font-karla'>
					<label htmlFor='date' label='Choose date' className='m-2'>
						<Form.Control
							type='date'
							id='date'
							placeholder='Choose date'
							value={date}
							onChange={(e) => setDate(e.target.value)}
						/>
					</label>
					<label htmlFor='time' label='Choose time' className='m-2'>
						<Form.Select
							id='res-time'
							value={time}
							onChange={(e) => setTime(e.target.value)}
						>
							<option disabled>Choose time</option>
							{availableTimes.map((availableTime, index) => (
								<option key={index}>{availableTime}</option>
							))}
						</Form.Select>
					</label>
					<label htmlFor='guests' label='Number of guests' className='m-2'>
						<Form.Control
							type='number'
							placeholder='Number of guests'
							value={guests}
							onChange={(e) => setGuests(e.target.value)}
						/>
					</label>
					<label htmlFor='occasion' className='m-2'>
						<select
							title='occasion'
							id='occasion'
							value={occasion}
							onChange={(e) => setOccasion(e.target.value)}
						>
							<option disabled>occasion</option>
							<option>None</option>
							<option>Birthday</option>
							<option>Anniversary</option>
						</select>
					</label>
					<button
						variant='warning'
						type='submit'
						className='m-2'
						onClick={handleSubmit}
					>
						Make Your Reservation
					</button>
				</form>
			</div>
			<ConfirmedBooking
				show={modalShow}
				onHide={() => setModalShow(false)}
				date={date}
				time={time}
				guests={guests}
				occasion={occasion}
			/>
		</main>
	);
}
