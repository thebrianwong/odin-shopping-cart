import { Link } from "react-router-dom";

const NavBar = ({ gameVersion, shoppingCartQuantity }) => {
  return (
    <div className="nav-bar">
      <Link to="/">
        <span class="nav-bar-home nav-bar-yellow">Home</span>
      </Link>
      <Link to="/shop">
        <span class="nav-bar-shop nav-bar-yellow">Shop</span>
      </Link>
      <p className="nav-bar-patch nav-bar-gray">Based on Patch {gameVersion}</p>
      <p className="nav-bar-cart cart-items">
        <span class="nav-bar-gray">Number of items in cart:</span>{" "}
        <span class="nav-bar-quantity nav-bar-yellow">
          {shoppingCartQuantity}
        </span>
      </p>
      <Link to="checkout">
        <button>Checkout</button>
      </Link>
    </div>
  );
};

export default NavBar;
