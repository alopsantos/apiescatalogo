import Catalogo from "../models/Catalogo";

export default {
  render(catalogo: Catalogo) {
    return {
      nome: catalogo.nome,
      descricao: catalogo.descricao,
      cor: catalogo.cor,
      capa: catalogo.imagemCapa,
      contracapa: catalogo.imagemContracapa,
    };
  },
};
