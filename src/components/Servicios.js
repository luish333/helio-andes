import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SeccionServicio() {
    return (
        <div className="" id="servicios" style={{ background: 'rgba(199, 238, 195, 0.43)' }}>
            <Container className="py-2">

                <Row className="text-center mb-2" >
                    <h2>Servicios</h2>
                </Row>

                <Row className="mx-4">
                    <Col lg={3} className="d-flex justify-content-center mt-2">
                        <Card style={{ width: '18rem' }}>
                            <div className="mt-2 ms-2">
                                <i className="fa-solid fa-lightbulb" style={{ fontSize: '25px' }}></i>
                            </div>
                            <Card.Body>
                                <Card.Title>Estudio energetico</Card.Title>
                                <Card.Text>
                                    Analisis de consumo y propuesta ajustada a tu perfil
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} className="d-flex justify-content-center mt-2">
                        <Card style={{ width: '18rem' }}>
                            <div className="mt-2 ms-3">
                                <i className="fa-solid fa-hammer" style={{ fontSize: '22px' }}></i>
                            </div>
                            <Card.Body>
                                <Card.Title>Instalacion Certificada SEC</Card.Title>
                                <Card.Text>
                                    Ejecutada por personal acreditado y normativa vigente
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} className="d-flex justify-content-center mt-2">
                        <Card style={{ width: '18rem' }}>
                            <div className="mt-2 ms-3">
                                <i className="fa-solid fa-eye" style={{ fontSize: '20px' }}></i>
                            </div>
                            <Card.Body>
                                <Card.Title>Monitoreo</Card.Title>
                                <Card.Text>
                                    Seguimiento de rendimiento y alertas preventivas
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} className="d-flex justify-content-center mt-2">
                        <Card style={{ width: '18rem' }}>
                            <div className="mt-2 ms-3">
                                <i className="fa-solid fa-screwdriver-wrench" style={{ fontSize: '20px' }}></i>
                            </div>
                            <Card.Body>
                                <Card.Title>Mantencion</Card.Title>
                                <Card.Text>
                                    Planes periodicos para extender la vida util del sistema
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SeccionServicio;