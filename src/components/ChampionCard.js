import { useState } from "react";
import ChampionModal from "./ChampionModal";

const ChampionCard = ({ championData }) => {
  const [displayingModal, setDisplayingModal] = useState(false);
  return (
    <>
      <button onClick={() => setDisplayingModal(true)}>
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/13.4.1/img/champion/${championData.id}.png`}
          alt={`Square portrait of ${championData.name}`}
        />
        <h1>{championData.name}</h1>
      </button>
      {displayingModal ? (
        <ChampionModal
          championData={championData}
          hideModal={() => setDisplayingModal(false)}
        />
      ) : null}
    </>
  );
};

export default ChampionCard;
