import React from "react";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <h1>
            CRYPTO<span id="logo-weight">WALLET</span>
          </h1>
        </div>
        <div className="nav">
          <ul>
            <li>WALLET</li>
            <li>CARD</li>
            <li>EXCHANGE</li>
            <li>BUY CRYPTO</li>
            <li>ACADEMY</li>
            <li>GLOSARRY</li>
          </ul>
        </div>
        <div className="login">
          <p>LOGIN</p>
          <button>NEW ACCOUNT</button>
        </div>
      </div>
    </>
  );
};

export default Header;
