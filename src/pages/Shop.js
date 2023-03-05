import { useEffect, useState } from "react";
import ShopFilter from "../components/ShopFilter";
import ShopContents from "../components/ShopContents";

const Shop = ({ gameVersion, data, addToCart }) => {
  const [filteredChampions, setFilteredChampions] = useState(data);
  const [activeTags, setActiveTags] = useState([]);
  const applyChampionFilter = () => {
    setFilteredChampions(
      Object.keys(data).reduce((newFilteredChampions, currentChampion) => {
        let championHasTag = true;
        activeTags.forEach((tag) => {
          if (!data[currentChampion].tags.includes(tag)) {
            championHasTag = false;
            return;
          }
        });
        if (championHasTag) {
          return {
            ...newFilteredChampions,
            [currentChampion]: data[currentChampion],
          };
        }
        return newFilteredChampions;
      }, {})
    );
  };
  const addFilter = (tag) => {
    setActiveTags(activeTags.concat(tag));
  };
  const removeFilter = (tag) => {
    setActiveTags(
      activeTags.filter((item) => {
        return item !== tag;
      })
    );
  };
  useEffect(() => {
    applyChampionFilter();
  }, [activeTags]);
  return (
    <div className="shop">
      <h1>The Shop!</h1>
      <div className="shop-main">
        <ShopFilter addFilter={addFilter} removeFilter={removeFilter} />
        <ShopContents
          gameVersion={gameVersion}
          shopItems={filteredChampions}
          addToCart={addToCart}
        />
      </div>
    </div>
  );
};

export default Shop;
