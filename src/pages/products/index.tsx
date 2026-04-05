import useSWR from "swr";
import { retrieveProducts } from "@/common/utils/db/serviceFirebase";

type Product = {
  id: string;
  name: string;
  price: number;
  category?: string;
};

const fetcher = async () => {
  return await retrieveProducts("Products");
};

export default function ProductsPage() {
  const { data, error, isLoading, mutate } = useSWR<Product[]>(
    "products",
    fetcher
  );

  if (error) return <p>Error loading data</p>;

  return (
    <div className="p-5">
      <h1 className="text-xl font-semibold mb-4">Products</h1>

      <button
        onClick={() => mutate()}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Refresh Data
      </button>

      {isLoading && (
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-20 bg-gray-200 rounded-lg animate-pulse"
            />
          ))}
        </div>
      )}

      <div className="space-y-3">
        {data?.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded-lg shadow-sm transform transition duration-300 hover:scale-[1.02] hover:shadow-md"
          >
            <p className="font-medium">Nama: {item.name}</p>
            <p>Harga: {item.price}</p>
            <p>Kategori: {item.category || "-"}</p>
          </div>
        ))}
      </div>
    </div>
  );
}