import { useState } from "react";
import { useRouter } from "next/router";
import Button from "@/common/components/elements/Button";

export default function EditProfile() {
  const [name, setName] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    localStorage.setItem("profile_name", name);
    router.push("/profile");
  };

  return (
    <div>
      <h1>Edit Profile</h1>

      <input
        type="text"
        placeholder="Masukkan nama"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <Button onClick={handleSubmit}>Simpan</Button>
    </div>
  );
}