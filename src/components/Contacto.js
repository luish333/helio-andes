import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function SeccionContacto() {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [errores, setErrores] = useState({});
    const [enviado, setEnviado] = useState(false);

    const validarFormulario = () => {
        const nuevosErrores = {};

        if (nombre.trim().length < 3 || !/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre)) {
            nuevosErrores.nombre = 'El nombre debe tener más de 3 letras y solo contener caracteres alfabéticos.';
        }

        if (!/^[\w.%+-]+@gmail\.com$/.test(email)) {
            nuevosErrores.email = 'El correo debe ser un Gmail válido (terminado en @gmail.com).';
        }

        if (mensaje.trim().length < 10) {
            nuevosErrores.mensaje = 'El mensaje debe tener al menos 10 caracteres.';
        }

        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
    };

    const manejarEnvio = (e) => {
        e.preventDefault();
        if (validarFormulario()) {
            setErrores({});
            setEnviado(true);
 
            setNombre('');
            setEmail('');
            setMensaje('');
        } else {
            setEnviado(false);
        }
    };

    const limpiarFormulario = () => {
        setNombre('');
        setEmail('');
        setMensaje('');
        setErrores({});
        setEnviado(false);
    };

    return (
        <div id="contacto" style={{ background: '#c7eec36e'}}>
            <Container className='py-4 rounded' style={{ background: 'rgba(157, 187, 151, 0.34)'}}>
                <Row className="text-center">
                    <Col>
                        <h2>Contacto</h2>
                    </Col>
                </Row>

                <Form className='px-4' onSubmit={manejarEnvio}>
                    <Row className='mb-4'>
                        <Col lg={6} className='mb-3 mb-lg-0'>
                            <Form.Group controlId="formNombre">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Tu Nombre"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    isInvalid={!!errores.nombre}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errores.nombre}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>

                        <Col lg={6}>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Correo Electrónico</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="tucorreo@gmail.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    isInvalid={!!errores.email}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errores.email}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Group className="mb-4" controlId="formMensaje">
                                <Form.Label>Mensaje</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={5}
                                    placeholder="Escribe tu mensaje aquí..."
                                    value={mensaje}
                                    onChange={(e) => setMensaje(e.target.value)}
                                    isInvalid={!!errores.mensaje}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errores.mensaje}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>

                    {enviado && (
                        <Row className="mb-3">
                            <Col>
                                <p className="fw-semibold">
                                    ¡Se ha enviado el mensaje con éxito!
                                </p>
                            </Col>
                        </Row>
                    )}

                    <Row>
                        <Col className='d-flex gap-3'>
                            <Button type="submit" variant="light">Enviar</Button>
                            <Button variant="outline-secondary" onClick={limpiarFormulario}>Limpiar</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
}

export default SeccionContacto;
