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
    <li>
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/13.4.1/img/champion/${data[champion].id}.png`}
        alt={`Square portrait of ${data[champion].name}.`}
      />
      <p>{champion}</p>
      {updating ? (
        <>
          <input
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
          <button onClick={validateQuantity}>Submit</button>
        </>
      ) : (
        <>
          <p>{quantity}</p>
          <button onClick={() => setUpdating(true)}>Update</button>
        </>
      )}
      <button onClick={() => changeCartQuantity(champion, 0)}>
        Remove Item
      </button>
    </li>
  );
};

export default CheckoutItem;
