import React from "react";
import '../styles/Home.scss';

const Home = () => {
    return (
     <div className="home">
        <h1> Welcome to Shake Shack! </h1>
        <img className="logo" src="../images/shakeShackLogo.png" alt="Shake Shack Logo" />
     </div>   
    );
}

export default Home;