import { Router } from 'express';

import ProdutosController from './controllers/ProdutosController'

const routes = Router();


routes.get("/produtos", ProdutosController.index);
routes.post("/produtos", ProdutosController.create);
// routes.get("/transactions/:id", TransactionController.show);
// routes.post("/transactions", TransactionController.create);

export default routes;