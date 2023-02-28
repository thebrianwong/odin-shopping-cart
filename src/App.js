import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Shop from "./pages/Shop";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";

function App() {
  const [championData, setChampionData] = useState({});
  const [loadingData, setLoadingData] = useState(true);
  const [shoppingCart, setShoppingCart] = useState({});
  const addChampionQuantity = (champion, increment) => {
    if (shoppingCart[champion] === undefined) {
      setShoppingCart({
        ...shoppingCart,
        [champion]: Number(increment),
      });
    } else {
      setShoppingCart({
        ...shoppingCart,
        [champion]: Number(shoppingCart[champion]) + Number(increment),
      });
    }
  };
  const changeChampionQuantity = (champion, quantity) => {
    if (quantity === 0) {
      const updatedCart = { ...shoppingCart };
      delete updatedCart[champion];
      setShoppingCart(updatedCart);
    } else {
      console.log(shoppingCart);
      setShoppingCart({
        ...shoppingCart,
        [champion]: Number(quantity),
      });
    }
  };
  const calculateShoppingCartItems = () => {
    return Object.keys(shoppingCart).reduce((totalItems, currentChampion) => {
      return totalItems + shoppingCart[currentChampion];
    }, 0);
  };
  useEffect(() => {
    const sortData = (unsortedData) => {
      return Object.keys(unsortedData).reduce(
        (sortedData, currentChampionKey) => {
          if (currentChampionKey === "MonkeyKing") {
            return sortedData;
          } else if (currentChampionKey === "Xayah") {
            sortedData.MonkeyKing = unsortedData.MonkeyKing;
          }
          sortedData[currentChampionKey] = unsortedData[currentChampionKey];
          return sortedData;
        },
        {}
      );
    };
    const fetchData = async () => {
      const rawData = await fetch(
        "https://ddragon.leagueoflegends.com/cdn/13.4.1/data/en_US/champion.json"
      );
      const parsedJSON = await rawData.json();
      const unsortedChampionData = parsedJSON.data;
      const sortedChampionData = sortData(unsortedChampionData);
      setChampionData(sortedChampionData);
      setLoadingData(false);
    };
    fetchData();
  }, []);
  return (
    <BrowserRouter>
      <NavBar shoppingCartQuantity={calculateShoppingCartItems(shoppingCart)} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/shop"
          element={
            !loadingData ? (
              <Shop data={championData} addToCart={addChampionQuantity} />
            ) : null
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
