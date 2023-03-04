import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <h1>Welcome to the Blue Essence Emporium!</h1>
      <p>
        Rito Games has blessed us with a special deal! Buy as many champions as
        you want for free! They're really real and will be delivered to your
        doorsteps!!!
      </p>
      <img
        src="https://preview.redd.it/2hj44387pmp61.png?width=640&crop=smart&auto=webp&s=be1cff6868894962f63b549d17279a2c38afaf13"
        alt="cursed pre-rework splash art of Lollipoppy"
      />
      <Link to="/shop">
        <button>Shop</button>
      </Link>
      <p>This is not real. All assets belong to Riot Games.</p>
    </div>
  );
};

export default Homepage;
