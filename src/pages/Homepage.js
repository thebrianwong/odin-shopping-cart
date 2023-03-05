import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to the Blue Essence Emporium!</h1>
      <p>
        Rito Games has blessed us with a special deal! Buy as many champions as
        you want for free! They're really real and will be delivered to your
        doorsteps!!!
      </p>
      <p>Don't take our word for it, ask this satisfied customer!!1!!!!11!!</p>
      <img
        src={require("../assets/images/lollipoppy_og.png")}
        alt="Cursed pre-rework splash art of Lollipoppy."
      />
      <Link to="/shop">
        <button>Shop</button>
      </Link>
      <p>
        This is not real. All assets belong to Riot Games. Lollipoppy Kench is
        from this{" "}
        <a href="https://www.reddit.com/r/leagueoflegends/comments/dmvin3/lollipoppy_is_on_sale_right_now_alongside_all_the/">
          Reddit thread
        </a>
        .
      </p>
    </div>
  );
};

export default Homepage;
