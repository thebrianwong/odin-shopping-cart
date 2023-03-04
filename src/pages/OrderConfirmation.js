import { useEffect, useState } from "react";

const OrderConfirmation = ({ clearShoppingCart }) => {
  const [inFakeLoading, setInFakeLoading] = useState(true);
  const setTimer = (delay) => {
    new Promise((resolve) => setTimeout(resolve, delay)).then((resolve) =>
      setInFakeLoading(resolve, false)
    );
  };
  useEffect(() => {
    clearShoppingCart();
  }, []);
  useEffect(() => {
    setTimer((Math.random() + 1) * 1000);
  }, []);
  return (
    <>
      <h1>Order Confirmation</h1>
      {inFakeLoading ? (
        <img src="https://i.imgur.com/QRUPiHQ.gif" />
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