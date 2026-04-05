import { retrieveProducts } from "@/common/utils/db/serviceFirebase";

type Product = {
  id: string;
  name: string;
  price: number;
  category?: string;
};

export default function ProductsSSR({ products }: { products: Product[] }) {
  return (
    <div className="p-5">
      <h1 className="text-xl font-bold mb-4">Products (SSR)</h1>

      {products.map((item) => (
        <div key={item.id} className="border p-3 mb-2 rounded">
          <p>{item.name}</p>
          <p>{item.price}</p>
          <p>{item.category}</p>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const products = await retrieveProducts("Products");

  return {
    props: {
      products,
    },
  };
}