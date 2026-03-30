import Button from "@/common/components/elements/Button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Profile() {
  const [name, setName] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("profile_name");
    if (savedName) {
      setName(savedName);
    }
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      <p>Nama: {name}</p>
      <Button className="mt-4">
        <Link className=""
          href="/profile/edit">
          Edit Profile
        </Link>
      </Button>
      <Button className="mt-4">
        <Link href="/">
          Home
        </Link>
      </Button>
    </div>
  );
}