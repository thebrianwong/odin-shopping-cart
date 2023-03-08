import { Link } from "react-router-dom";

const NavBar = ({ gameVersion, shoppingCartQuantity }) => {
  return (
    <div className="nav-bar">
      <Link to="/odin-shopping-cart">
        <span className="nav-bar-home nav-bar-yellow">Home</span>
      </Link>
      <Link to="/odin-shopping-cart/shop">
        <span className="nav-bar-shop nav-bar-yellow">Shop</span>
      </Link>
      <p className="nav-bar-patch nav-bar-gray">Based on Patch {gameVersion}</p>
      <p className="nav-bar-cart cart-items">
        <span className="nav-bar-gray">Number of items in cart:</span>{" "}
        <span className="nav-bar-quantity nav-bar-yellow">
          {shoppingCartQuantity}
        </span>
      </p>
      <Link to="/odin-shopping-cart/checkout">
        <button>Checkout</button>
      </Link>
    </div>
  );
};

export default NavBar;
