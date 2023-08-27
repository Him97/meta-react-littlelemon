import { Container, Stack, Carousel, Image, Card, ListGroup } from "react-bootstrap";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function HomePage() {
    return (
        <Container className='vw-100 position-relative'>
            <NavBar />
            <Stack className="w-100 my-2" gap={2}>
                <Carousel fade className="w-100 h-25 bg-white border border-light-subtle rounded position-relative z-0">
                    <Carousel.Item>
                        <Image text="Welcome!" src="../../src/assets/restaurant.jpg" rounded fluid />
                        <Carousel.Caption>
                            <h3>Welcome!</h3>
                            <p>Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image text="Second slide" src="../../src/assets/greek salad.jpg" rounded fluid />
                        <Carousel.Caption>
                            <h3>Multicultural Taste</h3>
                            <p>The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12-15 items that they rotate seasonally. The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image text="Third slide" src="../../src/assets/Mario and Adrian A.jpg" rounded fluid />
                        <Carousel.Caption>
                            <h3>Our Chefs</h3>
                            <p>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. Adrian does all the marketing for the restaurant.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <Stack direction="horizontal" className="py-2" gap={2}>
                    <Card className="content-box col d-flex flex-column p-3 bg-white border border-light-subtle rounded">
                        <Card.Title className="text-center">Our New Menu</Card.Title>
                        <Card.Text>To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian led the effort to expand the menu beyond classNameic Italian to incorporate additional cuisines from the Mediterranean region.</Card.Text>
                        <Card.Link href="/menu">See our new menu</Card.Link>
                    </Card>
                    <Card className="content-box col d-flex flex-column p-3 bg-white border border-light-subtle rounded">
                        <Card.Title className="text-center">Book a Table</Card.Title>
                        <Card.Text>Instead of waiting in line, order a place now at Little Lemon Restaurant. All you have to do is fill out the details.</Card.Text>
                        <Card.Link href="/booking">Book your table now</Card.Link>
                    </Card>
                    <Card className="content-box col d-flex flex-column p-3 bg-white border border-light-subtle rounded">
                        <Card.Title className="text-center">Opening Hours</Card.Title>
                        <ListGroup as='ul'>
                            <ListGroup.Item as='li'>Mon - Fri: 2pm - 10pm</ListGroup.Item>
                            <ListGroup.Item as='li'>Sat: 2pm - 11pm</ListGroup.Item>
                            <ListGroup.Item as='li'>Sun: 2pm - 9pm</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Stack>
            </Stack>
            <Footer />
        </Container>
    )
}