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
      <Styled.PaginationButton
        variant='ghost'
        onClick={handlePageChange.bind(null, 1)}
        disabled={currentPage === 1}
      >
        <ChevronFirstIcon />
      </Styled.PaginationButton>
      <Styled.PaginationButton
        variant='ghost'
        onClick={handlePageChange.bind(null, currentPage - 1)}
        disabled={currentPage === 1}
      >
        <ChevronLeftIcon />
      </Styled.PaginationButton>
      {[...Array(totalPages)].map((_, index) => (
        <Styled.PaginationButton
          variant='ghost'
          key={index}
          onClick={handlePageChange.bind(null, index + 1)}
          $active={currentPage === index + 1}
          disabled={currentPage === index + 1}
        >
          {index + 1}
        </Styled.PaginationButton>
      ))}
      <Styled.PaginationButton
        variant='ghost'
        onClick={handlePageChange.bind(null, currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <ChevronRightIcon />
      </Styled.PaginationButton>
      <Styled.PaginationButton
        variant='ghost'
        onClick={handlePageChange.bind(null, totalPages)}
        disabled={currentPage === totalPages}
      >
        <ChevronLastIcon />
      </Styled.PaginationButton>
    </Styled.PaginationBar>
  );
};

export default PaginationBar;
