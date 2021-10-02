import Stack from '@mui/material/Stack';
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
            <PaginationItem
              {...item}
              sx={{ fontSize: 14, color:`${checked? '#fff': 'black'}`} }
            />
          );
        }}
      />
    </Stack>
  );
};

export default PaginationComponent;
