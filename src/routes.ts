import { Router } from "express";

import ProdutosController from "./controllers/ProdutosController";
import CatalogosController from "./controllers/CatalogosController";
import BrandsController from "./controllers/BrandsController";

const routes = Router();

routes.get("/produtos", ProdutosController.index);
routes.get("/produtos/:id", ProdutosController.show);
routes.post("/produtos", ProdutosController.create);

routes.get("/catalogos", CatalogosController.index);
routes.get("/catalogos/:id", CatalogosController.show);
routes.post("/catalogos", CatalogosController.create);

// routes.get("/itens", ItensController.index);
// routes.get("/itens/:id", ItensController.show);
// routes.post("/itens", ItensController.create);

routes.get("/brands", BrandsController.index);
routes.get("/brands/:id", BrandsController.show);
routes.delete("/brands/:id", BrandsController.delete);
routes.post("/brands", BrandsController.create);

export default routes;
