import Container from "../elements/Container"
import { HeaderTop } from "./header/HeaderTop"
import Footer from "./partials/Footer"

type layoutsProps = {
  children: React.ReactNode
}

const Layouts = (layoutsProps: layoutsProps) => {
  const { children } = layoutsProps
  return (
    <Container>
      <div className="flex flex-col min-h-screen">
        <HeaderTop />
        {children}
        <Footer />
      </div>
    </Container>
  )
}

export default Layouts;