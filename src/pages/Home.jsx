import React from "react";
import Header from "../components/Header";
import '../styles/Home.scss';

const Home = () => {
    return (
        <><Header> </Header>
            <div className="home">
                <h1> Welcome to Shake Shack! </h1>
                <img className="logo" src="../images/shakeShackLogo.png" alt="Shake Shack Logo" />
                <button className="start-btn"> Start </button>
            </div></>
    );
}

export default Home;