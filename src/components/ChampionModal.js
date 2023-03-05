import { useEffect, useState } from "react";

const ChampionModal = ({ gameVersion, championData, hideModal, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [championLore, setChampionData] = useState("");
  const [loadingData, setLoadingData] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const rawData = await fetch(
        `https://ddragon.leagueoflegends.com/cdn/${gameVersion}/data/en_US/champion/${championData.id}.json`
      );
      const parsedJSON = await rawData.json();
      const championLore = parsedJSON.data[championData.id].lore;
      setChampionData(championLore);
      setLoadingData(false);
    };
    fetchData();
  }, []);
  return !loadingData ? (
    <div className="champion-modal-background" onClick={hideModal}>
      <div
        className="champion-modal"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="modal-left">
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championData.id}_0.jpg`}
            alt={`Loading screen banner of ${championData.id}.`}
          />
        </div>
        <div className="modal-right">
          <button className="modal-close-button" onClick={hideModal}>
            X
          </button>
          <div className="modal-champion-info">
            <div className="modal-non-lore">
              <h1 className="modal-name">{championData.name}</h1>
              <p className="modal-title">{championData.title}</p>
            </div>
            <p className="modal-lore">{championLore}</p>
          </div>
          <div className="modal-cart-section">
            <p className="modal-price">Price: FREE</p>
            <div className="modal-quantity-buttons">
              <button
                onClick={() => {
                  if (quantity >= 11) {
                    setQuantity(quantity - 10);
                  }
                }}
              >
                -10
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <button onClick={() => setQuantity(quantity + 10)}>+10</button>
            </div>
            <button
              className="modal-add-to-cart-button"
              onClick={() => {
                if (quantity !== "" && quantity > 0) {
                  addToCart(championData.id, quantity);
                }
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ChampionModal;
