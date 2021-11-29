const Coin = ({ coinName, symbol, price }) => {
  return (
    <li>
      {coinName} ({symbol}) - ${price}
    </li>
  );
};

export default Coin;
