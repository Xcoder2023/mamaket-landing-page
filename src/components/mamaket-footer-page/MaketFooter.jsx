import React from 'react'
import "./MaketFooter.css"
import logoImg from "..//..//assets/mamket-header-img/Logo.png"
import linkedin from '..//..//assets/footer-img/social02.png'
import twitter from '..//..//assets/footer-img/social03.png'
import facebook from '..//..//assets/footer-img/social04.png'
import instagram from '..//..//assets/footer-img/social05.png'

const MaketFooter = () => {
  return (
    <>
        <div className="footer-general">
            <div className="footer-logo1">
                <img src={logoImg} alt="logo" />
            </div>
            <div className="powered">
                <p>Powered by Mamaket, Inc</p>
            </div>
            <div className="footer-media-handle">
                <ul className='social-media-handle'>
                    <li><img src={linkedin} alt="linkedin" /></li>
                    <li><img src={twitter} alt="twitter" /></li>
                    <li><img src={facebook} alt="facebook" /></li>
                    <li><img src={instagram} alt="instagram" /></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default MaketFooter