import Stack from '@mui/material/Stack';
import {useEffect} from 'react';
import Link from 'next/link'
import PaginationItem from '@mui/material/PaginationItem';
import { StyledPagination } from './PaginationElement';
import { useRouter } from 'next/router'

const PaginationComponent = ({checked}) => {
  const router = useRouter()
  const page = router.query.id;
  useEffect(() => {
    console.log(page);
  })
  return (
    <Stack
      spacing={2}
    >
      <StyledPagination
        size="large"
        count={10}
        page= {Number(page)}
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
