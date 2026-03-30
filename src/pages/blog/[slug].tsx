import { useRouter } from "next/router";

export default function BlogSlug() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Blog Page</h1>
      <p>Slug: {slug}</p>
    </div>
  );
}