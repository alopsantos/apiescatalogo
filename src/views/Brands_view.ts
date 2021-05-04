import Brand from "../models/Brand";

export default {
  render(brand: Brand) {
    return {
      id: brand.id,
      instagram: brand.instagram,
      logo: brand.logo,
      loja: brand.loja,
    };
  },
};
