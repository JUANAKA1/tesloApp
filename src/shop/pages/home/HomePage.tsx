import { CustomPagination } from "@/components/custom/CustomPagination";
import { CustomJumbotron } from "@/shop/components/CustomJumbotron";

export const HomePage = () => {
  return (
    <>
      <CustomJumbotron title="Todos los Productos"/>
<CustomPagination totalPages={5}/>
    </>
  );
};
