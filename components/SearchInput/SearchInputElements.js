import styled from 'styled-components';

export const InputWrapper = styled.div`
   display: flex;
   align-items: center;
   background-color:#eef3f6;
   border-radius: 8px;
   padding-left: 16px;
   margin:20px 0;
`;

export const Input = styled.input`
   border: none;
   width: 100%;
   height: 100%;
   background-color: transparent;
   ::placeholder {
    color: #90ADC6;
  }
   padding: 16px;
   &:focus {
        outline: none;

    }
`;
