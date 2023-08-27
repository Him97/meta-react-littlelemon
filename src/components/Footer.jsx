import { Container, Row, Col, Image } from 'react-bootstrap';

export default function Footer() {
    return (
        <Container>
            <Row className='w-100'>
                <Col className='d-flex'><Image title='Little Lemon' src='../src/assets/Asset 18@4x.png' fluid /></Col>
                <Col xs={10} className='py-2 border-top border-dark'><p className='text-end'>© 2023 Little Lemon Inc. All rights reserved.</p></Col>
            </Row>
        </Container>
    )
}