import React, { useState } from 'react';

const Drinks = () => {
    const [sunsetLemonadeCount, setSunsetLemonadeCount] = useState(0);
    const [lemonadeCount, setLemonadeCount] = useState(0);
    const [shackMadeLemonadeCount, setShackMadeLemonadeCount] = useState(0);
    const [fiftyFiftyCount, setFiftyFiftyCount] = useState(0);
    const [organicIcedTeaCount, setOrganicIcedTeaCount] = useState(0);
    const [fountainSodaCount, setFountainSodaCount] = useState(0);
    const [rootBeerCount, setRootBeerCount] = useState(0);
    const [sparklingWaterCount, setSparklingWaterCount] = useState(0);
  
    return (
      <div>
        <h1>Products</h1>
        <h2>Drinks Menu</h2>
        <div>
          <span>Sunset Lemonade $3.00</span>
          <button onClick={() => setSunsetLemonadeCount(sunsetLemonadeCount + 1)}>+</button>
          <span>{sunsetLemonadeCount}</span>
          <button onClick={() => setSunsetLemonadeCount(Math.max(sunsetLemonadeCount - 1, 0))}>-</button>
        </div>
        <div>
          <span>Lemonade $2.99</span>
          <button onClick={() => setLemonadeCount(lemonadeCount + 1)}>+</button>
          <span>{lemonadeCount}</span>
          <button onClick={() => setLemonadeCount(Math.max(lemonadeCount - 1, 0))}>-</button>
        </div>
        <div>
          <span>Shack made lemonade $5.50</span>
          <button onClick={() => setShackMadeLemonadeCount(shackMadeLemonadeCount + 1)}>+</button>
          <span>{shackMadeLemonadeCount}</span>
          <button onClick={() => setShackMadeLemonadeCount(Math.max(shackMadeLemonadeCount - 1, 0))}>-</button>
        </div>
        <div>
          <span>fifty/fifty $6.50</span>
          <button onClick={() => setFiftyFiftyCount(fiftyFiftyCount + 1)}>+</button>
          <span>{fiftyFiftyCount}</span>
          <button onClick={() => setFiftyFiftyCount(Math.max(fiftyFiftyCount - 1, 0))}>-</button>
        </div>
        <div>
          <span>Organic Iced Tea $5.00</span>
          <button onClick={() => setOrganicIcedTeaCount(organicIcedTeaCount + 1)}>+</button>
          <span>{organicIcedTeaCount}</span>
          <button onClick={() => setOrganicIcedTeaCount(Math.max(organicIcedTeaCount - 1, 0))}>-</button>
        </div>
        <div>
          <span>Fountain Soda $5.00</span>
          <button onClick={() => setFountainSodaCount(fountainSodaCount + 1)}>+</button>
          <span>{fountainSodaCount}</span>
          <button onClick={() => setFountainSodaCount(Math.max(fountainSodaCount - 1, 0))}>-</button>
        </div>

        <div>
          <span>Root Beer $5.00</span>
          <button onClick={() => setRootBeerCount(rootBeerCount + 1)}>+</button>
          <span>{rootBeerCount}</span>
          <button onClick={() => setRootBeerCount(Math.max(rootBeerCount - 1, 0))}>-</button>
        </div>
    
        </div>
    )
          }

export default Drinks;
