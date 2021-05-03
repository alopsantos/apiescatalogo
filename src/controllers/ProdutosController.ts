import { request, Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";

import Produto from "../models/Produto";
import ProdutoView from "../views/produtos_view";

export default {
  async index(request: Request, response: Response) {
    const produtosRepository = getRepository(Produto);

    const produtos = await produtosRepository.find();
    return response.status(200).json(produtos);
  },

  async create(request: Request, response: Response) {
    const {
      nome,
      descricao,
      composicao,
      referencia,
      valor,
      tamanhos,
      imagens,
    } = request.body;

    const produtosRepository = getRepository(Produto);
    const produto = produtosRepository.create({
      nome,
      descricao,
      composicao,
      referencia,
      valor,
      tamanhos,
      imagens,
    });

    await produtosRepository.save(produto);

    return response.status(201).json(produto);
  },
};
