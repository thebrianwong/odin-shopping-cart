import ChampionCard from "./ChampionCard";

const ShopContents = ({ gameVersion, shopItems, addToCart }) => {
  return (
    <>
      {Object.keys(shopItems).length > 0 ? (
        <div className="shop-cards-section">
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
          <p className="shop-poro-message">
            Poro doesn't think that sort of champion exists yet!
          </p>
          <img
            className="shop-poro-image"
            src={require("../assets/images/poro_sticker_shock.png")}
            alt="Surprised Poro with an exclamation mark and sweat bead."
          />
        </>
      )}
    </>
  );
};

export default ShopContents;
