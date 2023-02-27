const ChampionCard = ({ championData }) => {
  return (
    <button>
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/13.4.1/img/champion/${championData.id}.png`}
        alt={`Square portrait of ${championData.name}`}
      />
      <h1>{championData.name}</h1>
    </button>
  );
};

export default ChampionCard;
