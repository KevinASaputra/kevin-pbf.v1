import Container from "@/common/components/elements/Container";
import { useRouter } from "next/router";

const HalamanProduts = () => {
  const { query } = useRouter();
  return (
    <Container>
      <div>
        <h1>Halaman Produk</h1>
        <p>Product: {query.id} </p>
      </div>
    </Container>
  );
};

export default HalamanProduts;