import * as Styled from './nav-routes.styled';

type NavRoutesProps = {
  onClick?: () => void;
};

const NavRoutes: React.FC<NavRoutesProps> = ({ onClick }) => {
  return (
    <Styled.NavRoutes>
      <ul>
        <li>
          <Styled.NavRoutesLink href='/top-posts' onClick={onClick}>
            Top Posts
          </Styled.NavRoutesLink>
        </li>
      </ul>
    </Styled.NavRoutes>
  );
};

export default NavRoutes;
