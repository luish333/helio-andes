import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SeccionTestimonios() {
    return (
        <div className="" style={{ background: 'rgba(199, 238, 195, 0.43)' }}>
            <Container className="py-4">

                <Row className="text-center mb-4" >
                    <h2>Testimonios</h2>
                </Row>

                <Row className="mx-4">
                    <Col lg={4} className="d-flex justify-content-center mt-2">
                        <Card style={{ width: '30rem' }}>
                            <i className="fa-solid fa-comment mt-3 ms-3"></i>
                            <Card.Body>
                                <Card.Title>Nicolas, La Serena</Card.Title>
                                <Card.Text>
                                    <i>"La inversión se pagó sola. El equipo fue muy profesional y la instalación no interrumpió las operaciones de mi negocio."</i>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} className="d-flex justify-content-center mt-2">
                        <Card style={{ width: '30rem' }}>
                            <i className="fa-solid fa-comment mt-3 ms-3"></i>
                            <Card.Body>
                                <Card.Title>Pamela, Talca </Card.Title>
                                <Card.Text>
                                    <i>"Excelente servicio desde el estudio inicial hasta la instalación. Ya llevo 6 meses ahorrando más del 60% en mi cuenta de luz."</i>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} className="d-flex justify-content-center mt-2">
                        <Card style={{ width: '30rem' }}>
                            <i className="fa-solid fa-comment mt-3 ms-3"></i>
                            <Card.Body>
                                <Card.Title>Cesar, Santiago</Card.Title>
                                <Card.Text>
                                    <i>"Muy contentos con los paneles. El proceso fue transparente, cumplieron los plazos y el monitoreo en tiempo real es muy útil."</i>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SeccionTestimonios;