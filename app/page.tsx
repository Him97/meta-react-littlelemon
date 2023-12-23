import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
	return (
		<main className='vw-100 my-2 relative'>
			<div className='w-100 h-25 bg-white border border-light-subtle rounded position-relative z-0'>
				<div>
					<Image alt='Welcome!' src='../../src/assets/restaurant.jpg' />
					<div className='bg-dark bg-opacity-50 rounded'>
						<h3>Welcome!</h3>
						<p className='font-karla'>
							Based in Chicago, Illinois, Little Lemon is a family-owned
							Mediterranean restaurant, focused on traditional recipes served
							with a modern twist.
						</p>
					</div>
				</div>
				<div>
					<Image alt='Second slide' src='../../src/assets/greek salad.jpg' />
					<div className='bg-dark bg-opacity-50 rounded'>
						<h3>Multicultural Taste</h3>
						<p className='font-karla'>
							The chefs draw inspiration from Italian, Greek, and Turkish
							culture and have a menu of 12-15 items that they rotate
							seasonally. The restaurant has a rustic and relaxed atmosphere
							with moderate prices, making it a popular place for a meal any
							time of the day.
						</p>
					</div>
				</div>
				<div>
					<Image
						alt='Third slide'
						src='../../src/assets/Mario and Adrian A.jpg'
					/>
					<div className='bg-dark bg-opacity-50 rounded'>
						<h3>Our Chefs</h3>
						<p className='font-karla'>
							Little Lemon is owned by two Italian brothers, Mario and Adrian,
							who moved to the United States to pursue their shared dream of
							owning a restaurant. Adrian does all the marketing for the
							restaurant.
						</p>
					</div>
				</div>
			</div>
			<div>
				<div className='p-3 rounded justify-content-between'>
					<h2 className='text-center'>Our New Menu</h2>
					<p className='font-karla'>
						To craft the menu, Mario relies on family recipes and his experience
						as a chef in Italy. Adrian led the effort to expand the menu beyond
						classNameic Italian to incorporate additional cuisines from the
						Mediterranean region.
					</p>
					<button type='button'>
						<Link
							href='/menu'
							className='font-karla link-underline link-underline-opacity-0 text-black'
						>
							See our new menu
						</Link>
					</button>
				</div>
				<div className='p-3 mx-3 rounded justify-content-between'>
					<h2 className='text-center'>Book a Table</h2>
					<p className='font-karla'>
						Instead of waiting in line, order a place now at Little Lemon
						Restaurant. All you have to do is fill out the details.
					</p>
					<button type='button'>
						<Link
							href='/booking'
							className='font-karla link-underline link-underline-opacity-0 text-black'
						>
							Book your table now
						</Link>
					</button>
				</div>
				<div className='p-3 rounded justify-content-between'>
					<h2 className='text-center'>Opening Hours</h2>
					<ul className='font-karla'>
						<li>Mon - Fri: 2pm - 10pm</li>
						<li>Sat: 2pm - 11pm</li>
						<li>Sun: 2pm - 9pm</li>
					</ul>
					<button type='button'>
						<Link
							href='/about'
							className='font-karla link-underline link-underline-opacity-0 text-black'
						>
							Contact Us!
						</Link>
					</button>
				</div>
			</div>
		</main>
	);
}
