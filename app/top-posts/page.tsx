import PostCard from '@/components/post-card';
import { getTopPosts } from '@/utils/post-service';
import * as Styled from './page.styled';

export const dynamic = 'force-dynamic';

const TopVisitedPostsPage = async () => {
  const posts = await getTopPosts();

  return (
    <div>
      <Styled.TopVisitedPostsPage>
        {posts.length > 0 ? (
          <>
            {posts.map(post => (
              <PostCard key={post.id} data={post} variant='lg' />
            ))}
          </>
        ) : (
          <p>No Blog Posts found!</p>
        )}
      </Styled.TopVisitedPostsPage>
    </div>
  );
};

export default TopVisitedPostsPage;
