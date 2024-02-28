import { Container } from '../app/global.styled';
import * as Styled from './header.styled';

const Header = () => {
  return (
    <Styled.Header>
      <Container>
        <Styled.Logo href='/'>Blog</Styled.Logo>
      </Container>
    </Styled.Header>
  );
};

export default Header;
