import divide from "./images/patterns/pattern-divide.svg";
import salmon from "./images/homepage/salmon-desktop-tablet.jpg";
import rosemary from "./images/homepage/beef-desktop-tablet@2x.jpg";
import chocolate from "./images/homepage/chocolate-desktop-tablet.jpg";

const Highlights = () => {
  return (
    <section className="highlights">
      <div className="highlight-left">
        <img src={divide}></img>
        <h1>A few highlights from our menu</h1>
        <p>
          We cater for all dietary requirements, but here’s a glimpse at some of
          our diner’s favourites. Our menu is revamped every season.
        </p>
      </div>
      <div className="highlight-right">
        <div className="highlight-item">
          <img src={salmon}></img>
          <div className="highlight-item-para">
            <h2>Seared Salmon Fillet</h2>
            <p>
              Our locally sourced salmon served with a refreshing buckwheat
              summer salad.
            </p>
          </div>
        </div>

        <div className="highlight-item">
          <img src={rosemary}></img>
          <div className="highlight-item-para">
            <h2>Rosemary Filet Mignon</h2>
            <p>
              Our prime beef served to your taste with a delicious choice of
              seasonal sides.
            </p>
          </div>
        </div>
        <div className="highlight-item">
          <img src={chocolate}></img>
          <div className="highlight-item-para">
            <h2>Summer Fruit Chocolate Mousse</h2>
            <p>
              Creamy mousse combined with summer fruits and dark chocolate
              shavings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
