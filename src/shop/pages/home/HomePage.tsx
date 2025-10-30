import { CustomPagination } from "@/components/custom/CustomPagination";
import { useProducts } from "@/hooks/useProducts";
import { CustomJumbotron } from "@/shop/components/CustomJumbotron";
import { ProductsGrid } from "@/shop/components/ProductsGrid";

export const HomePage = () => {
  const { data } = useProducts();

  return (
    <>
      <CustomJumbotron title="Todos los Productos" />

      <ProductsGrid products={data?.products || []} />

      <CustomPagination totalPages={data?.pages || 0} />
    </>
  );
};
