import { Routes, Route } from 'react-router-dom';
import './App.css';
import DetalhesCliente from './components/cliente/DetalhesCliente';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.esm'
import 'bootstrap-icons/font/bootstrap-icons.css'
import ListaClientes from './components/cliente/ListaClientes';
import DetalhesPet from './components/pet/DetalhesPet';
import ListaServicos from './components/servico/ListaServicos';
import DetalhesServico from './components/servico/DetalhesServico';

function App() {
  return (
    <>
      <Routes>
        <Route path ="/clientes/:clienteId" element={<DetalhesCliente />} />
        <Route path ="/clientes" element={<ListaClientes />} />
        <Route path ="/clientes/:clienteId/pets/:petId" element={<DetalhesPet />} />
        <Route path ="/servicos" element={<ListaServicos />} />
        <Route path ="/servicos/:servicoId" element={<DetalhesServico />} />
      </Routes>
    </>
  );
}

export default App;
