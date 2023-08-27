import { Modal, Button } from 'react-bootstrap';

export default function ConfirmedBooking(props) {
    const { show, onHide, date, time, guests, occasion } = props;
    return (
        <Modal
            show={show}
            onHide={onHide}
            size='lg'
            aria-labelledby='contained-modal-title-vcenter'
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className='font-markazi' >
                    The booking has been confirmed
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='font-karla'>
                Your reservation of {guests} {guests == 1 ? 'guest' : 'guests'} at {time} on {date} {occasion && `for ${occasion.toLowerCase()}`} has been confirmed.
            </Modal.Body>
            <Modal.Footer>
                <Button variant='warning' className='font-karla' onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}