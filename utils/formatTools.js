export const formatCoinName = (coinName) => {
  if (coinName.substr(coinName.length - 4) === 'USDT') {
    return coinName.substr(0, coinName.length - 4);
  }
  return coinName.substr(0, coinName.length - 3);
};
