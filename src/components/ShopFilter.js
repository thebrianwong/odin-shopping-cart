const ShopFilter = () => {
  return (
    <div>
      <label htmlFor="assassin">
        Assassin
        <input type="checkbox" id="assassin"></input>
      </label>
      <label htmlFor="fighter">
        Fighter
        <input type="checkbox" id="fighter"></input>
      </label>
      <label>
        Mage
        <input type="checkbox" id="mage"></input>
      </label>
      <label>
        Marksmen
        <input type="checkbox" id="marksmen"></input>
      </label>
      <label>
        Support
        <input type="checkbox" id="support"></input>
      </label>
      <label>
        Tank
        <input type="checkbox" id="tank"></input>
      </label>
    </div>
  );
};

export default ShopFilter;
