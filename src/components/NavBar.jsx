import { Nav, Navbar, Image } from 'react-bootstrap';

export default function NavBar() {
    return (
        <Navbar className='sticky-top d-flex flex-column'>
            <Navbar.Brand href='/'><Image title='Little Lemon' src='../src/assets/Asset 16@4x.png' className='w-50' /></Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav' className='w-100'>
                <Nav className='d-flex justify-content-around bg-lemon-green rounded w-100'>
                    <Nav.Link href='/' className='text-light bg-opacity-hover w-100 rounded'>Home</Nav.Link>
                    <Nav.Link href='/' className='text-light bg-opacity-hover w-100 rounded'>Menu</Nav.Link>
                    <Nav.Link href='/booking' className='text-light bg-opacity-hover w-100 rounded'>Booking</Nav.Link>
                    <Nav.Link href='/about' className='text-light bg-opacity-hover w-100 rounded'>About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}