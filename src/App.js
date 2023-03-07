import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Homepage from "./pages/Homepage";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import "./assets/fonts/BeaufortforLOL-Regular.ttf";
import "./assets/fonts/Spiegel_TT_Regular.ttf";
import "./styles/normalize.css";
import "./styles/styles.css";

function App() {
  const [gameVersion, setGameVersion] = useState(null);
  const [championData, setChampionData] = useState({});
  const [loadingData, setLoadingData] = useState(true);
  const [shoppingCart, setShoppingCart] = useState({});
  const addChampionQuantity = (champion, increment) => {
    if (champion === "MonkeyKing") {
      champion = "Wukong";
    }
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
  const clearShoppingCart = () => {
    setShoppingCart({});
  };
  const sortData = (unsortedData) => {
    const wukongData = unsortedData.MonkeyKing;
    delete unsortedData.MonkeyKing;
    unsortedData.Wukong = wukongData;
    const sortedData = Object.keys(unsortedData)
      .sort()
      .reduce((dataObject, champion) => {
        return { ...dataObject, [champion]: unsortedData[champion] };
      }, {});
    return sortedData;
  };
  const sortShoppingCart = (unsortedShoppingCart) => {
    const sortedShoppingCart = Object.keys(unsortedShoppingCart)
      .sort()
      .reduce((dataObject, champion) => {
        return { ...dataObject, [champion]: unsortedShoppingCart[champion] };
      }, {});
    return sortedShoppingCart;
  };
  useEffect(() => {
    const fetchCurrentGameVersion = async () => {
      const rawGameVersions = await fetch(
        "https://ddragon.leagueoflegends.com/api/versions.json"
      );
      const parsedGameVersion = await rawGameVersions.json();
      const currentGameVersion = parsedGameVersion[0];
      setGameVersion(currentGameVersion);
    };
    fetchCurrentGameVersion();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const rawData = await fetch(
        `https://ddragon.leagueoflegends.com/cdn/${gameVersion}/data/en_US/champion.json`
      );
      const parsedJSON = await rawData.json();
      const unsortedChampionData = parsedJSON.data;
      const sortedChampionData = sortData(unsortedChampionData);
      setChampionData(sortedChampionData);
      setLoadingData(false);
    };
    if (gameVersion) {
      fetchData();
    }
  }, [gameVersion]);
  return (
    <BrowserRouter basename="/">
      <NavBar
        gameVersion={gameVersion}
        shoppingCartQuantity={calculateShoppingCartItems(shoppingCart)}
      />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/shop"
          element={
            !loadingData ? (
              <Shop
                gameVersion={gameVersion}
                data={championData}
                addToCart={addChampionQuantity}
              />
            ) : null
          }
        />
        <Route
          path="/checkout"
          element={
            <Checkout
              data={championData}
              shoppingCartItems={sortShoppingCart(shoppingCart)}
              changeCartQuantity={changeChampionQuantity}
            />
          }
        />
        <Route
          path="/orderconfirmation"
          element={<OrderConfirmation clearShoppingCart={clearShoppingCart} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
