import logo from './logo.svg';
import './App.css';
import BarraNavegacion from './components/Navbar';
import Introduccion from './components/Hero';
import SeccionServicio from './components/Servicios';

function App() {
  return (
    <div className="">
      <BarraNavegacion />
      <Introduccion />
      <SeccionServicio />
    </div>
  );
}

export default App;
