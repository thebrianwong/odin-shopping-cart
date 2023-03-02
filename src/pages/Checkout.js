import CheckoutItem from "../components/CheckoutItem";

const Checkout = ({ data, shoppingCartItems, changeCartQuantity }) => {
  return (
    <div>
      <h1>Checkout</h1>
      <ul>
        {Object.keys(shoppingCartItems).map((champion) => {
          return (
            <CheckoutItem
              key={data[champion].key}
              data={data}
              champion={champion}
              quantity={shoppingCartItems[champion]}
              changeCartQuantity={changeCartQuantity}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Checkout;
