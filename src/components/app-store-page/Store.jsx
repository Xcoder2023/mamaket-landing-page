import React from "react";
import "./Store.css";
// import { AiFillApple } from "react-icons/ai";
// import {FaGooglePlay} from "react-icons/fa"
import playStore from '../../assets/btn-logo/logos_google-play-icon.svg'
import appleStore from '../../assets/btn-logo/bi_apple.svg'

const Store = () => {
  return (
    <>
        <div className="app-store-right">
          <div className="app-store">
            <p>Coming soon on App Store and Google Play Store</p>
          </div>
          <div className="app-store-tiny">
            <p>
              For us, helping our customer to fulfill their needs is number one
              so that’s why we are available on every platform.
            </p>
          </div>
          <div className="store-btn">
              <button><img src={appleStore} alt="appleStore" />Download on the Apple Store</button>
             <button><img src={playStore} alt="playStore" /> GET IT ON Google Play</button>
          </div>
          <div className="store-mamaket2-btn">
            <button className="store-mamaket-btn">Join mamaket</button>
          </div>
        </div>
    </>
  );
};

export default Store;
