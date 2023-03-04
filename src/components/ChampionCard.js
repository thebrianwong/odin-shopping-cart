import { useState } from "react";
import ChampionModal from "./ChampionModal";

const ChampionCard = ({ championData, addToCart }) => {
  const [displayingModal, setDisplayingModal] = useState(false);
  return (
    <>
      <button onClick={() => setDisplayingModal(true)}>
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/13.4.1/img/champion/${championData.id}.png`}
          alt={`Square portrait of ${championData.name}`}
        />
        <p>{championData.name}</p>
      </button>
      {displayingModal ? (
        <ChampionModal
          championData={championData}
          hideModal={() => setDisplayingModal(false)}
          addToCart={addToCart}
        />
      ) : null}
    </>
  );
};

export default ChampionCard;
