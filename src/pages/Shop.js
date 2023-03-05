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
      <ShopFilter addFilter={addFilter} removeFilter={removeFilter} />
      <div className="shop-right">
        <h1 className="shop-title">The Shop!</h1>
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
