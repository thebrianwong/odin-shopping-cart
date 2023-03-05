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
    <div className="shop-filter-section">
      <div className="shop-filter-contents">
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
        <label htmlFor="mage">
          Mage
          <input
            onClick={(e) => changeFilter(e)}
            type="checkbox"
            id="mage"
          ></input>
        </label>
        <label htmlFor="marksman">
          Marksman
          <input
            onClick={(e) => changeFilter(e)}
            type="checkbox"
            id="marksman"
          ></input>
        </label>
        <label htmlFor="support">
          Support
          <input
            onClick={(e) => changeFilter(e)}
            type="checkbox"
            id="support"
          ></input>
        </label>
        <label htmlFor="tank">
          Tank
          <input
            onClick={(e) => changeFilter(e)}
            type="checkbox"
            id="tank"
          ></input>
        </label>
      </div>
    </div>
  );
};

export default ShopFilter;
