import React from "react";

const InfoContent = () => {
  return (
    <>
      <div className="info-content">
        <h1 id="info-content-header">WHAT IS CRYPTOWALLET?</h1>
        <p id="info-content-para">
          CryptoWallet is an end-to-end crypto banking and commercial solution.
        </p>

        <div className="info-content-cards">
          <div className="card">
            <div id="card-heading">
              <h2>1</h2>
              <p>Wallet</p>
            </div>

            <p id="para-2">
              Store fiat currencies and cryptocurrencies in a secure digital
              wallet
            </p>

            <img src="https://media4.giphy.com/media/EfkkQWpjFZSCIe8V8e/200w.webp?cid=ecf05e472f97mcbizs8p8c8umnvoe6oowwxcieahd9scudmr&rid=200w.webp&ct=g"></img>
          </div>

          <div className="card">
            <div id="card-heading">
              <h2>2</h2>
              <p>Card</p>
            </div>

            <p id="para-2">
              Use the debit card to spend crypto anywhere or withdraw it as cash
            </p>

            <img src="https://media1.giphy.com/media/LR6oTuKJCgaGwwIV6J/200w.webp?cid=ecf05e472f97mcbizs8p8c8umnvoe6oowwxcieahd9scudmr&rid=200w.webp&ct=g"></img>
          </div>

          <div className="card">
            <div id="card-heading">
              <h2>3</h2>
              <p>Exchange</p>
            </div>

            <p id="para-2">
              Buy and sell crypto anytime, anywhere! With your own flexibility.
            </p>

            <img src="https://media4.giphy.com/media/URU2K6jSdHPlHB135v/200w.webp?cid=ecf05e4756cbisbrutpcqo1bq29yepm1zto389ck9zh7y3i5&rid=200w.webp&ct=g"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoContent;
