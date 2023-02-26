import { useEffect, useState } from "react";
import ShopContents from "../components/ShopContents";
import ShopFilter from "../components/ShopFilter";

const Shop = () => {
  const [championData, setChampionData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const rawData = await fetch(
        "http://ddragon.leagueoflegends.com/cdn/13.4.1/data/en_US/champion.json"
      );
      const parsedJSON = await rawData.json();
      const infoObject = parsedJSON.data;
      setChampionData(infoObject);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>The Shop!</h1>
      <ShopFilter />
      <ShopContents shopItems={championData} />
    </div>
  );
};

export default Shop;
