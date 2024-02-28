import AnimatedImage from './animated-image';
import * as Styled from './avatar.styled';

type AvatarProps = {
  src: string;
  size: 'sm' | 'md';
  className?: string;
};

const Avatar: React.FC<AvatarProps> = ({ src, size, className }) => {
  return (
    <Styled.AvatarWrapper $size={size} className={className}>
      <AnimatedImage src={src} alt='Avatar' fill sizes={`30vw`} />
    </Styled.AvatarWrapper>
  );
};

export default Avatar;
