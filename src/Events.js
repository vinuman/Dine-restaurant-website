import pattern from "./images/patterns/pattern-curve-top-right.svg";
import lines from "./images/patterns/pattern-lines.svg";
import family from "./images/homepage/family-gathering-desktop.jpg";
import social from "./images/homepage/social-events-desktop.jpg";
import special from "./images/homepage/special-events-desktop.jpg";

const Events = () => {
  return (
    <section className="events">
      <img className="event-pattern1" src={pattern}></img>
      <img className="event-pattern2" src={lines}></img>
      <div className="events-left">
        <img src={family}></img>
        {/* <img src={social}></img>
        <img src={special}></img> */}
      </div>
      <div className="events-right">
        <h2>Family Gathering</h2>
        <p>
          We love catering for entire families. So please bring everyone along
          for a special meal with your loved ones. We’ll provide a memorable
          experience for all.
        </p>
        <button className="events-btn">Book a table</button>
      </div>
    </section>
  );
};

export default Events;
