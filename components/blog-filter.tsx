'use client';

import { ChangeEventHandler, useEffect, useState } from 'react';
import { ArrowDownNarrowWideIcon } from 'lucide-react';

import * as Styled from './blog-filter.styled';
import useDebounce from '@/hooks/use-debounce';
import { SORT_OPTIONS, SortBy } from '@/constants';

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
      <Styled.BlogSearchInput
        placeholder='Search'
        value={searchQuery}
        onChange={handleSearch}
      />
      <Styled.BlogSort>
        <select value={sortBy} onChange={handleSort}>
          {SORT_OPTIONS.map(sortOption => (
            <option value={sortOption.value} key={sortOption.value}>
              {sortOption.label}
            </option>
          ))}
        </select>
        <ArrowDownNarrowWideIcon />
      </Styled.BlogSort>
    </Styled.BlogFilter>
  );
};

export default BlogFilter;
