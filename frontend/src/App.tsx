import { Routes, Route } from 'react-router-dom';
import './App.css';
import DetalhesCliente from './components/DetalhesCliente';

function App() {
  return (
    <>
      <Routes>
      <Route path ="/clientes/:clienteId" element={<DetalhesCliente />} />
      </Routes>
    </>
  );
}

export default App;
