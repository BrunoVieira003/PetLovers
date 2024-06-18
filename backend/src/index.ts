import express, { Express } from "express";
import ClienteRouter from './routes/ClienteRouter'
import Empresa from "./types/Empresa";

const app: Express = express();
const port = process.env.PORT || 8000;

const db = new Empresa()

const clienteRouter = new ClienteRouter(db)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/clientes', clienteRouter.router)

app.listen(port, () => {
  console.log(`[server] Server rodando em http://localhost:${port}`);
});

export {db}