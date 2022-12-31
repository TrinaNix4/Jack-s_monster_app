import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>All About the Monsters</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/hug.jpg"
              text="Huggy is a huggable creature… or so you might think. Huggy is known to hug, like killing hug. huggy picks up their victims wrapping huggys arms around them making them unable to fight back then biting their head off finishing off the kill
"
              label="Huggy-wuggy"
              path="/monsters"
            />
            <CardItem
              src="images/boxyboo.jpg"
              text="Boxy boo is a jack in-a-box that was a failed experiment and the result of that ended up killing an employee. But for some reason they continue selling boxy boo toys. Boxy boo swallows their victim whole and being able to jump almost 1 mile
"
              label="Boxy-boo"
              path="/monsters"
            />
            <CardItem
              src="images/mommy.jpg"
              text="Mommy long legs is the craziest out of the whole factory and is hostile towards Playtime Co. employees, but hates to see the children go when they are done with all three games thinking that they just let her rot alone in the factory. In the finale, mommy runs into a grinder that's moving and gets grinded to death. Mommy grabs the employees by the head and bangs the employees head against the floor knocking them out"
              label="Mommy-long-legs"
              path="/monsters"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
