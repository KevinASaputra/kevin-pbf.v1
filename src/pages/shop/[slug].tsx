import { useRouter } from "next/router";

const HalamanToko = () => {

  const { query } = useRouter();
  const slug = query.slug as string[] | undefined;
  return (
    <div>
      <h1>Halaman Toko</h1>
      <p>Toko: {Array.isArray(query.slug) ? query.slug.join("-") : query.slug}</p>
      <p>Kategori: {slug ? slug[0] : "Semua Kategori"}</p>
    </div>
  );
};

export default HalamanToko;