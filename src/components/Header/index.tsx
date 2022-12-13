import * as S from "./styles";

import logoImg from "assets/images/logo.png";
import Button from "components/Button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <S.Wrapper>
      <Link to="/">
        <img src={logoImg} alt="Logo da confeitaria dona maria" />
      </Link>
      <div>
        <Link to="/">
          <Button minimal>Vagas</Button>
        </Link>
        {pathname !== "/vagas/novo" && (
          <Link to="/vagas/novo">
            <Button color="secondary" size="small">
              Nova vaga
            </Button>
          </Link>
        )}
      </div>
    </S.Wrapper>
  );
};

export default Header;
