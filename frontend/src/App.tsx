import { Routes, Route } from 'react-router-dom';
import './App.css';
import DetalhesCliente from './components/cliente/DetalhesCliente';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.esm'
import 'bootstrap-icons/font/bootstrap-icons.css'
import ListaClientes from './components/cliente/ListaClientes';
import DetalhesPet from './components/pet/DetalhesPet';

function App() {
  return (
    <>
      <Routes>
        <Route path ="/clientes/:clienteId" element={<DetalhesCliente />} />
        <Route path ="/clientes" element={<ListaClientes />} />
        <Route path ="/clientes/:clienteId/pets/:petId" element={<DetalhesPet />} />
      </Routes>
    </>
  );
}

export default App;
