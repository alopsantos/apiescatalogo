import { Request, Response } from "express";
import { getRepository } from "typeorm";
import * as Yup from "yup";

import Brand from "../models/Brand";
import BrandView from "../views/Brands_view";

export default {
  async index(request: Request, response: Response) {
    const brandsRepository = getRepository(Brand);

    const brands = await brandsRepository.find();
    return response.status(200).json(brands);
  },
  async show(request: Request, response: Response) {
    const { id } = request.params;
    const brandsRepository = getRepository(Brand);

    const brand = await brandsRepository.findOneOrFail(id);

    return response.status(201).json(BrandView.render(brand));
  },

  async create(request: Request, response: Response) {
    const { instagram, logo, loja } = request.body;

    const brandsRepository = getRepository(Brand);
    const brand = brandsRepository.create({
      instagram,
      logo,
      loja,
    });

    const schema = Yup.object().shape({
      instagram: Yup.string().required("Instagram é um campo obrigado loco!"),
      logo: Yup.string().required(
        "Link do logo da marca é um campo obrigatorio"
      ),
      loja: Yup.array().required("Dados da loja é obrigatorio mano!"),
    });

    await schema.validate(brand, {
      abortEarly: false,
    });

    await brandsRepository.save(brand);
    return response.status(201).json(BrandView.render(brand));
  },

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const brandsRepository = getRepository(Brand);
    await brandsRepository.delete(id);
    return response.status(201).json({ mesagem: "Excluido com sucesso!" });
  },
};
