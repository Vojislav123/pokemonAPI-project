import { useState } from "react";


import Logo from '../sources/images/logo.png';
import logoOnHover from '../sources/images/logoOnHover.png'

import styles from './css/Header.module.css'

const Header = ({isReloading}) => {

    const [useLogo, setUseLogo] = useState(Logo);
    const [isTransitionActive, setIsTransitionActive] = useState(false);

    const refreshPage = () => {
      isReloading(true)
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
          <img
          className={isTransitionActive ? styles.logoAnimated : styles.imgLogo}
          onClick={refreshPage}
          src={useLogo}
          onMouseOver={animateLogo}
          onMouseOut={resetLogo}
          alt="pokeball"
          />
        </div>
      </header>
    )
}

export default Header;