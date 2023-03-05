import { useEffect, useState } from "react";

const OrderConfirmation = ({ clearShoppingCart }) => {
  const [inFakeLoading, setInFakeLoading] = useState(true);
  const startFakeLoading = (delay) => {
    new Promise((resolve) => setTimeout(resolve, delay)).then((resolve) =>
      setInFakeLoading(resolve, false)
    );
  };
  useEffect(() => {
    clearShoppingCart();
  }, []);
  useEffect(() => {
    startFakeLoading((Math.random() + 1) * 2000);
  }, []);
  return (
    <>
      <h1>Order Confirmation</h1>
      {inFakeLoading ? (
        <img
          src={require("../assets/images/katarina_dance.gif")}
          alt="Classic dancing Katarina loading gif from the game shop."
        />
      ) : (
        <>
          <h3>Congratulations, your order has been placed!</h3>
          <p>
            You will soon receive shipping details for your order. Click{" "}
            <a href="https://tinyurl.com/43phznsv">here</a> for instructions.
          </p>
        </>
      )}
    </>
  );
};

export default OrderConfirmation;
