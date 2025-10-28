import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SeccionPlanes() {
    return (
        <div className="" id="planes" style={{ background: 'rgba(199, 238, 195, 0.43)' }}>
            <Container className="py-4">

                <Row className="text-center mb-4" >
                    <h2>Planes</h2>
                </Row>

                <Row className="mx-4 text-center">
                    <Col lg={4} className="d-flex justify-content-center mt-2">
                        <Card style={{ width: '30rem', background: '#d8f0c7ff'}}>
                            <h4 className="mt-4" style={{ color: '#98b87fff' }}>Plan Basico</h4>
                            <Card.Body>
                                <Card.Title>3 – 5 kW</Card.Title>
                                <Card.Text>
                                    Estudio energetico
                                    <br />
                                    Instalacion estandar
                                    <br />
                                    Monitoreo basico
                                </Card.Text>
                                <Button variant="primary">Solicitar evaluacion</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} className="d-flex justify-content-center mt-2">
                        <Card style={{ width: '30rem', background: '#f7e2c4ff'}}>
                            <h4 className="mt-4" style={{ color: '#b3a38dff' }}>Plan Optimizado</h4>
                            <Card.Body>
                                <Card.Title>10 - 15 kW</Card.Title>
                                <Card.Text>
                                    Estudio avanzado
                                    <br />
                                    Instalacion optimizada
                                    <br />
                                    Monitoreo avanzado
                                </Card.Text>
                                <Button variant="primary">Solicitar evaluacion</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} className="d-flex justify-content-center mt-2">
                        <Card style={{ width: '30rem', background: '#e1f5fdff'}}>
                            <h4 className="mt-4" style={{ color: '#99aab1ff' }}>Autonomo</h4>
                            <Card.Body>
                                <Card.Title>Hibrido + baterias</Card.Title>
                                <Card.Text>
                                    Diseño off-grid
                                    <br />
                                    Almacenamiento
                                    <br />
                                    Soporte preferente
                                </Card.Text>
                                <Button variant="primary">Solicitar evaluacion</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SeccionPlanes;