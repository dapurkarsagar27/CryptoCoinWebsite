import React from "react";
import Header from "./Header";
import Content from "./MainContent";
import InfoContent from "./InfoContent";
import VideoSection from "./VideoSection";
import SocialSection from "./SocialSection";
import ClientSection from "./ClientSection";
import License from "./License";
import SignUp from "./SignUp";
import Footer from "./Footer";
import { MoralisProvider } from "react-moralis";

const MainApp = () => {
  return (
    <>
      <MoralisProvider
        serverUrl="https://z2xzdjtckenv.usemoralis.com:2053/server"
        appId="0T1zs7PLRUGiKT3jgVL5jtgtEfbyEgg9KLavFaNR"
      >
        <div className="main-div">
          <div className="content-div">
            <Header />
            <Content />
          </div>

          <div className="info-div">
            <div className="info-div-branch">
              <InfoContent />
              <VideoSection />
            </div>
          </div>

          <div className="social-div">
            <div className="social-div-branch">
              <SocialSection />
            </div>
          </div>

          <div className="client-div">
            <div className="client-div-branch">
              <ClientSection />
              <License />
              <SignUp />
            </div>
          </div>

          <div className="footer-div">
            <div className="footer-div-branch">
              <Footer />
            </div>
          </div>
        </div>
      </MoralisProvider>
    </>
  );
};

export default MainApp;
