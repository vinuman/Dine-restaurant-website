import curveRightTop from "./images/patterns/pattern-curve-top-right.svg";
import enjoy1 from "./images/homepage/enjoyable-place-desktop.jpg";
import divide from "./images/patterns/pattern-divide.svg";
import curverLeftTop from "./images/patterns/pattern-curve-top-left.svg";
import enjoy2 from "./images/homepage/locally-sourced-desktop.jpg";
import lines from "./images/patterns/pattern-lines.svg";

const Main = () => {
  return (
    <main>
      <section>
        <div className="curve-pattern1">
          <img src={curveRightTop}></img>
        </div>
        <div className="enjoy-img1">
          <img src={enjoy1}></img>
        </div>
        <div className="enjoy-para1">
          <img src={divide}></img>
          <p className="enjoy-title">Enjoyable place for all the family</p>
          <p className="enjoy-para">
            Our relaxed surroundings make dining with us a great experience for
            everyone. We can even arrange a tour of the farm before your meal.
          </p>
        </div>
      </section>

      <section>
        <div className="curve-pattern2">
          <img src={curverLeftTop}></img>
        </div>
        <div className="enjoy-img2">
          <img src={enjoy2}></img>
        </div>
        <img className="lines" src={lines}></img>
        <div className="enjoy-para2">
          <img src={divide}></img>
          <p className="enjoy-title">The most locally sourced food</p>
          <p className="enjoy-para">
            All our ingredients come directly from our farm or local fishery. So
            you can be sure that you’re eating the freshest, most sustainable
            food.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Main;
