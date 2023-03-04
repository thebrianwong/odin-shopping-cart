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
    <div>
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championData.id}_0.jpg`}
        alt={`Loading screen banner of ${championData.id}`}
      />
      <h1>{championData.name}</h1>
      <p>{championData.title}</p>
      <p>{championLore}</p>
      <p>Price: FREE</p>
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
      <button
        onClick={() => {
          if (quantity !== "" && quantity > 0) {
            addToCart(championData.id, quantity);
          }
        }}
      >
        Add To Cart
      </button>
      <button onClick={hideModal}>X</button>
    </div>
  ) : null;
};

export default ChampionModal;
