import React from "react";

const Content = () => {
  return (
    <>
      <div className="content">
        <div className="content-img">
          <img src="https://media0.giphy.com/media/mCghKeLLkjgttG9lK9/giphy.gif?cid=790b761147b1b2e903624b1ef59ddb1e614c1588af25d670&rid=giphy.gif&ct=g"></img>
        </div>
        <div className="content-info">
          <h1>
            CRYPTO IS MONEY - <br></br>LET’S USE IT
          </h1>
          <p id="content-para">
            Ready to enter the world of crypto banking? CryptoWallet is your
            gateway to brand new digital currency services to make life easier.
            You can use CryptoWallet to buy, sell, and trade crypto. You can
            make bank transfers to and from your own CryptoWallet IBAN. You can
            pay bills in crypto, and even spend crypto in stores and online.
            Best of all, you can access it all from your mobile.
          </p>

          <div className="content-ancors">
            <div>
              <a href="@">
                <div>
                  <p>
                    <i class="fa fa-apple" aria-hidden="true"></i>
                  </p>
                </div>
                <div>
                  <p id="download">Download on the</p>
                  <p id="store">App Store</p>
                </div>
              </a>
            </div>

            <div>
              <a href="@">
                <div>
                  <p>
                    <i class="fa fa-android" aria-hidden="true"></i>
                  </p>
                </div>
                <div>
                  <p id="download">Get it on</p>
                  <p id="store">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
