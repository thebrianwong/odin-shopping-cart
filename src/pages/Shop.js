import { useEffect, useState } from "react";
import ShopContents from "../components/ShopContents";
import ShopFilter from "../components/ShopFilter";

const Shop = ({ data, addToCart }) => {
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
    <div>
      <h1>The Shop!</h1>
      <ShopFilter addFilter={addFilter} removeFilter={removeFilter} />
      <ShopContents shopItems={filteredChampions} addToCart={addToCart} />
    </div>
  );
};

export default Shop;
