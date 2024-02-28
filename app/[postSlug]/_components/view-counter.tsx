'use client';

import { useEffect, useState } from 'react';

import * as Styled from './view-counter.styled';

type ViewCounterProps = {
  postSlug: string;
};

const ViewCounter: React.FC<ViewCounterProps> = ({ postSlug }) => {
  const [totalViews, setTotalViews] = useState<number>();

  useEffect(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/view-counter?post-slug=${postSlug}`,
      {
        method: 'POST'
      }
    )
      .then(response => response.json())
      .then(data => setTotalViews(data))
      .catch(err => {});
  }, [postSlug]);

  return (
    <Styled.ViewCounter $skeleton={totalViews === undefined}>
      {totalViews !== undefined && `${totalViews} views`}
    </Styled.ViewCounter>
  );
};

export default ViewCounter;
