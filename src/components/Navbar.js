import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BarraNavegacion() {
    return (
        <Navbar expand="lg" className="">
            <Container>

                <Navbar.Brand href="" className="fw-bold">
                    <img src='assets/images/HelioAndesLogo.png' style={{ width: '40px' }} />
                    HelioAndes
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />

                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-1"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#introduccion">Inicio</Nav.Link>
                        <Nav.Link href="#servicios">Servicios</Nav.Link>
                        <Nav.Link href="#soluciones">Soluciones</Nav.Link>
                        <Nav.Link href="#demo">DEMO</Nav.Link>
                        <Nav.Link href="#planes">Planes</Nav.Link>
                        <Nav.Link href="#testimonios">Testimonios</Nav.Link>
                        <Nav.Link href="#faq">FAQ</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default BarraNavegacion;