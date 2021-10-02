/* eslint-disable jsx-a11y/label-has-associated-control */
import Image from 'next/image';

import bitcoin from '../../public/image/bitcoin.png';
import PaginationComponent from '../PaginationComponent/PagenationComponent';
import {
  Container, Main, Footer, Header, Toggle, Ball, Label, Div,
} from './LayoutElement';
// import Logo from '../../public/image/Logo.png';

const Layout = ({ children, checked, setDarkMode }) => {
  return (
    <Div checked={checked}>
      <Container checked={checked}>
        <Header>
          <div style={{
            position: 'relative', width: '36px', height: '36px', margin: '5px',
          }}
          >
            <Image alt="Mountains" src={bitcoin} layout="fill" objectFit="cover" />
          </div>
          Cryptocurrency Tracker
        </Header>
        <Toggle type="checkbox" id="checkbox" onChange={() => { setDarkMode(); }} />
        <Label htmlFor="checkbox" checked={checked}>
          <i style={{ color: '#f1c40f' }} className="fas fa-moon" />
          <i style={{ color: '#f39c12' }} className="fas fa-sun" />
          <Ball checked={checked} />
        </Label>

        <Main>{children}</Main>
        <PaginationComponent checked={checked} />
        <Footer>Copyright &copy; cryptocurrency tracker</Footer>
      </Container>
    </Div>
  );
};

export default Layout;
