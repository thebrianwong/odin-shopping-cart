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
        <>
          <div>Poro doesn't think that sort of champion exists yet!</div>
          <img
            src={require("../assets/poro_sticker_shock.png")}
            alt="surprised Poro with an exclamation mark and sweat bead"
          />
        </>
      )}
    </>
  );
};

export default ShopContents;
