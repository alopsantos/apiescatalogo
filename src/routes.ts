import { Router } from "express";

import ProdutosController from "./controllers/ProdutosController";
import CatalogosController from "./controllers/CatalogosController";
const routes = Router();

routes.get("/produtos", ProdutosController.index);
routes.get("/produtos/:id", ProdutosController.show);
routes.post("/produtos", ProdutosController.create);

routes.get("/catalogos", CatalogosController.index);
routes.get("/catalogos/:id", CatalogosController.show);
routes.post("/catalogos", CatalogosController.create);
// routes.get("/transactions/:id", TransactionController.show);
// routes.post("/transactions", TransactionController.create);

export default routes;
