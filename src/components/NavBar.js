import { Link } from "react-router-dom";

const NavBar = ({ shoppingCartQuantity }) => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="checkout">
        <button>Checkout</button>
      </Link>
      <p className="cart-items">
        Number of items in cart: {shoppingCartQuantity}
      </p>
    </div>
  );
};

export default NavBar;
