import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";

import Catalogo from "../models/Catalogo";
import CatalogoView from "../views/catalogos_view";

export default {
  async index(request: Request, response: Response) {
    const catalogoRepository = getRepository(Catalogo);

    const catalogos = await catalogoRepository.find();
    return response.status(200).json(catalogos);
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;
    const catalogoRepository = getRepository(Catalogo);

    const catalogo = await catalogoRepository.findOneOrFail(id);

    return response.status(201).json([CatalogoView.render(catalogo)]);
  },

  async create(request: Request, response: Response) {
    const { nome, descricao, cor, imagemCapa, imagemContracapa } = request.body;

    const catalogoRepository = getRepository(Catalogo);
    const catalogo = catalogoRepository.create({
      nome,
      descricao,
      cor,
      imagemCapa,
      imagemContracapa,
    });

    const schema = Yup.object().shape({
      nome: Yup.string().required("Nome da coleção é obrigatorio dodo!"),
      descricao: Yup.string(),
      cor: Yup.string().required(
        "Cor é obrigatorio para que o texto e icones não fiquem na cor preto automaticamente"
      ),
      imagemCapa: Yup.string(),
      imagemContracapa: Yup.string(),
    });

    await schema.validate(catalogo, {
      abortEarly: false,
    });
    await catalogoRepository.save(catalogo);

    return response.status(201).json(catalogo);
  },
};
