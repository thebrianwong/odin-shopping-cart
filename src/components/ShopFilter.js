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
        <label htmlFor="assassin" className="shop-filter-label">
          Assassin
          <input
            onClick={(e) => changeFilter(e)}
            type="checkbox"
            id="assassin"
          ></input>
        </label>
        <label htmlFor="fighter" className="shop-filter-label">
          Fighter
          <input
            onClick={(e) => changeFilter(e)}
            type="checkbox"
            id="fighter"
          ></input>
        </label>
        <label htmlFor="mage" className="shop-filter-label">
          Mage
          <input
            onClick={(e) => changeFilter(e)}
            type="checkbox"
            id="mage"
          ></input>
        </label>
        <label htmlFor="marksman" className="shop-filter-label">
          Marksman
          <input
            onClick={(e) => changeFilter(e)}
            type="checkbox"
            id="marksman"
          ></input>
        </label>
        <label htmlFor="support" className="shop-filter-label">
          Support
          <input
            onClick={(e) => changeFilter(e)}
            type="checkbox"
            id="support"
          ></input>
        </label>
        <label htmlFor="tank" className="shop-filter-label">
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
