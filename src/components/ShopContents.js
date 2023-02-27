import ChampionCard from "./ChampionCard";

const ShopContents = ({ shopItems }) => {
  return (
    <>
      {Object.keys(shopItems).length > 0 ? (
        <div>
          {Object.keys(shopItems).map((item) => {
            return (
              <ChampionCard
                key={shopItems[item].key}
                championData={shopItems[item]}
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
