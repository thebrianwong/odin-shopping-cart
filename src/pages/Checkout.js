import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CheckoutItem from "../components/CheckoutItem";

const Checkout = ({ data, shoppingCartItems, changeCartQuantity }) => {
  const [canPlaceOrder, setCanPlaceOrder] = useState(
    Object.keys(shoppingCartItems).length
  );
  const [placedEmptyOrder, setPlacedEmptyOrder] = useState(false);
  useEffect(() => {
    setCanPlaceOrder(Object.keys(shoppingCartItems).length);
  }, [shoppingCartItems]);
  return (
    <div className="checkout">
      <h1 className="checkout-title">Checkout</h1>
      {canPlaceOrder ? (
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
      ) : (
        <>
          {placedEmptyOrder ? (
            <>
              <p>Lollipoppy Kench forbids you from placing an empty order.</p>
              <img
                src={require("../assets/images/lollipoppy_kench.png")}
                alt="Pre-rework Lollipoppy's face edited on to the default Tahm Kench splash art."
              />
            </>
          ) : (
            <p>
              You cart is empty. Go to the shop and add some champions to your
              cart!
            </p>
          )}
        </>
      )}
      <Link
        onClick={(e) => {
          if (!canPlaceOrder) {
            e.preventDefault();
            setPlacedEmptyOrder(true);
          }
        }}
        to="/orderconfirmation"
      >
        <button>Place Order</button>
      </Link>
    </div>
  );
};

export default Checkout;
