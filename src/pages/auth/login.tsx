import Button from "@/common/components/elements/Button";
import Link from "next/link";
import { useRouter } from "next/router";

const HalamanLogin = () => {
  const { push } = useRouter();

  const handleLogin = () => {
    localStorage.setItem("isLogin", "true");
    push('/products');
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h1>Halaman Login</h1>

      <div style={{ marginBottom: "20px" }}>
        <Button
          onClick={handleLogin}
        >
          Login (Navigasi ke Product)
        </Button>
      </div>

      <p style={{ textAlign: "center" }}>
        Belum punya akun? {" "}
        <Link href="/auth/register" style={{ color: "#0070f3", textDecoration: "underline" }}>
          Register di sini
        </Link>
      </p>
    </div>
  );
};

export default HalamanLogin;