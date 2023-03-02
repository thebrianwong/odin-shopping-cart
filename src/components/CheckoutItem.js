const CheckoutItem = ({ data, champion, quantity }) => {
  return (
    <li>
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/13.4.1/img/champion/${data[champion].id}.png`}
        alt={`Square portrait of ${data[champion].name}`}
      />
      <p>
        {champion}: {quantity}
      </p>
    </li>
  );
};

export default CheckoutItem;
