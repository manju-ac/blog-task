'use client';

import Image from 'next/image';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { skeletonBase } from '../app/global.styled';

export const BlogCard = styled.li<{ $skeleton: boolean }>`
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0 1px 1px #00000020;
  transition: opacity 200ms ease-out, box-shadow 200ms ease-out;

  &:hover {
    opacity: 0.8;
    box-shadow: 1px 1px 6px 1px #00000030;
  }

  ${({ $skeleton }) =>
    $skeleton &&
    css`
      & ${BlogImageWrapper} {
        ${skeletonBase}
      }

      & ${BlogTitle} {
        border-radius: 0.25rem;

        ${skeletonBase}
      }

      & ${BlogTags} > li {
        ${skeletonBase}
      }
    `}
`;

export const BlogLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: currentColor;
`;

export const BlogImageWrapper = styled.div`
  aspect-ratio: 1.2;
  position: relative;
  overflow: hidden;
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(transparent 60%, #000000ea);
    z-index: 1;
    opacity: 0;
    transition: opacity 300ms ease-out;
  }

  &::after {
    content: 'Read More >>>';
    color: #ffffff;
    position: absolute;
    bottom: 0.75rem;
    left: 50%;
    transform: translateX(-50%) translateY(5rem);
    transition: transform 500ms ease-out;
    z-index: 2;
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    &::after {
      transform: translateX(-50%) translateY(0);
    }
  }
`;

export const ImageSkeleton = styled.div``;

export const BlogImage = styled(Image)<{ $isLoaded: boolean }>`
  /* object-fit: cover; */
  transition: scale 300ms ease-out, filter 500ms ease-out;

  ${({ $isLoaded }) =>
    !$isLoaded &&
    css`
      filter: grayscale(0.8) blur(40px);
    `}

  ${BlogCard}:hover & {
    scale: 1.2;
  }
`;

export const BlogInfo = styled.div`
  padding: 1rem 0.5rem;
`;

export const BlogTitle = styled.h4`
  /* min-height: 2.5rem; */
  flex: 1;
  font-weight: 500;
  margin: 0 0 0.75rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const BlogTags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  height: 1.5rem;
  margin: 0 0 0.75rem;

  & > li {
    min-width: 3rem;
    font-size: 0.8rem;
    font-weight: 500;
    padding: 0.15rem 0.5rem;
    border-radius: 1rem;
    background-color: hsl(198 93% 60% / 0.25);
  }
`;

export const DatePublished = styled.p`
  color: #7a7a7a;
  font-size: 0.8rem;
  margin: 0;
`;
