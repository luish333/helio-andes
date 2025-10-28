import logo from './logo.svg';
import './App.css';
import BarraNavegacion from './components/Navbar';
import Introduccion from './components/Hero';
import SeccionServicio from './components/Servicios';
import SeccionSoluciones from './components/Soluciones';
import CalculadoraIntegral from './components/CalculadoraIntegral';
import SeccionPlanes from './components/Planes';
import SeccionTestimonios from './components/Testimonios';
import SeccionPreguntas from './components/FAQ';
import SeccionContacto from './components/Contacto';
import FooterPrincipal from './components/Footer';

function App() {
  return (
    <div className="">
      <BarraNavegacion />
      <Introduccion />
      <SeccionServicio />
      <SeccionSoluciones />
      <CalculadoraIntegral />
      <SeccionPlanes />
      <SeccionTestimonios />
      <SeccionPreguntas />
      <SeccionContacto />
      <FooterPrincipal />
    </div>
  );
}

export default App;
