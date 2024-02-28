import { getPosts, getTotalPosts } from '@/utils/post-service';
import BlogList from '../components/blog-list';
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

  console.log(page, sortBy, query);

  const totalBlogs = await getTotalPosts({ query, page, sortBy });

  const blogs = await getPosts({ query, page, sortBy });

  return (
    <>
      <Hero />
      <BlogList blogs={blogs} totalBlogs={totalBlogs} />
    </>
  );
}
