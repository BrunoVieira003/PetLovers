import express, { Express } from "express";
import ClienteRouter from './routes/ClienteRouter'
import Empresa from "./types/Empresa";
import PetRouter from "./routes/PetRouter";
import cors from 'cors'
import ServicoRouter from "./routes/ServicoRouter";
import ProdutoRouter from "./routes/ProdutoRouter";

const app: Express = express();
const port = process.env.PORT || 8000;

const db = new Empresa()

const clienteRouter = new ClienteRouter(db)
const petRouter = new PetRouter(db)
const servicoRouter = new ServicoRouter(db)
const produtoRouter = new ProdutoRouter(db)

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/clientes', clienteRouter.router)
app.use('/clientes', petRouter.router)
app.use('/servicos', servicoRouter.router)
app.use('/produtos', produtoRouter.router)

app.listen(port, () => {
  console.log(`[server] Server rodando em http://localhost:${port}`);
});

export {db}