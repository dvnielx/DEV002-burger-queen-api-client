import React, { useState } from 'react';

const MenuProducts = () => {
  const [shackBurgerCount, setShackBurgerCount] = useState(0);
  const [whiteTruffleBurgerCount, setWhiteTruffleBurgerCount] = useState(0);
  const [smokeShackCount, setSmokeShackCount] = useState(0);
  const [avocadoBaconBurgerCount, setAvocadoBaconBurgerCount] = useState(0);
  const [hamburgerCount, setHamburgerCount] = useState(0);
  const [cheeseburgerCount, setCheeseburgerCount] = useState(0);
  const [friesCount, setFriesCount] = useState(0);

  return (
    <div>
      <h1>Products</h1>
      <h2>Burgers Menu</h2>
      <div>
        <span>ShackBurger $7.00</span>
        <button onClick={() => setShackBurgerCount(shackBurgerCount + 1)}>+</button>
        <span>{shackBurgerCount}</span>
        <button onClick={() => setShackBurgerCount(Math.max(shackBurgerCount - 1, 0))}>-</button>
      </div>
      <div>
        <span>White Truffle Burger $6.99</span>
        <button onClick={() => setWhiteTruffleBurgerCount(whiteTruffleBurgerCount + 1)}>+</button>
        <span>{whiteTruffleBurgerCount}</span>
        <button onClick={() => setWhiteTruffleBurgerCount(Math.max(whiteTruffleBurgerCount - 1, 0))}>-</button>
      </div>
      <div>
        <span>White Truffle Burger $5.99</span>
        <button onClick={() => setWhiteTruffleBurgerCount(whiteTruffleBurgerCount + 1)}>+</button>
        <span>{whiteTruffleBurgerCount}</span>
        <button onClick={() => setWhiteTruffleBurgerCount(Math.max(whiteTruffleBurgerCount - 1, 0))}>-</button>
      </div>
      <div>
        <span>Smoke Shack $5.50</span>
        <button onClick={() => setSmokeShackCount(smokeShackCount + 1)}>+</button>
        <span>{smokeShackCount}</span>
        <button onClick={() => setSmokeShackCount(Math.max(smokeShackCount - 1, 0))}>-</button>
      </div>
      <div>
        <span>Avocado Bacon Burger $6.50</span>
        <button onClick={() => setAvocadoBaconBurgerCount(avocadoBaconBurgerCount + 1)}>+</button>
        <span>{avocadoBaconBurgerCount}</span>
        <button onClick={() => setAvocadoBaconBurgerCount(Math.max(avocadoBaconBurgerCount - 1, 0))}>-</button>
      </div>
      <div>
        <span>Hamburger $5.00</span>
        <button onClick={() => setHamburgerCount(hamburgerCount + 1)}>+</button>
        <span>{hamburgerCount}</span>
        <button onClick={() => setHamburgerCount(Math.max(hamburgerCount - 1, 0))}>-</button>
      </div>
      <div>
        <span>Cheesburger $5.00</span>
        <button onClick={() => setCheeseburgerCount(cheeseburgerCount + 1)}>+</button>
        <span>{cheeseburgerCount}</span>
        <button onClick={() => setCheeseburgerCount(Math.max(cheeseburgerCount - 1, 0))}>-</button>
      </div>
      <div>
        <span>Fries $5.00</span>
        <button onClick={() => setFriesCount(friesCount + 1)}>+</button>
        <span>{friesCount}</span>
        <button onClick={() => setFriesCount(Math.max(friesCount - 1, 0))}>-</button>
      </div>
      </div>
);
};


export default MenuProducts;
