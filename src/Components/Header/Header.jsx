import React, {useState} from 'react';
import "./Header.css";
import Logo from "./../../assets/logo.png";
import {FaBars} from 'react-icons/fa';
import {ImCross} from 'react-icons/im';

const Header = () => {
  const [icons, setIcons] = useState(false);

  const toggleEffect =()=>{
    setIcons(!icons);
  }
  return (
    <>
        <div className="header">
            <img src={Logo} alt="" className='logo' />

            <ul className={icons? 'header_menu active': 'header_menu'}>
                <li>Home</li>
                <li>Programs</li>
                <li>Why Us</li>
                <li>Plans</li>
                <li>Testimonals</li>
            </ul>

            <div className="toggleEffect" onClick={toggleEffect}>
              {icons?<ImCross style={{color:'white',fontSize:'2rem', cursor:'pointer'}}/>:<FaBars style={{color:'white',fontSize:'2rem', cursor:'pointer'}}/>}
            </div>
        </div>
    </>
  );
};

export default Header;
