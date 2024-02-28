import { CalendarDaysIcon } from 'lucide-react';
import { notFound } from 'next/navigation';

import AnimatedImage from '@/components/ui/animated-image';
import Avatar from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';
import { getFormattedDate } from '@/utils/date';
import { getPostBySlug } from '@/utils/post-service';
import ViewCounter from './_components/view-counter';
import * as Styled from './page.styled';

const BlogPostPage = async ({ params }: { params: { postSlug: string } }) => {
  const post = await getPostBySlug(params.postSlug);

  if (!post) {
    return notFound();
  }

  return (
    <>
      <Styled.PostPageInfo>
        <Styled.PostPageTitle>{post.title}</Styled.PostPageTitle>
        <Styled.PostPageTags>
          {post.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </Styled.PostPageTags>

        <Styled.PostPageAdditionalInfo>
          <Styled.PostPageAuthor>
            <Avatar src={post.author.imageUrl!} size='sm' />
            <span>{post.author.name}</span>
          </Styled.PostPageAuthor>
          <Styled.PostPageDateAndViews>
            <Styled.PostPagePublishedDate>
              <Icon icon={CalendarDaysIcon} size='sm' />
              {getFormattedDate(post.createdAt)}
            </Styled.PostPagePublishedDate>
            <ViewCounter postSlug={params.postSlug} />
          </Styled.PostPageDateAndViews>
        </Styled.PostPageAdditionalInfo>
      </Styled.PostPageInfo>
      <Styled.PostPageImageWrapper>
        <AnimatedImage
          src={post.imageUrl}
          alt={`${post.title} Image`}
          fill
          sizes='100vw'
        />
      </Styled.PostPageImageWrapper>
      <Styled.PostPageContent
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </>
  );
};

export default BlogPostPage;
