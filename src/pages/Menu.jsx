import React from 'react';
import '../styles/Menu.scss'
import Burgers from '../containers/BurgersMenu';
import Drinks from '../containers/DrinksMenu';
import Header from '../components/Header';

const Menu = () => {
    return (
        <div>
             <> <Header></Header> </>
             <> <Burgers></Burgers> </>
             <> <Drinks></Drinks> </>
        </div>
    );
};

export default Menu;