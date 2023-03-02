const Checkout = ({ data, shoppingCartItems }) => {
  return (
    <div>
      <h1>Checkout</h1>
      <ul>
        {Object.keys(shoppingCartItems).map((champion) => {
          return (
            <li key={data[champion].key}>
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/13.4.1/img/champion/${data[champion].id}.png`}
                alt={`Square portrait of ${data[champion].name}`}
              />
              <p>
                {champion}: {shoppingCartItems[champion]}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Checkout;
