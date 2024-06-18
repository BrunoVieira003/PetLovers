import express, { Express } from "express";

const app: Express = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`[server] Server rodando em http://localhost:${port}`);
});