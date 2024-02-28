'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import qs from 'qs';

import { SortBy } from '@/constants';
import { Blog } from '@/types';
import BlogCard from './blog-card';
import BlogFilter from './blog-filter';
import * as Styled from './blog-list.styled';
import PaginationBar from './pagination-bar';

type BlogListProps = {
  blogs: Blog[];
  totalBlogs: number;
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
  console.log('UPDATEEEE', query, page, sortBy);

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

const BlogList: React.FC<BlogListProps> = ({ blogs, totalBlogs }) => {
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
    <Styled.BlogListWrapper>
      <BlogFilter
        query={currentQuery}
        onSearch={handleSearchChange}
        sortBy={currentSortBy}
        onSort={handleSortChange}
      />
      {blogs.length > 0 ? (
        <>
          <Styled.BlogList>
            {blogs.map(blog => (
              <BlogCard key={blog.id} data={blog} />
            ))}
          </Styled.BlogList>
          <PaginationBar
            totalItems={totalBlogs}
            itemsPerPage={6}
            currentPage={currentPage}
            onChange={handlePageChange}
          />
        </>
      ) : (
        <Styled.NoResultsMessage>No Blog Posts found!</Styled.NoResultsMessage>
      )}
    </Styled.BlogListWrapper>
  );
};

export default BlogList;
