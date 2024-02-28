'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import qs from 'qs';

import { SortBy } from '@/constants';
import { Post } from '@/types';
import BlogFilter from './blog-filter';
import * as Styled from './blog-list.styled';
import PaginationBar from './pagination-bar';
import PostCard from './post-card';

type BlogListProps = {
  posts: Post[];
  totalPosts: number;
};

const getQueryString = (
  searchParams: URLSearchParams,
  {
    query,
    page,
    sortBy
  }: {
    query?: string;
    page?: number;
    sortBy?: string;
  }
) => {
  const searchParamsObj = qs.parse(searchParams.toString());

  if (query || query === '') {
    searchParamsObj.query = query.toString() || undefined;
  }
  if (page) {
    searchParamsObj.page = page.toString();
  }
  if (sortBy) {
    searchParamsObj.sort = sortBy;
  }

  return qs.stringify(searchParamsObj);
};

const BlogList: React.FC<BlogListProps> = ({ posts, totalPosts }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const currentQuery = searchParams.get('query') || '';
  const currentPage = +(searchParams.get('page') || 1);
  const currentSortBy = searchParams.get('sort') || '';

  const updateBlogs = (filter: {
    query?: string;
    page?: number;
    sortBy?: string;
  }) => {
    router.push(`${pathname}?${getQueryString(searchParams, filter)}`, {
      scroll: false
    });
  };

  const handleSearchChange = (query: string) => {
    if (query.toLowerCase() !== currentQuery.toLowerCase()) {
      console.log('search change >>>>', query, currentQuery);
      updateBlogs({ query: query, page: 1 });
    }
  };

  const handleSortChange = (sortBy: SortBy) => {
    console.log('sort change >>>>>>');
    updateBlogs({ sortBy });
  };

  const handlePageChange = (page: number) => {
    console.log('page change >>>>>');
    updateBlogs({ page });
  };

  return (
    <section>
      <BlogFilter
        query={currentQuery}
        onSearch={handleSearchChange}
        sortBy={currentSortBy}
        onSort={handleSortChange}
      />
      {posts.length > 0 ? (
        <>
          <Styled.BlogList>
            {posts.map(post => (
              <PostCard key={post.id} data={post} />
            ))}
          </Styled.BlogList>
          <PaginationBar
            totalItems={totalPosts}
            itemsPerPage={6}
            currentPage={currentPage}
            onChange={handlePageChange}
          />
        </>
      ) : (
        <Styled.BlogListNoResultsMessage>
          No Blog Posts found!
        </Styled.BlogListNoResultsMessage>
      )}
    </section>
  );
};

export default BlogList;
