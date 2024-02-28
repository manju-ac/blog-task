import { getPostBySlug } from '@/utils/post-service';
import * as Styled from './page.styled';
import { notFound } from 'next/navigation';
import ViewCounter from './_components/view-counter';

const BlogPostPage = async ({ params }: { params: { postSlug: string } }) => {
  const post = await getPostBySlug(params.postSlug);

  if (!post) {
    return notFound();
  }

  return (
    <>
      <Styled.PostInfo>
        <Styled.PostTitle>{post.title}</Styled.PostTitle>
        <Styled.PostTags>
          {post.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </Styled.PostTags>
        <Styled.AdditionalPostInfo>
          {/* {post.createdAt.toLocaleString('default', {
            month: 'long',
            day: '2-digit',
            year: 'numeric'
          })} */}
          • <ViewCounter postSlug={params.postSlug} />
        </Styled.AdditionalPostInfo>
      </Styled.PostInfo>
      <Styled.PostImageWrapper>
        <Styled.PostImage
          src={post.imageUrl}
          alt={`${post.title} Image`}
          fill
          sizes='100vw'
        />
      </Styled.PostImageWrapper>
      <Styled.PostContent dangerouslySetInnerHTML={{ __html: post.content }} />
    </>
  );
};

export default BlogPostPage;
