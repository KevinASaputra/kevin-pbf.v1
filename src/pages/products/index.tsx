import Container from "@/common/components/elements/Container"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const products = () => {
  const [isLogin, setIsLogin] = useState(false);
  const { push } = useRouter();
  useEffect(() => {
    const login = localStorage.getItem("isLogin");

    if (!login) {
      push('/auth/login');
    }
  }, []);
  return (

    <Container data-aos="fade-up">
      <div>
        <h1>Products</h1>
      </div>
    </Container>
  );
};

export default products;