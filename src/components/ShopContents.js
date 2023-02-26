const ShopContents = ({ shopItems }) => {
  return (
    <ul>
      {Object.keys(shopItems).map((item) => {
        return <li key={shopItems[item].key}>{shopItems[item].name}</li>;
      })}
    </ul>
  );
};

export default ShopContents;
