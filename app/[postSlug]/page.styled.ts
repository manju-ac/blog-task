'use client';

import Image from 'next/image';
import styled from 'styled-components';

export const PostInfo = styled.section`
  margin-bottom: 3rem;
`;

export const PostTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const PostTags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  & > li {
    padding: 0.2rem 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid #000030;
  }
`;

export const AdditionalPostInfo = styled.p`
  color: #7a7a7a;
  font-weight: 400;
`;

export const PostImageWrapper = styled.div`
  max-width: 50rem;
  margin: 0 auto 2rem;
  aspect-ratio: 16/9;
  position: relative;
  overflow: hidden;
`;

export const PostImage = styled(Image)`
  object-fit: cover;
`;

export const PostContent = styled.section``;
