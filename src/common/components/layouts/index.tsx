import Container from "../elements/Container"
import { HeaderTop } from "./header/HeaderTop"

type layoutsProps = {
  children: React.ReactNode
}

const Layouts = (layoutsProps: layoutsProps) => {
  const { children } = layoutsProps
  return (
    <Container>
      <div>
        <HeaderTop />
        {children}
      </div>
    </Container>
  )
}

export default Layouts;