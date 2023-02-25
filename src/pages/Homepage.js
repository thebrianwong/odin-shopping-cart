import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <h1>Welcome!</h1>
      <Link to="/shop">
        <button>Shop</button>
      </Link>
    </div>
  );
};

export default Homepage;
