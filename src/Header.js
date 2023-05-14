import headerimage from "./images/homepage/hero-bg-desktop.jpg";
import logo from "./images/logo.svg";

const Header = () => {
  return (
    <header>
      <div className="header-left">
        <img src={logo}></img>
        <h1>Exquisite dining since 1989</h1>
        <p>
          Experience our seasonal menu in beautiful country surroundings. Eat
          the freshest produce from the comfort of our farmhouse.
        </p>
        <button className="header-btn">Book a table</button>
      </div>
      <div className="header-right">
        <img src={headerimage}></img>
      </div>
    </header>
  );
};

export default Header;
