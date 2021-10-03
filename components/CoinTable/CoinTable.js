import { useContext } from 'react';
import {
  CoinName, CoinPrice, Heading, Row, RowElement, RowName,
} from './CoinDataElements';
import Image from 'next/image'
import { checkContext } from '../../contexts/checkContext';

const CoinTable = ({ coinData }) => {
  const { checked } = useContext(checkContext);

  return (
    <>
      <Heading>
        <CoinName>
          <div>Name</div>
        </CoinName>
        <CoinPrice>
          <div>Price</div>
        </CoinPrice>
      </Heading>
      {coinData.map((coin) => {
        return (
          <Row checked={checked}>
            <RowName>
                    <div style={{
                        position: 'relative', width: '30px', height: '30px', margin: '5px',
                    }}
                    >
                        <Image alt="coins" src={`${coin.image}`} layout="fill" objectFit="cover" />
                    </div>
            {coin.symbol.toUpperCase()}</RowName>
                <RowElement>
                <span style={{
                    color: `${coin.current_price > coin.last_price ? '#59981A'
                        : coin.current_price === coin.last_price || !coin.last_price ? '' : '#FF5765'}`, transition: 'color 0.3s ease-out'
                }}>

                    {' '}
                    ${Number(coin.current_price).toFixed(3)}
                </span></RowElement>
          </Row>
        );
      })}
    </>
  );
};

export default CoinTable;
