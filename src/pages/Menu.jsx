import React from 'react';
import Burgers from '../containers/BurgersMenu';
import Drinks from '../containers/DrinksMenu';

const Menu = () => {
    return (
        <div>
            <> <Burgers></Burgers> </>
           <> <Drinks></Drinks> </>
        </div>
    );
};

export default Menu;