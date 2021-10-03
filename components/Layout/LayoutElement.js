import styled from 'styled-components';

export const Container = styled.div`
  height:100%;
  padding: 30px;
  display: grid;
  grid-template-rows: auto auto auto 1fr auto auto; 
  color: ${(props) => { return props.checked ? '#E9EAEC' : null; }};;
  background-color: ${(props) => { return props.checked ? '#0F1624' : '#F8F8F8'; }};;
`;

export const Header = styled.div`
   position: relative; 
   display: flex;
   align-items: center;
   color: #90ADC6;
   font-size: 2.1rem;
   font-weight: 600;
   justify-content: center;
   margin: 5px auto 0px;
`;

export const Main = styled.div`
  min-height: 100vh;
`;

export const Toggle = styled.input`
     position: relative;
     margin: 0px auto 0px ;
     opacity: 0;
`;

export const Label = styled.label`
     align-items:center;
     width: 50px;
     background-color: #111;
     justify-content: space-between;
     position: relative;
     display: flex;
     height: 26px; 
     padding: 5px;
     margin: 0 auto 15px;
     border-radius: 50px;
     cursor: pointer;
     background-color: ${(props) => { return props.checked ? '#90ADC6' : null; }};;
`;

export const Ball = styled.div`
   width: 22px;
   height: 22px;
   position: absolute;
   top: 2px;
   left: 2px;
   border-radius: 52%;
   background-color: #fff;
   transition: transform 0.2s linear;
   transform: ${(props) => { return props.checked ? 'translateX(24px)' : null; }};;
`;

export const Footer = styled.div`
   text-align: center;
   align-items: center;
   font-size: 1.2rem;
   margin-top: 22px;

`;
