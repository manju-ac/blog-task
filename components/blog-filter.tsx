'use client';

import { ArrowDownNarrowWideIcon } from 'lucide-react';
import { ChangeEventHandler, useEffect, useState } from 'react';

import { SORT_OPTIONS, SortBy } from '@/constants';
import useDebounce from '@/hooks/use-debounce';
import * as Styled from './blog-filter.styled';

type BlogFilterProps = {
  query: string;
  onSearch: (query: string) => void;
  sortBy: string;
  onSort: (sortBy: SortBy) => void;
};

const BlogFilter: React.FC<BlogFilterProps> = ({
  query,
  onSearch,
  sortBy,
  onSort
}) => {
  const [searchQuery, setSearchQuery] = useState(query);

  const debouncedSearchQuery = useDebounce(searchQuery);

  useEffect(() => {
    onSearch(debouncedSearchQuery);
  }, [debouncedSearchQuery, onSearch]);

  const handleSearch: ChangeEventHandler<HTMLInputElement> = e => {
    const searchQuery = e.target.value;
    setSearchQuery(searchQuery);
  };

  const handleSort: ChangeEventHandler<HTMLSelectElement> = e => {
    onSort(e.target.value as SortBy);
  };

  return (
    <Styled.BlogFilter>
      <Styled.BlogFilterSearchInput
        placeholder='Search'
        value={searchQuery}
        onChange={handleSearch}
      />
      <Styled.BlogFilterSort>
        <select value={sortBy} onChange={handleSort}>
          {SORT_OPTIONS.map(sortOption => (
            <option value={sortOption.value} key={sortOption.value}>
              {sortOption.label}
            </option>
          ))}
        </select>
        <ArrowDownNarrowWideIcon />
      </Styled.BlogFilterSort>
    </Styled.BlogFilter>
  );
};

export default BlogFilter;
