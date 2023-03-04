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
    <div>
      <h1>Checkout</h1>
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
                src="https://preview.redd.it/kh2y0263znu31.jpg?width=1211&format=pjpg&auto=webp&s=6c0bbb8d147256da3437bac939b028c1c1b8950a"
                alt="pre-rework Lollipoppy'd face edited on to the default Tahm Kench splash art"
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
