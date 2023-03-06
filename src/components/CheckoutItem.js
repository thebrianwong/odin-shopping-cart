import { useEffect, useRef, useState } from "react";

const CheckoutItem = ({ data, champion, quantity, changeCartQuantity }) => {
  const [inputQuantity, setInputQuantity] = useState(quantity);
  const [updating, setUpdating] = useState(false);
  const inputElement = useRef(null);
  const validateQuantity = () => {
    if (inputQuantity !== "") {
      changeCartQuantity(champion, inputQuantity);
      setUpdating(false);
    }
  };
  useEffect(() => {
    if (updating) {
      inputElement.current.focus();
    }
  }, [updating]);
  return (
    <li className="checkout-list-item">
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/13.4.1/img/champion/${data[champion].id}.png`}
        alt={`Square portrait of ${data[champion].name}.`}
      />
      <p className="checkout-list-item-name">{champion}</p>
      {updating ? (
        <>
          <input
            className="checkout-list-item-input"
            type="number"
            min="0"
            value={inputQuantity}
            onChange={(e) => setInputQuantity(Number(e.target.value))}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                validateQuantity();
              }
            }}
            ref={inputElement}
          />
          <p></p>
          <button onClick={validateQuantity}>Submit</button>
        </>
      ) : (
        <>
          <p className="checkout-list-item-quantity">{quantity}</p>
          <p> x FREE = FREE</p>
          <button
            className="checkout-list-item-update-button"
            onClick={() => setUpdating(true)}
          >
            Update
          </button>
        </>
      )}
      <button
        className="checkout-list-item-remove-button"
        onClick={() => changeCartQuantity(champion, 0)}
      >
        Remove Item
      </button>
    </li>
  );
};

export default CheckoutItem;
