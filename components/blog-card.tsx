'use client';

import { useState } from 'react';

import { Blog } from '@/types';
import * as Styled from './blog-card.styled';

type BlogCardProps = {
  data: Blog;
};

const BlogCard: React.FC<BlogCardProps> = ({ data }) => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <Styled.BlogCard $skeleton={isImageLoading}>
      <Styled.BlogLink
        href={`/${data.title.toLowerCase().replaceAll(' ', '-')}`}
      >
        <Styled.BlogImageWrapper>
          <Styled.BlogImage
            src={data.imageUrl}
            alt={`${data.title} Image`}
            fill
            sizes='100vw, (min-width: 640px) 50vw, (min-width: 768px) 33vw'
            $isLoaded={!isImageLoading}
            onLoad={() => setIsImageLoading(false)}
            onError={() => setIsImageLoading(false)}
          />
        </Styled.BlogImageWrapper>
        <Styled.BlogInfo>
          <Styled.BlogTitle>
            {isImageLoading ? '' : data.title}
          </Styled.BlogTitle>
          <Styled.BlogTags>
            {data.tags.map(tag => (
              <li key={tag}>{isImageLoading ? '' : tag}</li>
            ))}
          </Styled.BlogTags>
          {/* <Styled.DatePublished suppressHydrationWarning>
            {data.createdAt.toLocaleString('default', {
              month: 'long',
              day: '2-digit',
              year: 'numeric'
            })}
          </Styled.DatePublished> */}
        </Styled.BlogInfo>
      </Styled.BlogLink>
    </Styled.BlogCard>
  );
};

export default BlogCard;
