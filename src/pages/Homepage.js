import { useEffect } from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="homepage">
      <h1 className="homepage-title">Welcome to the Blue Essence Emporium!</h1>
      <p className="homepage-description-1">
        Rito Games has blessed us with a special deal! Buy as many champions as
        you want for free! They're really real and will be delivered to your
        doorsteps!!!
      </p>
      <Link to="/shop">
        <button className="homepage-shop-button">Shop Now</button>
      </Link>
      <p className="homepage-description-2">
        Don't take our word for it, ask this satisfied customer!!1!!!!11!!
      </p>
      <img
        className="homepage-image"
        src={require("../assets/images/lollipoppy_og.png")}
        alt="Cursed pre-rework splash art of Lollipoppy."
      />
      <p className="homepage-credits">
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
