import React, { useState } from 'react';

const DrinkItem = ({ name, price, count, onAdd, onRemove }) => {
  return (
    <div>
      <span>{name} ${price.toFixed(2)}</span>
      <button onClick={onAdd}>+</button>
      <span>{count}</span>
      <button onClick={onRemove}>-</button>
    </div>
  );
};

const Drinks = () => {
  const [sunsetLemonadeCount, setSunsetLemonadeCount] = useState(0);
  const [lemonadeCount, setLemonadeCount] = useState(0);
  const [shackMadeLemonadeCount, setShackMadeLemonadeCount] = useState(0);
  const [fiftyFiftyCount, setFiftyFiftyCount] = useState(0);
  const [organicIcedTeaCount, setOrganicIcedTeaCount] = useState(0);
  const [fountainSodaCount, setFountainSodaCount] = useState(0);
  const [rootBeerCount, setRootBeerCount] = useState(0);

  return (
    <div>
      <h2>Drinks Menu</h2>
      <div>
        <DrinkItem
          name="Sunset Lemonade"
          price={3.5}
          count={sunsetLemonadeCount}
          onAdd={() => setSunsetLemonadeCount(sunsetLemonadeCount + 1)}
          onRemove={() =>
            setSunsetLemonadeCount(Math.max(sunsetLemonadeCount - 1, 0))
          }
        />
        <DrinkItem
          name="Lemonade"
          price={3}
          count={lemonadeCount}
          onAdd={() => setLemonadeCount(lemonadeCount + 1)}
          onRemove={() => setLemonadeCount(Math.max(lemonadeCount - 1, 0))}
        />
        <DrinkItem
          name="Shack-made Lemonade"
          price={4.5}
          count={shackMadeLemonadeCount}
          onAdd={() => setShackMadeLemonadeCount(shackMadeLemonadeCount + 1)}
          onRemove={() =>
            setShackMadeLemonadeCount(Math.max(shackMadeLemonadeCount - 1, 0))
          }
        />
        <DrinkItem
          name="50/50"
          price={3.5}
          count={fiftyFiftyCount}
          onAdd={() => setFiftyFiftyCount(fiftyFiftyCount + 1)}
          onRemove={() =>
            setFiftyFiftyCount(Math.max(fiftyFiftyCount - 1, 0))
          }
        /> 
        <DrinkItem
          name="Organic Iced Tea"
          price={2}
          count={organicIcedTeaCount}
          onAdd={() => setOrganicIcedTeaCount(organicIcedTeaCount + 1)}
          onRemove={() => setOrganicIcedTeaCount(Math.max(organicIcedTeaCount - 1, 0))}
        />

        <DrinkItem
          name="Fountain Soda"
          price={1.5}
          count={fountainSodaCount}
          onAdd={() => setFountainSodaCount(fountainSodaCount + 1)}
          onRemove={() => setFountainSodaCount(Math.max(fountainSodaCount - 1, 0))}
        />

        <DrinkItem
          name="Root Beer"
          price={2.5}
          count={rootBeerCount}
          onAdd={() => setRootBeerCount(rootBeerCount + 1)}
          onRemove={() => setRootBeerCount(Math.max(rootBeerCount - 1, 0))}
        />

      </div>

    </div>
  );
};

export default Drinks;