import Button from "@/common/components/elements/Button";
import Link from "next/link";

const HalamanRegister = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h1>Halaman Register</h1>

      <div style={{ marginBottom: "20px" }}>
        <Button>
          Register
        </Button>
      </div>

      <p style={{ textAlign: "center" }}>
        Sudah punya akun? {" "}
        <Link href="/auth/login" style={{ color: "#0070f3", textDecoration: "underline" }}>
          Login di sini
        </Link>
      </p>
    </div>
  );
};

export default HalamanRegister;