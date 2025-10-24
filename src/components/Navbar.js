import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BarraNavegacion() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>

                <Navbar.Brand href="" className="fw-bold">
                    <img src='assets/images/HelioAndesLogo.png' style={{width: '40px'}} />
                    HelioAndes
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />

                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-1"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="">Inicio</Nav.Link>
                        <Nav.Link href="">Servicios</Nav.Link>
                        <Nav.Link href="">Soluciones</Nav.Link>
                        <Nav.Link href="">DEMO</Nav.Link>
                        <Nav.Link href="">Planes</Nav.Link>
                        <Nav.Link href="">Testimonios</Nav.Link>
                        <Nav.Link href="">FAQ</Nav.Link>
                        <Nav.Link href="">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default BarraNavegacion;