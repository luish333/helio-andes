import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';

function FooterPrincipal() {
    return (
        <div className='text-center py-4 text-white' style={{ background: '#11580c7c' }}>

            <h5>2025 HelioAndes Energia</h5>
            <p>Acerca de Nosotros</p>
            <Button variant="link">Quienes Somos</Button>
            <Button variant="link">Representante Legal</Button>
            <Button variant="link">Privacidad y seguridad</Button>
            <Button variant="link">Terminos y condiciones</Button>

        </div>
    );
}

export default FooterPrincipal;