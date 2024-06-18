import { Routes, Route } from 'react-router-dom';
import './App.css';
import DetalhesCliente from './components/DetalhesCliente';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.esm'
import 'bootstrap-icons/font/bootstrap-icons.css'
import ListaClientes from './components/ListaClientes';

function App() {
  return (
    <>
      <Routes>
        <Route path ="/clientes/:clienteId" element={<DetalhesCliente />} />
        <Route path ="/clientes" element={<ListaClientes />} />
      </Routes>
    </>
  );
}

export default App;
