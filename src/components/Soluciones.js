import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SeccionSoluciones() {
    return (
        <div className="" style={{ background: 'rgba(199, 238, 195, 0.43)' }}>
            <Container className="py-4">

                <Row className="text-center mb-2" >
                    <h2>Soluciones</h2>
                </Row>

                <Row className="mx-4">
                    <Col lg={4} className="d-flex justify-content-center mt-2">
                        <Card style={{ width: '30rem' }}>
                            <Card.Img variant="top" className=''src="assets/images/foto_hogar.jpg" style={{width:'', height:'60%'}}/>
                            <Card.Body>
                                <Card.Title>Hogar 3–5 kW</Card.Title>
                                <Card.Text>
                                    Balance ideal entre costo y ahorro mensual
                                </Card.Text>
                                <Button variant="primary">Solicitar asesoria</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} className="d-flex justify-content-center mt-2">
                        <Card style={{ width: '30rem' }}>
                            <Card.Img variant="top" src="assets/images/foto_pyme.jpg" />
                            <Card.Body>
                                <Card.Title>Pyme 10–20 kW</Card.Title>
                                <Card.Text>
                                    Para operacion diurna con buena irradiacion
                                </Card.Text>
                                <Button variant="primary">Solicitar asesoria</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} className="d-flex justify-content-center mt-2">
                        <Card style={{ width: '30rem' }}>
                            <Card.Img variant="top" src="assets/images/foto_offgrid.jpg" />
                            <Card.Body>
                                <Card.Title>Off-grid con baterías</Card.Title>
                                <Card.Text>
                                    Autonomia en zonas sin red electrica
                                </Card.Text>
                                <Button variant="primary">Solicitar asesoria</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SeccionSoluciones;