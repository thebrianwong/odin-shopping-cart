const ChampionModal = ({ championData, hideModal }) => {
  return (
    <div>
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championData.id}_0.jpg`}
        alt={`Loading screen banner of ${championData.id}`}
      />
      <h1>{championData.name}</h1>
      <p>{championData.title}</p>
      <p>{championData.blurb + "blah blah blah, you gonna buy or what?"}</p>
      <button onClick={hideModal}>X</button>
    </div>
  );
};

export default ChampionModal;
