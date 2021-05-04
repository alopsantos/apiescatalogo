import Produto from "../models/Produto";

export default {
  render(produto: Produto) {
    return {
      nome: produto.nome,
      descricao: produto.descricao,
      composicao: produto.composicao,
      referencia: produto.referencia,
      valor: produto.valor,
      tamanhos: produto.tamanhos,
      imagens: produto.imagens,
    };
  },
};
