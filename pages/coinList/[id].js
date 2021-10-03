/* eslint-disable max-len */
import { useEffect, useState, useRef } from 'react';
import { formatCoinName } from '../../utils/formatTools';
import CoinTable from '../../components/CoinTable/CoinTable';

const CoinList = ({ coinList }) => {
  const [coinData, setCoinData] = useState([]);
  const [preData, setPreData] = useState(false);
  const ws = useRef(null);
  const isBrowser = typeof window !== 'undefined';

  useEffect(() => {
    ws.current = new WebSocket('wss://stream.binance.com:9443/ws');

    if (coinList) {
      setCoinData(coinList);
      setPreData(true);
    }
    return () => {
      setCoinData(undefined);
      ws.current.close(1000, 'unknown');
    };
  }, [coinList]);

  useEffect(() => {
    if (isBrowser && preData && ws.current !== null) {
      // setWsInstance(ws);
      const msg = {
        method: 'SUBSCRIBE',
        params:
                    [
                      '!ticker@arr',
                    ],
        id: 1,
      };
      const jsonMsg = JSON.stringify(msg);
      ws.current.onopen = () => {
        // console.log('[open] Connection established');
        ws.current.send(jsonMsg);
      };
      ws.current.onmessage = (event) => {
        const coinObject = JSON.parse(event.data);
        if (Array.isArray(coinObject)) {
          const filteredCoinData = coinObject.filter((cur) => {
            return cur.s.substr(cur.s.length - 3) === 'USD' || cur.s.substr(cur.s.length - 4) === 'USDT';
          });
          const coinDataCopy = [...coinData];
          for (let i = 0; i < coinDataCopy.length; i += 1) {
            const coinIndex = filteredCoinData.findIndex(
              (cur) => { return coinDataCopy[i].symbol.toUpperCase() === formatCoinName(cur.s); },
            );
            if (coinIndex >= 0) {
              coinDataCopy[i].last_price = coinDataCopy[i].current_price;
              coinDataCopy[i].current_price = filteredCoinData[coinIndex].c;
            }
          }
          setCoinData(coinDataCopy);
          setPreData(false);
        }
      };
    }
  }, [isBrowser, preData, coinData]);
  return (
    <>
      <CoinTable coinData={coinData} />
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
      { params: { id: '4' } },
      { params: { id: '5' } },
      { params: { id: '6' } },
      { params: { id: '7' } },
      { params: { id: '8' } },
      { params: { id: '9' } },
      { params: { id: '10' } },
    ],
    fallback: false,
  };
}
export const getStaticProps = async ({ params }) => {
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=35&page=';

  const res = await fetch(`${url}${params.id ? params.id : 1}&sparkline=false`);

  const coinList = await res.json();

  return {
    props: {
      coinList,
    },
  };
};

export default CoinList;

// {/* <ul>
//   {coinData.length > 0 && coinData.map((data) => {
//     return (
//       <li key={data.symbol}>

//         {/* {formatCoinName(data.s)} */}

//         {data.symbol.toUpperCase()}
//         : $

//       </li>
//     );
//   })}
// </ul> */}
