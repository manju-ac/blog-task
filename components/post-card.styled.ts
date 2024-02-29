'use client';

import Image from 'next/image';
import Link from 'next/link';
import styled, { css, keyframes } from 'styled-components';

import { Skeleton } from '../app/global.styled';
import Avatar from './ui/avatar';
import Icon from './ui/icon';
import { screen } from '@/app/mixins.styled';

const edgeAnimationKeyFrames = keyframes`
  100% {
    --rotate: 360deg
  }
`;

export const PostCard = styled.li<{
  $variant?: 'sm' | 'lg';
}>`
  transition: opacity 200ms ease-out, box-shadow 200ms ease-out,
    border-radius 200ms ease-out;
  position: relative;
  background-color: #ffffff;

  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    opacity: 0;

    background-image: repeating-conic-gradient(
      from var(--rotate, 30deg),
      hsl(var(--color-accent)) 25%,
      transparent,
      hsl(var(--color-accent)) 75%
    );
    border-radius: inherit;
    z-index: -1;
    transition: opacity 200ms;
  }

  &:hover {
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

    &::before {
      opacity: 1;
      animation: ${edgeAnimationKeyFrames} 7s linear infinite;
    }
  }

  ${({ $variant }) =>
    $variant === 'lg' &&
    screen['sm']`
    ${css`
      & ${PostCardLink} {
        display: flex;
        column-gap: 2rem;
        border-top-right-radius: initial;
        border-bottom-left-radius: inherit;

        & ${PostCardImageWrapper} {
          width: 40%;
          aspect-ratio: 16/9;
          border-top-right-radius: initial;
          border-bottom-left-radius: inherit;
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
    `}
  `}
`;

export const PostCardLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: currentColor;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
`;

export const PostCardImageWrapper = styled.div`
  aspect-ratio: 1.2;
  position: relative;
  overflow: hidden;
  isolation: isolate;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;

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
    color: color-mix(in lab, hsl(var(--color-accent)), white 20%);
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

export const PostCardTitleSkeleton = styled(Skeleton).attrs({ as: 'h4' })`
  height: 1.25rem;
  border-radius: 0.25rem;
  margin: 0 0 0.2rem;

  &:last-of-type {
    margin: 0 0 0.5rem;
  }
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
`;

export const PostTagSkeleton = styled(Skeleton)`
  height: 1.75rem;
  min-width: 5rem;
  border-radius: 1rem;
`;

export const PostCardTag = styled(Icon).attrs({ size: 'sm' })`
  font-weight: 500;
  padding: 0.15rem 0.5rem;
  border-radius: 1rem;
  background-color: hsl(var(--color-accent) / 0.25);
`;

export const PostCardAuthorSkeleton = styled(Skeleton)`
  height: 1.5rem;
  margin: 1rem 0 0.75rem;
`;

export const PostCardAuthor = styled(Icon).attrs({ size: 'sm' })`
  font-size: 0.9rem;
  font-weight: 500;
  color: hsl(var(--color-gray-600));
  display: flex;
  align-items: center;
  margin: 1rem 0 0.75rem;
`;

export const PostCardAdditionalInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PostCardDateViewsSkeleton = styled(Skeleton)`
  height: 1.5rem;
  width: 35%;
`;

export const PostCardDateViews = styled(Icon).attrs({ size: 'sm' })`
  color: hsl(var(--color-gray-600));
  margin: 0;
`;
