import * as S from "./styles";

import backgroundImg from "assets/images/sad-cake-background.png";
import Heading from "components/Heading";
import Button from "components/Button";
import { Link } from "react-router-dom";

export const NotFound = () => (
  <S.Wrapper>
    <img src={backgroundImg} alt="" />
    <Heading size="xlarge" weight="bold">
      Página não encontrada
    </Heading>
    <Link to="/">
      <Button minimal color="secondary" size="small">
        Ir para página inicial
      </Button>
    </Link>
  </S.Wrapper>
);
