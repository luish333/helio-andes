import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

function Introduccion() {
    return (
        <div className="bg-light">
            <Container className="py-4">
                <Row className="">
                    <Col lg={6}>
                        <div className="p-5">
                            <h2>Energía solar accesible y confiable para tu hogar o pyme</h2>
                            <p>Dimensiona tu sistema, conoce el costo estimado y solicita asesoria en minutos. La DEMO te guía con valores referenciales.</p>
                            <Button className="me-2" variant="primary">Ver DEMO</Button>
                            <Button variant="secondary">Descargar catalogo</Button>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <div className="p-2">
                            <Image src="assets/images/Fotovoltaica.png" fluid />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Introduccion;