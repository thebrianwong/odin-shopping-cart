const ShopContents = ({ shopItems }) => {
  return (
    <>
      {Object.keys(shopItems).length > 0 ? (
        <ul>
          {Object.keys(shopItems).map((item) => {
            return <li key={shopItems[item].key}>{shopItems[item].name}</li>;
          })}
        </ul>
      ) : (
        <div>placeholder no items text</div>
      )}
    </>
  );
};

export default ShopContents;
