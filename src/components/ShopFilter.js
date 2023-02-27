const ShopFilter = ({ addFilter, removeFilter }) => {
  const capitalizeString = (string) => {
    return string[0].toUpperCase() + string.slice(1);
  };
  const changeFilter = (e) => {
    const checked = e.target.checked;
    const capitalizedTag = capitalizeString(e.target.id);
    if (checked) {
      addFilter(capitalizedTag);
    } else {
      removeFilter(capitalizedTag);
    }
  };
  return (
    <div>
      <label htmlFor="assassin">
        Assassin
        <input
          onClick={(e) => changeFilter(e)}
          type="checkbox"
          id="assassin"
        ></input>
      </label>
      <label htmlFor="fighter">
        Fighter
        <input
          onClick={(e) => changeFilter(e)}
          type="checkbox"
          id="fighter"
        ></input>
      </label>
      <label>
        Mage
        <input
          onClick={(e) => changeFilter(e)}
          type="checkbox"
          id="mage"
        ></input>
      </label>
      <label>
        Marksman
        <input
          onClick={(e) => changeFilter(e)}
          type="checkbox"
          id="marksman"
        ></input>
      </label>
      <label>
        Support
        <input
          onClick={(e) => changeFilter(e)}
          type="checkbox"
          id="support"
        ></input>
      </label>
      <label>
        Tank
        <input
          onClick={(e) => changeFilter(e)}
          type="checkbox"
          id="tank"
        ></input>
      </label>
    </div>
  );
};

export default ShopFilter;
