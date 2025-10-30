import { useStore } from "@/auth/store/auth.store";
import { Button } from "@/components/ui/button";

export const ProductPage = () => {
  const { inc, count,dec } = useStore();
  return (
    <>
      <h1 className="text-3xl font-montserrat">count: {count} </h1>
      <Button onClick={inc}>+1</Button>
      <Button onClick={dec}>-1</Button>
    </>
  );
};
