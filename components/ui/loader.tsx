import { LoaderIcon } from 'lucide-react';
import * as Styled from './loader.styled';

const Loader = () => {
  return (
    <Styled.LoaderWrapper>
      <LoaderIcon size={60} />
    </Styled.LoaderWrapper>
  );
};

export default Loader;
