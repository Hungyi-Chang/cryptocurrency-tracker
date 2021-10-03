import Stack from '@mui/material/Stack';
import Link from 'next/link'
import PaginationItem from '@mui/material/PaginationItem';
import { StyledPagination } from './PaginationElement';

const PaginationComponent = ({checked}) => {
  return (
    <Stack
      spacing={2}
    >
      <StyledPagination
        size="large"
        count={10}
        color="primary"
        renderItem={(item) => {
          return (
            <Link href={`/coinList/${item.page}`}>
              <PaginationItem
                {...item}
                sx={{ fontSize: 14, color: `${checked ? '#fff' : 'black'}` }}
              />
            </Link>
            
          );
        }}
      />
    </Stack>
  );
};

export default PaginationComponent;
