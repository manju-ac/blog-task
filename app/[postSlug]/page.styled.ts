'use client';

import Image from 'next/image';
import styled from 'styled-components';

export const PostPageInfo = styled.section`
  margin-bottom: 3rem;
`;

export const PostPageTitle = styled.h1`
  font-size: 1.75rem;
  margin-bottom: 1rem;
`;

export const PostPageTags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;

  & > li {
    padding: 0.2rem 0.5rem;
    border-radius: 0.5rem;
    box-shadow: var(--box-shadow-sm);
  }
`;

export const PostPageAdditionalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: space-between;
  color: #7a7a7a;
  font-weight: 400;

  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const PostPageAuthor = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;

  & span {
    margin: 0;
  }
`;

export const PostPageDateAndViews = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;

  @media (min-width: 640px) {
    /* flex-direction: row; */
  }
`;

export const PostPageImageWrapper = styled.div`
  max-width: 50rem;
  margin: 0 auto 2rem;
  aspect-ratio: 16/9;
  position: relative;
  overflow: hidden;
`;

export const PostPageImage = styled(Image)`
  object-fit: cover;
`;

export const PostPageContent = styled.section`
  h2 {
    margin: 3rem 0;
  }

  ul {
    padding: 0 0 0 2rem;
  }
`;
