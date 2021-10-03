import styled from 'styled-components';

export const CoinPrice = styled.button`
   flex: 1;
`;

export const CoinName = styled.button`
   flex: 1;
   text-align: left;
`;

export const Heading = styled.div`
    display: flex;
    ${CoinName},${CoinPrice}{
        border: none;
        background-color: transparent;
        color: #90ADC6;
        padding: 15px;
        cursor: pointer;
        font-weight: 500;
    }
`;

export const RowElement = styled.div`
   flex: 1;
`;

export const RowName = styled.div`
   flex: 1;
   text-align: left;
   display: flex;
   align-items: center;
`;

export const Row = styled.div`
   display: flex;
   cursor: pointer;
   align-items: center;
   text-align: center;
   padding: 20px;
   color: black;
   background-color: ${(props) => { return props.checked ? '#E4E6ED' : '#ffffff'; }};
   border-radius: 8px;
   margin-bottom: 16px;
   box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
   font-weight: 500;
   transition: transform 200ms ease-in-out, box-shadow 200ms ease-in-out;
   &:hover{
       transform: translateY(-4px);
       box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.15);
    }
`;
