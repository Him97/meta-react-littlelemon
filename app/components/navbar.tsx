import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
	return (
		<nav className='sticky-top d-flex flex-column w-100'>
			<Link href='/'>
				<Image
					alt='Little Lemon'
					src='../src/assets/Asset 16@4x.png'
					className='w-50'
				/>
			</Link>
			<div className='d-flex justify-content-around bg-lemon-green rounded w-100'>
				<Link href='/' className='text-light bg-opacity-hover w-100 rounded'>
					Home
				</Link>
				<Link
					href='/menu'
					className='text-light bg-opacity-hover w-100 rounded'
				>
					Menu
				</Link>
				<Link
					href='/booking'
					className='text-light bg-opacity-hover w-100 rounded'
				>
					Booking
				</Link>
				<Link
					href='/about'
					className='text-light bg-opacity-hover w-100 rounded'
				>
					About
				</Link>
			</div>
		</nav>
	);
}
