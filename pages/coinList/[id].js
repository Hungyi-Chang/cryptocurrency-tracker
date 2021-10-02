import { useEffect, useState } from 'react';
import Image from 'next/image';
import { formatCoinName } from '../../utils/formatTools';

const CoinList = ({ coinList }) => {
  const [coinData, setCoinData] = useState([]);
  const [preData, setPreData] = useState(false);
  const isBrowser = typeof window !== 'undefined';

  useEffect(() => {
    if (coinList) {
      setCoinData(coinList);
      setPreData(true);
    }
  }, [coinList]);

  useEffect(() => {
    const ws = new WebSocket('wss://stream.binance.com:9443/ws');
    if (isBrowser && preData) {
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
      ws.onopen = () => {
        // console.log('[open] Connection established');
        ws.send(jsonMsg);
      };
      ws.onmessage = (event) => {
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
              coinDataCopy[i].current_price = filteredCoinData[coinIndex].c;
            }
          }
          setCoinData(coinDataCopy);
          setPreData(false);
        }
      };
    }
    return () => {
      ws.onclose = (event) => {
        if (event.wasClean) {
          // eslint-disable-next-line max-len
          // console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
        } else {
          // e.g. server process killed or network down
          // event.code is usually 1006 in this case
          // console.log('[close] Connection died');
        }
      };
    };
  }, [isBrowser, preData, coinData]);
  return (
    <>
      <ul>
        {coinData.length > 0 && coinData.map((data) => {
          return (
            <li>
              <div style={{
                position: 'relative', width: '30px', height: '30px', margin: '5px',
              }}
              >
                <Image alt="Mountains" src={`${data.image}`} layout="fill" objectFit="cover" />
              </div>
              {/* {formatCoinName(data.s)} */}
              {data.symbol.toUpperCase()}
              : $
              {' '}

              {Number(data.current_price).toFixed(3)}
            </li>
          );
        })}
      </ul>

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
