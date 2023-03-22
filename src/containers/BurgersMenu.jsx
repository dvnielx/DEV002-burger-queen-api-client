import React, { useState } from 'react';

const BurgerItem = ({ name, price, count, onAdd, onRemove }) => {
  return (
    <div>
      <span>{name} ${price.toFixed(2)}</span>
      <button onClick={onAdd}>+</button>
      <span>{count}</span>
      <button onClick={onRemove}>-</button>
    </div>
  );
};

const Burgers = () => {
  const [shackBurgerCount, setShackBurgerCount] = useState(0);
  const [baconCheeseburgerCount, setBaconCheeseburgerCount] = useState(0);
  const [smokeShackCount, setSmokeShackCount] = useState(0);
  const [avocadoBaconBurgerCount, setAvocadoBaconBurgerCount] = useState(0);
  const [hamburgerCount, setHamburgerCount] = useState(0);
  const [cheeseburgerCount, setCheeseburgerCount] = useState(0);
  const [friesCount, setFriesCount] = useState(0);

  return (
    <div className='burgers-menu'>
      <h2>Burgers Menu</h2>
      <BurgerItem
        name="ShackBurger"
        price={7.0}
        count={shackBurgerCount}
        onAdd={() => setShackBurgerCount(shackBurgerCount + 1)}
        onRemove={() => setShackBurgerCount(Math.max(shackBurgerCount - 1, 0))}
      />
      <BurgerItem
        name="Bacon Cheeseburger"
        price={8.5}
        count={baconCheeseburgerCount}
        onAdd={() => setBaconCheeseburgerCount(baconCheeseburgerCount + 1)}
        onRemove={() =>
          setBaconCheeseburgerCount(Math.max(baconCheeseburgerCount - 1, 0))
        }
      />
      <BurgerItem
        name="Smoke Shack"
        price={9.5}
        count={smokeShackCount}
        onAdd={() => setSmokeShackCount(smokeShackCount + 1)}
        onRemove={() => setSmokeShackCount(Math.max(smokeShackCount - 1, 0))}
      />
      <BurgerItem
        name="Avocado Bacon Burger"
        price={10.5}
        count={avocadoBaconBurgerCount}
        onAdd={() => setAvocadoBaconBurgerCount(avocadoBaconBurgerCount + 1)}
        onRemove={() =>
          setAvocadoBaconBurgerCount(Math.max(avocadoBaconBurgerCount - 1, 0))
        }
      />
      <BurgerItem
        name="Hamburger"
        price={7.5}
        count={hamburgerCount}
        onAdd={() => setHamburgerCount(hamburgerCount + 1)}
        onRemove={() => setHamburgerCount(Math.max(hamburgerCount - 1, 0))}
      />
      <BurgerItem
        name="Cheeseburger"
        price={8.0}
        count={cheeseburgerCount}
        onAdd={() => setCheeseburgerCount(cheeseburgerCount + 1)}
        onRemove={() => setCheeseburgerCount(Math.max(cheeseburgerCount - 1, 0))}
      />
      <BurgerItem
        name="Fries"
        price={3.0}
        count={friesCount}
        onAdd={() => setFriesCount(friesCount + 1)}
        onRemove={() => setFriesCount(Math.max(friesCount - 1, 0))}
      />
    </div>
  );
};

export default Burgers;