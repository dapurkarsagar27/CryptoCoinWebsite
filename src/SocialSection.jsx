import React from "react";

const SocialSection = () => {
  return (
    <>
      <div className="social-section">
        <div className="social-section-img">
          <img src="https://media3.giphy.com/media/l49K05pJ2MBv3udG0/giphy.gif?cid=ecf05e47cnkxio85zk4w9jbnn0pvtdw9mbo9n3zunda3mjg8&rid=giphy.gif&ct=g"></img>
        </div>

        <div className="social-section-info">
          <h1>GET THE CRYPTO WALLET APP AND JOIN OUR COMMUNITY</h1>
          <div className="social-icons">
            <i class="fa fa-twitter" aria-hidden="true"></i>
            <i class="fa fa-instagram" aria-hidden="true"></i>
            <i class="fa fa-facebook" aria-hidden="true"></i>
            <i class="fa fa-youtube-play" aria-hidden="true"></i>
            <i class="fa fa-telegram" aria-hidden="true"></i>
            <i class="fa fa-linkedin" aria-hidden="true"></i>
          </div>
          <h2>Download the App Today and Get Started!</h2>

          <div className="social-content-ancors">
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

export default SocialSection;
