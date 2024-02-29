'use client';

import { CalendarDaysIcon, EyeIcon, TagIcon, UserIcon } from 'lucide-react';
import { useState } from 'react';

import { Post } from '@/types';
import { getFormattedDate } from '@/utils/date';
import * as Styled from './post-card.styled';

type PostCardProps = {
  data: Post;
  variant?: 'sm' | 'lg';
};

const PostCard: React.FC<PostCardProps> = ({ data, variant }) => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <Styled.PostCard $variant={variant}>
      <Styled.PostCardLink
        href={`/${encodeURI(data.title.toLowerCase().replaceAll(' ', '-'))}`}
      >
        <Styled.PostCardImageWrapper>
          <Styled.PostCardImage
            src={data.imageUrl}
            alt={`${data.title} Image`}
            fill
            sizes='100vw, (min-width: 640px) 50vw, (min-width: 768px) 33vw'
            $isLoaded={!isImageLoading}
            onLoad={() => setIsImageLoading(false)}
            onError={() => setIsImageLoading(false)}
          />
        </Styled.PostCardImageWrapper>
        <Styled.PostCardInfo>
          <Styled.PostCardAvatar src={data.author.imageUrl!} size='sm' />
          {isImageLoading ? (
            <>
              <Styled.PostCardTitleSkeleton />
              <Styled.PostCardTitleSkeleton />
            </>
          ) : (
            <Styled.PostCardTitle>{data.title}</Styled.PostCardTitle>
          )}
          <Styled.PostCardTags>
            {data.tags.map(tag => (
              <li key={tag}>
                {isImageLoading ? (
                  <Styled.PostTagSkeleton />
                ) : (
                  <Styled.PostCardTag icon={TagIcon} label={tag} />
                )}
              </li>
            ))}
          </Styled.PostCardTags>
          {isImageLoading ? (
            <Styled.PostCardAuthorSkeleton />
          ) : (
            <Styled.PostCardAuthor icon={UserIcon} label={data.author.name} />
          )}
          <Styled.PostCardAdditionalInfo>
            {isImageLoading ? (
              <Styled.PostCardDateViewsSkeleton />
            ) : (
              <Styled.PostCardDateViews
                icon={CalendarDaysIcon}
                label={getFormattedDate(data.createdAt)}
              />
            )}
            {isImageLoading ? (
              <Styled.PostCardDateViewsSkeleton />
            ) : (
              <Styled.PostCardDateViews
                icon={EyeIcon}
                label={data.totalViews || 0}
              />
            )}
          </Styled.PostCardAdditionalInfo>
        </Styled.PostCardInfo>
      </Styled.PostCardLink>
    </Styled.PostCard>
  );
};

export default PostCard;
