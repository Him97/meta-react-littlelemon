import Image from 'next/image';

export default function Footer() {
	return (
		<footer>
			<div className='w-100'>
				<div className='d-flex'>
					<Image alt='Little Lemon' src='../src/assets/Asset 18@4x.png' />
				</div>
				<div className='py-2 border-top border-dark'>
					<p className='text-end'>
						© 2023 Little Lemon Inc. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
