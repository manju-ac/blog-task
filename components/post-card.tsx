'use client';

import { CalendarDaysIcon, EyeIcon, TagIcon, UserIcon } from 'lucide-react';
import { useState } from 'react';

import { Post } from '@/types';
import { getFormattedDate } from '@/utils/date';
import * as Styled from './post-card.styled';
import Icon from './ui/icon';

type PostCardProps = {
  data: Post;
  variant?: 'sm' | 'lg';
};

const PostCard: React.FC<PostCardProps> = ({ data, variant }) => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <Styled.PostCard $skeleton={isImageLoading} $variant={variant}>
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
          <Styled.PostCardTitle>
            {isImageLoading ? '' : data.title}
          </Styled.PostCardTitle>
          <Styled.PostCardTags>
            {data.tags.map(tag => (
              <li key={tag}>
                {isImageLoading ? (
                  ''
                ) : (
                  <>
                    <Icon icon={TagIcon} size='sm' />
                    {tag}
                  </>
                )}
              </li>
            ))}
          </Styled.PostCardTags>
          <Styled.PostCardAuthor>
            {isImageLoading ? (
              ''
            ) : (
              <>
                <Icon icon={UserIcon} size='sm' />
                {data.author.name}
              </>
            )}
          </Styled.PostCardAuthor>
          <Styled.PostCardAdditionalInfo>
            <Styled.PostCardPublishedDate suppressHydrationWarning>
              {isImageLoading ? (
                ''
              ) : (
                <>
                  <Icon icon={CalendarDaysIcon} size='sm' />
                  {getFormattedDate(data.createdAt)}
                </>
              )}
            </Styled.PostCardPublishedDate>
            <Styled.PostCardTotalViews>
              {isImageLoading ? (
                ''
              ) : (
                <>
                  <Icon icon={EyeIcon} size='sm' />
                  {data.totalViews || 0}
                </>
              )}
            </Styled.PostCardTotalViews>
          </Styled.PostCardAdditionalInfo>
        </Styled.PostCardInfo>
      </Styled.PostCardLink>
    </Styled.PostCard>
  );
};

export default PostCard;
