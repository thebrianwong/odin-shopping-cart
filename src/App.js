import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Shop from "./pages/Shop";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";

function App() {
  const [championData, setChampionData] = useState({});
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const rawData = await fetch(
        "https://ddragon.leagueoflegends.com/cdn/13.4.1/data/en_US/champion.json"
      );
      const parsedJSON = await rawData.json();
      const infoObject = parsedJSON.data;
      setChampionData(infoObject);
      setLoadingData(false);
    };
    fetchData();
  }, []);
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/shop"
          element={!loadingData ? <Shop data={championData} /> : null}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
