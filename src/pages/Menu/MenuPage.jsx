import { Container } from "react-bootstrap";
import NavBar from "../../components/NavBar";
import DessertsList from "./DessertsList";
import Footer from "../../components/Footer";

export default function MenuPage() {
    return (
        <Container className='vw-100 position-relative'>
            <NavBar />
            <p>Delelopping</p>
            <Footer />
        </Container>
    )
}