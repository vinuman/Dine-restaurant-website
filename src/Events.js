import { useState, useEffect } from "react";

import pattern from "./images/patterns/pattern-curve-top-right.svg";
import lines from "./images/patterns/pattern-lines.svg";
import family from "./images/homepage/family-gathering-desktop.jpg";
import social from "./images/homepage/social-events-desktop.jpg";
import special from "./images/homepage/special-events-desktop.jpg";

const Events = () => {
  const [card1, setCard1] = useState(true);
  const [card2, setCard2] = useState(false);
  const [card3, setCard3] = useState(false);

  useEffect(() => {
    if (card1 == true) {
      setCard2(false);
      setCard3(false);
    }
  }, [card1]);
  useEffect(() => {
    if (card2 == true) {
      setCard3(false);
      setCard1(false);
    }
  }, [card2]);
  useEffect(() => {
    if (card3 == true) {
      setCard2(false);
      setCard1(false);
    }
  }, [card3]);

  return (
    <section className="events">
      <img className="event-pattern1" src={pattern}></img>
      <img className="event-pattern2" src={lines}></img>

      <div className="events-left">
        {card1 && <img src={family}></img>}
        {card2 && <img src={special}></img>}
        {card3 && <img src={social}></img>}
      </div>
      <div className="events-right">
        {card1 && (
          <>
            <h2>Family Gathering</h2>
            <p>
              We love catering for entire families. So please bring everyone
              along for a special meal with your loved ones. We’ll provide a
              memorable experience for all.
            </p>
          </>
        )}
        {card2 && (
          <>
            <h2>Special Events</h2>
            <p>
              Whether it’s a romantic dinner or special date you’re celebrating
              with others we’ll look after you. We’ll be sure to mark your
              special date with an unforgettable meal.
            </p>
          </>
        )}
        {card3 && (
          <>
            <h2>Social Events</h2>
            <p>
              Are you looking to have a larger social event? No problem! We’re
              more than happy to cater for big parties. We’ll work with you to
              make your event a hit with everyone.
            </p>
          </>
        )}

        <button className="events-btn">Book a table</button>
        <div className="event-selection">
          {card1 ? (
            <p onMouseEnter={() => setCard1(true)} className="event-active">
              Family gathering
            </p>
          ) : (
            <p onMouseEnter={() => setCard1(true)} className="event-inactive">
              Family gathering
            </p>
          )}
          {card2 ? (
            <p onMouseEnter={() => setCard2(true)} className="event-active">
              Special Events
            </p>
          ) : (
            <p onMouseEnter={() => setCard2(true)} className="event-inactive">
              Special Events
            </p>
          )}
          {card3 ? (
            <p onMouseEnter={() => setCard3(true)} className="event-active">
              Social Events
            </p>
          ) : (
            <p onMouseEnter={() => setCard3(true)} className="event-inactive">
              Social Events
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Events;
