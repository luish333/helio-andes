import { Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

function SeccionPreguntas() {
    return (

        <div className="" style={{ background: 'rgba(199, 238, 195, 0.43)' }}>
            <Container className='py-4'>

                <Row className="text-center mb-4" >
                    <h2>FAQ</h2>
                </Row>

                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>¿Cuánto puedo ahorrar en mi cuenta de luz?</Accordion.Header>
                        <Accordion.Body>
                            El ahorro depende de tu consumo actual y el tamaño del sistema instalado, pero en promedio los clientes ahorran entre 50% y 80% en su cuenta de electricidad. Con la Ley de Generación Distribuida en Chile, el excedente de energía se inyecta a la red y se descuenta de tu consumo nocturno.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>¿Cuánto tiempo toma la instalación?</Accordion.Header>
                        <Accordion.Body>
                            La instalación física típicamente toma entre 1 a 3 días dependiendo del tamaño del sistema. Sin embargo, el proceso completo desde el estudio inicial hasta la puesta en marcha puede tomar entre 4 a 8 semanas, incluyendo los trámites de permisos y conexión con la distribuidora eléctrica.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header> ¿Qué mantenimiento requieren los paneles solares?</Accordion.Header>
                        <Accordion.Body>
                            Los paneles solares requieren muy poco mantenimiento. Se recomienda una limpieza superficial 1 o 2 veces al año para remover polvo y suciedad, y una revisión técnica anual del sistema. La mayoría de los paneles tienen garantía de 25 años y los inversores entre 5 a 10 años.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </Container>

        </div>

    )
}

export default SeccionPreguntas;