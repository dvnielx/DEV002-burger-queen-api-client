import React from 'react';
import '../styles/Header.scss'

const Header = () => {
    return (
        <div>
            <div>
            <nav>

    <div className="navbar-left">
      <div className="navbar-email">admin@shakeshack.com</div>
    </div>
    <div className="navbar-right">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Profile</a>
        </li>
        <li>
          <a href="/">Log Out</a>
        </li>
      </ul>
    </div>

</nav>

            </div>
        </div>
    );
};

export default Header;