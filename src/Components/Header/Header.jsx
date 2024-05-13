import React from "react";
import style from "./Header.module.css";
import logo from "../About/logo-01.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  return (
    <div>
      <header>
        <div className={style.containerHeader}>
          <div className={style.containerHeaderTop}>
            <div className={style.HeaderTop}>
              <p>
                100 dollardan yuxarı standart sifariş üçün pulsuz çatdırılma
              </p>
              <div className={style.HeaderTopRight}>
                <p>Yardım və Tez-tez verilən suallar</p>
                <p>Mənim Hesabım</p>
                <p>EN</p>
                <p>ABŞ dolları</p>
              </div>
            </div>
          </div>
          <div className={style.containerHeaderBottom}>
            <div className={style.HeaderBotom}>
              <div className={style.HeaderBotomLogo}>
                <img src={logo} alt="" />
                <div className={style.HeaderBotomNavbar}>
                  <nav>
                    <ul>
                        <li> <a href="">Home</a></li>
                      <li> <a href="">Shop</a></li>
                      <li> <a href="">Features</a></li>
                      <li> <a href="">Blog</a></li>
                      <li> <a href="">About</a></li>
                      <li> <a href="">Contact</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className={style.HeaderBotomIcons}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <FontAwesomeIcon icon={faCartShopping} />
              <FontAwesomeIcon icon={faHeart} />
            </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
