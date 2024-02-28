'use client';

import styled from 'styled-components';

export const BlogFilter = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 2rem;

  & > :last-child {
    align-self: flex-end;
  }

  @media (min-width: 640px) {
    flex-direction: row;
    gap: 2rem;

    & > :first-child {
      flex: 3;
    }

    & > :last-child {
      flex: 1.5;
    }
  }
`;

export const BlogFilterSearchInput = styled.input`
  padding: 0.5rem;
  font: inherit;
  border-radius: 0.5rem;
  border: 1px solid #00000030;

  &:focus {
    outline: none;
    border-color: #000000ea;
  }
`;

export const BlogFilterSort = styled.div`
  position: relative;

  select {
    width: 100%;
    appearance: none;
    padding: 0.5rem 3rem 0.5rem 0.5rem;
    font: inherit;
    border-radius: 0.5rem;
    border: 1px solid #00000030;
    background-color: #ffffff;

    &:focus {
      outline: none;
      border-color: #000000ea;
    }
  }

  & > :last-child {
    position: absolute;
    right: 0.25rem;
    top: 50%;
    translate: 0 -50% 0;
    pointer-events: none;
  }
`;
