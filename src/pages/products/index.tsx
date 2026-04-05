import { retrieveProducts } from "@/common/utils/db/serviceFirebase";
import { useEffect, useState } from "react";

type Product = {
  id: string;
  name: string;
  price: number;
  size?: string;
  category?: string;
};

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await retrieveProducts("Products");
      setProducts(data);
    } catch (error) {
      console.error("Error fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>

      <button onClick={fetchData} style={{ marginBottom: "20px" }}>
        Refresh Data
      </button>

      {loading && <p>Loading...</p>}

      {!loading && products.length === 0 && (
        <p>Tidak ada data produk</p>
      )}

      {products.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "8px",
          }}
        >
          <p>Nama: {item.name}</p>
          <p>Harga: {item.price}</p>
          <p>Size: {item.size || "-"}</p>
          <p>Kategori: {item.category || "-"}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;