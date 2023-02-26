import ShopContents from "../components/ShopContents";
import ShopFilter from "../components/ShopFilter";

const Shop = ({ data }) => {
  return (
    <div>
      <h1>The Shop!</h1>
      <ShopFilter />
      <ShopContents shopItems={data} />
    </div>
  );
};

export default Shop;
