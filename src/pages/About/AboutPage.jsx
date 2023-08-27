import { Card, Container, Row, Col } from "react-bootstrap";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function AboutPage() {
    return (
        <Container className='vw-100 d-flex flex-column justify-content-between'>
            <NavBar />
            <Card>
                <Card.Title as='h1'>ABOUT THE BRAND</Card.Title>
                <Row>
                    <Col>
                        <Card.Title as='h2'>BRAND NAME</Card.Title>
                        <Card.Text>Little Lemon</Card.Text>
                    </Col>
                    <Col>
                        <Card.Title as='h2'>MODELED AFTER</Card.Title>
                    </Col>
                </Row>
                <Row>
                    <Card.Title as='h2'>VERTICAL</Card.Title>
                    <Card.Text>Restaurant</Card.Text>
                </Row>
                <Row>
                    <Card.Title as='h2'>PRESENCE</Card.Title>
                    <Card.Text>Physical Locations</Card.Text>
                </Row>
                <Row>
                    <Card.Title as='h2'>ABOUT</Card.Title>
                    <Card.Text>Little Lemon is a charming neighbourhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</Card.Text>
                </Row>
            </Card>
            <Footer />
        </Container>
    )
}