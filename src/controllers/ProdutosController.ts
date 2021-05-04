import { Request, Response } from "express";
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

  async show(request: Request, response: Response) {
    const { id } = request.params;
    const produtosRepository = getRepository(Produto);

    const produto = await produtosRepository.findOneOrFail(id);
    if (produto.id < 1) {
      return response.status(201).json({
        messagem: "Nenhum produto foi encontrado com esse id este id!",
      });
    } else {
      return response.status(201).json([ProdutoView.render(produto)]);
    }
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

    const schema = Yup.object().shape({
      nome: Yup.string().required("Nome é um campo obrigatório doido!"),
      descricao: Yup.string().required(
        "Descrição é um campo obrigatório loco!"
      ),
      composicao: Yup.string(),
      referencia: Yup.string().required("Referencia do produto é obrigatório!"),
      valor: Yup.string().required("Valor é um campo obrigatório"),
      tamanhos: Yup.string().required(
        "Preciso que você informe os tamanhos disponíveis"
      ),
      imagens: Yup.array().required(
        "As imagens devem ser inseridas para que o catalogo funcione corretamente!"
      ),
    });
    await schema.validate(produto, {
      abortEarly: false,
    });

    await produtosRepository.save(produto);

    return response.status(201).json(produto);
  },
};
