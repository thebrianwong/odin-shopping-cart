import ChampionCard from "./ChampionCard";

const ShopContents = ({ gameVersion, shopItems, addToCart }) => {
  return (
    <>
      {Object.keys(shopItems).length > 0 ? (
        <div>
          {Object.keys(shopItems).map((item) => {
            return (
              <ChampionCard
                key={shopItems[item].key}
                gameVersion={gameVersion}
                championData={shopItems[item]}
                addToCart={addToCart}
              />
            );
          })}
        </div>
      ) : (
        <div>placeholder no items text</div>
      )}
    </>
  );
};

export default ShopContents;
