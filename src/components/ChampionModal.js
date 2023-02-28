import { useState } from "react";

const ChampionModal = ({ championData, hideModal, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div>
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championData.id}_0.jpg`}
        alt={`Loading screen banner of ${championData.id}`}
      />
      <h1>{championData.name}</h1>
      <p>{championData.title}</p>
      <p>{championData.blurb + "blah blah blah, you gonna buy or what?"}</p>
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
  );
};

export default ChampionModal;
