import { useState } from "react";
import ChampionModal from "./ChampionModal";

const ChampionCard = ({ gameVersion, championData, addToCart }) => {
  const [displayingModal, setDisplayingModal] = useState(false);
  return (
    <>
      <button onClick={() => setDisplayingModal(true)}>
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/${gameVersion}/img/champion/${championData.id}.png`}
          alt={`Square portrait of ${championData.name}.`}
        />
        <p>{championData.name}</p>
      </button>
      {displayingModal ? (
        <ChampionModal
          gameVersion={gameVersion}
          championData={championData}
          hideModal={() => setDisplayingModal(false)}
          addToCart={addToCart}
        />
      ) : null}
    </>
  );
};

export default ChampionCard;
