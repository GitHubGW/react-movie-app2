import { useEffect, useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [prices, setPrices] = useState("");
  const [coinData, setCoinData] = useState(0);

  const handleChange = (event) => {
    setPrices(event.target.value);
  };

  const handleChangeSelect = (event) => {
    setCoinData(event.target.value);
  };

  useEffect(() => {
    const handleFetch = async () => {
      fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response) => response.json())
        .then((json) => {
          setCoins(json);
          setLoading(false);
        });
    };
    handleFetch();
  }, []);

  return (
    <div>
      <h1>Coin Tracker ({coins.length})</h1>
      {loading ? (
        <h1>Loading...⚛️</h1>
      ) : (
        <div>
          <h2>KRW 👉 Coin</h2>
          <input value={prices} onChange={handleChange} type="number" placeholder="금액을 입력해주세요."></input>원
          <br />
          <select onChange={handleChangeSelect}>
            <option>Select Coin</option>
            {coins.map((coin) => (
              <option key={coin.id} value={coin.quotes.USD.price * 1000}>
                #{coin.rank}: {coin.name} / {coin.symbol} / ${coin.quotes.USD.price.toFixed(1)}
              </option>
            ))}
          </select>
          <h3>환전한 코인: {prices !== 0 && coinData !== 0 && prices / coinData}</h3>
        </div>
      )}
    </div>
  );
};

export default App;
