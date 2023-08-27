import { Container, Stack, Carousel, Image, CardGroup, Card, Button, ListGroup } from 'react-bootstrap';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

export default function HomePage() {
    return (
        <Container className='vw-100 position-relative'>
            <NavBar />
            <Stack className='w-100 my-2' gap={2}>
                <Carousel fade className='w-100 h-25 bg-white border border-light-subtle rounded position-relative z-0'>
                    <Carousel.Item>
                        <Image text='Welcome!' src='../../src/assets/restaurant.jpg' rounded fluid />
                        <Carousel.Caption className='bg-dark bg-opacity-50 rounded'>
                            <h3>Welcome!</h3>
                            <p className='font-karla'>Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image text='Second slide' src='../../src/assets/greek salad.jpg' rounded fluid />
                        <Carousel.Caption className='bg-dark bg-opacity-50 rounded'>
                            <h3>Multicultural Taste</h3>
                            <p className='font-karla'>The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12-15 items that they rotate seasonally. The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image text='Third slide' src='../../src/assets/Mario and Adrian A.jpg' rounded fluid />
                        <Carousel.Caption className='bg-dark bg-opacity-50 rounded'>
                            <h3>Our Chefs</h3>
                            <p className='font-karla'>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. Adrian does all the marketing for the restaurant.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <CardGroup>
                    <Card className='p-3 rounded justify-content-between'>
                        <Card.Title className='text-center'>Our New Menu</Card.Title>
                        <Card.Text className='font-karla'>To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian led the effort to expand the menu beyond classNameic Italian to incorporate additional cuisines from the Mediterranean region.</Card.Text>
                        <Button variant='warning'><Card.Link href='/menu' className='font-karla link-underline link-underline-opacity-0 text-black'>See our new menu</Card.Link></Button>
                    </Card>
                    <Card className='p-3 mx-3 rounded justify-content-between'>
                        <Card.Title className='text-center'>Book a Table</Card.Title>
                        <Card.Text className='font-karla'>Instead of waiting in line, order a place now at Little Lemon Restaurant. All you have to do is fill out the details.</Card.Text>
                        <Button variant='warning'><Card.Link href='/booking' className='font-karla link-underline link-underline-opacity-0 text-black'>Book your table now</Card.Link></Button>
                    </Card>
                    <Card className='p-3 rounded justify-content-between'>
                        <Card.Title className='text-center'>Opening Hours</Card.Title>
                        <ListGroup as='ul' className='font-karla'>
                            <ListGroup.Item as='li'>Mon - Fri: 2pm - 10pm</ListGroup.Item>
                            <ListGroup.Item as='li'>Sat: 2pm - 11pm</ListGroup.Item>
                            <ListGroup.Item as='li'>Sun: 2pm - 9pm</ListGroup.Item>
                        </ListGroup>
                        <Button variant='warning'><Card.Link href='/about' className='font-karla link-underline link-underline-opacity-0 text-black'>Contact Us!</Card.Link></Button>
                    </Card>
                </CardGroup>
            </Stack>
            <Footer />
        </Container>
    )
}