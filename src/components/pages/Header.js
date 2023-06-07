import { useState } from "react";
import { Link } from "react-router-dom";


import Logo from '../sources/images/logo.png';
import logoOnHover from '../sources/images/logoOnHover.png'

import styles from './css/Header.module.css'

const Header = () => {
    const [useLogo, setUseLogo] = useState(Logo);
    const [isTransitionActive, setIsTransitionActive] = useState(false);

    const refreshPage = () => {
        window.location.href = "/";
      };

      const animateLogo = () => {
        setUseLogo(logoOnHover);
        setIsTransitionActive(true);
      };
    
      const resetLogo = () => {
        setUseLogo(Logo);
        setIsTransitionActive(false);
      };
    


    return (
        <header className="w-full bg-gray-600">
        <div className="container mx-auto px-4 py-2 flex items-center justify-evenly">
          <Link to="/" className="text-xl font-bold text-[#a55a67] hover:text-white">
            Home
          </Link>
          <img
          className={isTransitionActive ? styles.logoAnimated : styles.imgLogo}
          onClick={refreshPage}
          src={useLogo}
          onMouseOver={animateLogo}
          onMouseOut={resetLogo}
          alt="pokeball"
          />
          <Link to="/favourites" className="text-xl font-bold text-[#a55a67] hover:text-white">
            Favourites
          </Link>
        </div>
      </header>
    )
}

export default Header;