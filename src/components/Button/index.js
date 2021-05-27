import { Container } from "./styles";

function Button({ name, ...rest }) {
  return (
    <Container background={"var(--cor-destaque)"} type="submit" {...rest}>
      {name}
    </Container>
  );
}

export default Button;
