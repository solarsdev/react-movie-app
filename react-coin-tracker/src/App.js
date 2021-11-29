import { useEffect, useState } from 'react';
import Coin from './Coin';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((coins) => {
        setCoins(coins);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coins{loading ? null : ` (${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <ul>
          {coins.map((coin) => (
            <Coin
              key={coin.rank}
              coinName={coin.name}
              symbol={coin.symbol}
              price={coin.quotes.USD.price}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
