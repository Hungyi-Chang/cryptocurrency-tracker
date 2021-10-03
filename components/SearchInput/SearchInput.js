import { Input, InputWrapper } from './SearchInputElements';

const SearchInput = ({ ...props }) => {
  return (
    <>
      <InputWrapper>
        <i style={{ color: '#90ADC6' }} className="fas fa-search" />
        <Input {...props} />
      </InputWrapper>
    </>
  );
};

export default SearchInput;
