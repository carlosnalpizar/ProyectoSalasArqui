
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './componentes/Home';
import RegProductos from './componentes/RegProductos.jsx'
import RegPersona from './componentes/RegPersona.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/RegistroProducto" element={<RegProductos/>}/>
      <Route path="/RegistroPersona" element={<RegPersona/>}/>
    </Routes>
  );
}

export default App;
