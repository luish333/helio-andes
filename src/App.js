import logo from './logo.svg';
import './App.css';
import BarraNavegacion from './components/Navbar';
import Introduccion from './components/Hero';
import SeccionServicio from './components/Servicios';
import SeccionSoluciones from './components/Soluciones';
import CalculadoraIntegral from './components/CalculadoraIntegral'; 

function App() {
  return (
    <div className="">
      <BarraNavegacion />
      <Introduccion />
      <SeccionServicio />
      <SeccionSoluciones />
      <CalculadoraIntegral />
    </div>
  );
}

export default App;
