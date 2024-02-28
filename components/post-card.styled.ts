'use client';

import Image from 'next/image';
import Link from 'next/link';
import styled, { css } from 'styled-components';

import { skeletonBase } from '../app/global.styled';
import Avatar from './ui/avatar';

export const PostCard = styled.li<{
  $skeleton: boolean;
  $variant?: 'sm' | 'lg';
}>`
  overflow: hidden;
  transition: opacity 200ms ease-out, box-shadow 200ms ease-out,
    border-radius 200ms ease-out;

  &:hover {
    box-shadow: 1px 1px 6px 1px #00000030;
    border-radius: 1rem;

    ${() => css`
      ${PostCardImageWrapper} {
        &::before {
          opacity: 1;
        }

        &::after {
          transform: translateX(-50%) translateY(0);
        }
      }
    `}
  }

  ${({ $skeleton }) =>
    $skeleton &&
    css`
      & ${PostCardImageWrapper} {
        ${skeletonBase}
      }

      & ${PostCardTitle} {
        ${skeletonBase}
        height: 1.25rem;
        border-radius: 0.25rem;
      }

      & ${PostCardTags} > li {
        ${skeletonBase}
        height: 1.75rem;
        min-width: 5rem;
      }

      & ${PostCardAuthor} {
        ${skeletonBase}
        height: 1.5rem;
      }

      & ${PostCardPublishedDate} {
        ${skeletonBase}
        height: 1.5rem;
        width: 35%;
      }

      & ${PostCardTotalViews} {
        ${skeletonBase}
        height: 1.5rem;
        width: 35%;
      }
    `}

  ${({ $variant }) =>
    $variant === 'lg' &&
    css`
      @media (min-width: 640px) {
        & ${PostCardLink} {
          display: flex;
          column-gap: 2rem;

          & ${PostCardImageWrapper} {
            width: 40%;
            aspect-ratio: 16/9;
          }

          & ${PostCardInfo} {
            flex: 1;

            & > ${PostCardAvatar} {
              left: -6rem;
              bottom: 1rem;
              top: initial;
            }
          }
        }
      }
    `}
`;

export const PostCardLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: currentColor;
`;

export const PostCardImageWrapper = styled.div`
  aspect-ratio: 1.2;
  position: relative;
  overflow: hidden;
  isolation: isolate;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(transparent 70%, #000000ea);
    z-index: 1;
    opacity: 0;
    transition: opacity 300ms ease-out;
  }

  &::after {
    content: 'Read More ›››';
    font-size: 0.8rem;
    width: max-content;
    color: #ffffff;
    position: absolute;
    bottom: 0.75rem;
    left: 50%;
    transform: translateX(-50%) translateY(5rem);
    transition: transform 300ms ease-out;
    z-index: 2;
  }
`;

export const PostCardImage = styled(Image)<{ $isLoaded: boolean }>`
  object-fit: cover;
  transition: scale 300ms ease-out, filter 500ms ease-out;

  ${({ $isLoaded }) =>
    !$isLoaded &&
    css`
      scale: 1.2;
      filter: grayscale(0.8) blur(40px);
    `}

  ${PostCard}:hover & {
    scale: 1.2;
  }
`;

export const PostCardInfo = styled.div`
  padding: 2rem 0.5rem 1rem;
  position: relative;
`;

export const PostCardAvatar = styled(Avatar).attrs({
  size: 'sm'
})`
  position: absolute;
  top: -1.5rem;
  right: 1rem;
`;

export const PostCardTitle = styled.h4`
  flex: 1;
  font-weight: 500;
  margin: 0 0 0.75rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PostCardTags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 0 0 0.75rem;

  & > li {
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    font-weight: 500;
    padding: 0.15rem 0.5rem;
    border-radius: 1rem;
    background-color: hsl(198 93% 60% / 0.25);
  }
`;

export const PostCardAuthor = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  color: #4a4a4a;
  display: flex;
  align-items: center;
  margin: 1rem 0 0.75rem;
`;

export const PostCardAdditionalInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PostCardPublishedDate = styled.p`
  display: flex;
  align-items: center;
  color: #7a7a7a;
  font-size: 0.8rem;
  margin: 0;
`;

export const PostCardTotalViews = styled.p`
  display: flex;
  align-items: center;
  color: #7a7a7a;
  font-size: 0.8rem;
  margin: 0;
`;
