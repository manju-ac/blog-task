import { getPosts, getTotalPosts } from '@/utils/post-service';
// import BlogList from '../components/blog-list';
import BlogList from '@/components/blog-list';
import Hero from '../components/hero';

export default async function Home({
  searchParams
}: {
  searchParams: {
    query: string;
    page: string;
    sort: string;
  };
}) {
  const query = searchParams.query;
  const page = +searchParams.page || 1;
  const sortBy = searchParams.sort;

  const totalPosts = await getTotalPosts({ query, page, sortBy });

  const posts = await getPosts({ query, page, sortBy });

  return (
    <>
      <Hero />
      <BlogList posts={posts} totalPosts={totalPosts} />
      {/* <Link href='http://localhost:3000/vita'>Click</Link> */}
    </>
  );
}
