import { tesloApi } from "@/api/tesloApi";
import type { ProductsResponse } from "@/interfaces/products.response";

interface Options {
  limit?: number | string;
  offset?: number | string;
  sizes?: string;
  gender?: string;
  minPrice?: number;
  maxPrice?: number;
  query?: string;
}
export const getProtuctsAction = async (
  options: Options
): Promise<ProductsResponse> => {
  const { limit, offset, sizes, gender, minPrice, maxPrice, query } = options;

  const { data } = await tesloApi.get<ProductsResponse>("/products", {
    params: {
      limit,
      offset,
      sizes,
      gender,
      minPrice,
      maxPrice,
      q: query,
    },
  });

  const productsWithImageUrl = data.products.map((prod) => ({
    ...prod,
    images: prod.images.map(
      (img) => `${import.meta.env.VITE_API_URL}/files/product/${img}`
    ),
  }));
  return { ...data, products: productsWithImageUrl };
};
