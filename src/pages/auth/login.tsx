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
    <div className="mx-auto p-10 bg-white m-10 rounded-2xl">
      <h1 className="text-black m-4 text-center">Halaman Login</h1>
      <div className="flex justify-center m-4 flex-col gap-10">
        <div className="flex flex-col gap-4">
          <input type="text" placeholder="Masukkan username" className="border-b-2 border-gray-300 p-2 rounded-lg text-black" />
          <input type="password" placeholder="Masukkan Password" className="border-b-2 border-gray-300 p-2 rounded-lg text-black" />
        </div>
        <Button
          onClick={handleLogin}
        >
          Login to Products
        </Button>
      </div>

      <p className="text-black">
        Belum punya akun? {" "}
        <Link href="/auth/register" style={{ color: "#0070f3", textDecoration: "underline" }}>
          Register di sini
        </Link>
      </p>
    </div>
  );
};

export default HalamanLogin;