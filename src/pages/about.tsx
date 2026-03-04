import Container from "@/common/components/elements/Container";
import About from "@/modules/about";
import { NextPage } from "next";

const about: NextPage = (props) => {
  return (
    <>
      <Container data-aos="fade-up">
        <About />
      </Container>
    </>
  );
};


export default about;