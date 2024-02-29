'use client';

import {
  ChevronFirstIcon,
  ChevronLastIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from 'lucide-react';

import * as Styled from './pagination-bar.styled';

type PaginationBarProps = {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onChange: (page: number) => void;
};

const PaginationBar: React.FC<PaginationBarProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onChange
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    onChange(page);
  };

  return (
    <Styled.PaginationBar>
      <li>
        <Styled.PaginationBarButton
          variant='ghost'
          onClick={handlePageChange.bind(null, 1)}
          disabled={currentPage === 1}
        >
          <ChevronFirstIcon />
        </Styled.PaginationBarButton>
      </li>
      <li>
        <Styled.PaginationBarButton
          variant='ghost'
          onClick={handlePageChange.bind(null, currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeftIcon />
        </Styled.PaginationBarButton>
      </li>
      {[...Array(totalPages)].map((_, index) => (
        <li key={index}>
          <Styled.PaginationBarButton
            variant='ghost'
            onClick={handlePageChange.bind(null, index + 1)}
            $active={currentPage === index + 1}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </Styled.PaginationBarButton>
        </li>
      ))}
      <li>
        <Styled.PaginationBarButton
          variant='ghost'
          onClick={handlePageChange.bind(null, currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ChevronRightIcon />
        </Styled.PaginationBarButton>
      </li>
      <li>
        <Styled.PaginationBarButton
          variant='ghost'
          onClick={handlePageChange.bind(null, totalPages)}
          disabled={currentPage === totalPages}
        >
          <ChevronLastIcon />
        </Styled.PaginationBarButton>
      </li>
    </Styled.PaginationBar>
  );
};

export default PaginationBar;
