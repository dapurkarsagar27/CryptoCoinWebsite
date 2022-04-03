import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer-icons">
        <i class="fa fa-twitter" aria-hidden="true"></i>
        <i class="fa fa-instagram" aria-hidden="true"></i>
        <i class="fa fa-facebook" aria-hidden="true"></i>
        <i class="fa fa-youtube-play" aria-hidden="true"></i>
        <i class="fa fa-telegram" aria-hidden="true"></i>
        <i class="fa fa-linkedin" aria-hidden="true"></i>
      </div>
      <div className="footer-section">
        <ul>
          <p>App</p>
          <li>Wallet</li>
          <li>Card</li>
          <li>Exchange</li>
        </ul>

        <ul>
          <p>Information</p>
          <li>About</li>
          <li>Media Kit</li>
          <li>Help</li>
        </ul>

        <ul>
          <p>Learn</p>
          <li>Academy</li>
          <li>Guides</li>
          <li>Glossary</li>
        </ul>

        <ul>
          <p>How TO</p>
          <li>Buy Crypto</li>
          <li>Sell Crypto</li>
          <li>Send Crypto</li>
          <li>Hold Crypto</li>
        </ul>

        <ul>
          <p>Terms</p>
          <li>Terms and Conditions</li>
          <li>AML Policy</li>
          <li>Risk Warning Statement</li>
          <li>Privacy Policy</li>
          <li>Refund Policy</li>
          <li>Cancellation Policy</li>
          <li>Cookie Policy</li>
        </ul>
      </div>

      {/* <div className="footer-icons">
        <i class="fa fa-twitter" aria-hidden="true"></i>
        <i class="fa fa-instagram" aria-hidden="true"></i>
        <i class="fa fa-facebook" aria-hidden="true"></i>
        <i class="fa fa-youtube-play" aria-hidden="true"></i>
        <i class="fa fa-telegram" aria-hidden="true"></i>
        <i class="fa fa-linkedin" aria-hidden="true"></i>
      </div> */}

      <h4 id="copyright">Copyright © 2022, Designed by Sagar</h4>
    </>
  );
};

export default Footer;
